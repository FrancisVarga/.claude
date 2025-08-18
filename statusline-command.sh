#!/bin/bash

# Read JSON input from Claude Code
input=$(cat)

# Extract workspace information
current_dir=$(echo "$input" | jq -r '.workspace.current_dir')

# Get git branch
branch=$(git -C "$current_dir" branch --show-current 2>/dev/null || echo '')

# Get current time
time=$(date '+%H:%M:%S')

# Get CPU usage percentage (more reliable method)
cpu_usage=$(awk '{u=$2+$4; t=$2+$4+$5; if (NR==1){u1=u; t1=t;} else print ($2+$4-u1) * 100 / (t-t1) "%"; }' \
    <(grep 'cpu ' /proc/stat) <(sleep 0.1; grep 'cpu ' /proc/stat) 2>/dev/null || echo "0%")

# Get memory usage in a readable format
memory_info=$(free | awk 'NR==2{printf "%.1f/%.1fGB (%.0f%%)", $3/1048576, $2/1048576, $3*100/$2}' 2>/dev/null || echo "N/A")

# Get CPU percentage for status indicators and colors
cpu_percent=$(echo "$cpu_usage" | sed 's/%//')
cpu_status="✓"
cpu_color="32"  # green by default
if (( $(echo "$cpu_percent >= 80" | bc -l 2>/dev/null || echo 0) )); then
    cpu_status="⚠"
    cpu_color="33"  # yellow for warning
elif (( $(echo "$cpu_percent >= 90" | bc -l 2>/dev/null || echo 0) )); then
    cpu_status="🔥"
    cpu_color="31"  # red for critical
fi

# Get memory percentage for status indicators and colors
mem_percent=$(echo "$memory_info" | grep -o '[0-9]*%' | sed 's/%//' 2>/dev/null || echo "0")
mem_status="✓"
mem_color="32"  # green by default
if (( $(echo "$mem_percent >= 85" | bc -l 2>/dev/null || echo 0) )); then
    mem_status="⚠"
    mem_color="33"  # yellow for warning
elif (( $(echo "$mem_percent >= 95" | bc -l 2>/dev/null || echo 0) )); then
    mem_status="🔥"
    mem_color="31"  # red for critical
fi

# Color codes
GREEN="\033[32m"
BLUE="\033[34m"
YELLOW="\033[33m"
CYAN="\033[36m"
RESET="\033[0m"

# Build the status line with colors
# Format: user@host:path (branch) [time] CPU:usage MEM:usage
printf "${GREEN}$(whoami)@dersklave${RESET}:${BLUE}$current_dir${RESET}"

# Add git branch if we're in a git repository
if [ -n "$branch" ]; then
    printf " ${YELLOW}($branch)${RESET}"
fi

# Add system info and time with dynamic colors
printf " ${CYAN}[$time]${RESET} \033[${cpu_color}m${cpu_status}CPU:$cpu_usage${RESET} \033[${mem_color}m${mem_status}MEM:$memory_info${RESET}"

# Calculate context window usage
transcript_path=$(echo "$input" | jq -r '.transcript_path')
model_id=$(echo "$input" | jq -r '.model.id')

# Define context window limits for different models
case "$model_id" in
    *"claude-3-5-sonnet"*|*"claude-sonnet-4"*)
        max_tokens=200000
        ;;
    *"claude-3-opus"*)
        max_tokens=200000
        ;;
    *"claude-3-haiku"*)
        max_tokens=200000
        ;;
    *)
        max_tokens=200000  # Default assumption
        ;;
esac

# Calculate approximate token usage from transcript
if [ -f "$transcript_path" ] && [ -r "$transcript_path" ]; then
    # Rough estimation: 1 token ≈ 0.75 words, 1 word ≈ 4 characters
    # So approximately 1 token ≈ 3 characters
    char_count=$(wc -c < "$transcript_path" 2>/dev/null || echo 0)
    estimated_tokens=$((char_count / 3))
    
    # Calculate percentage
    if [ "$max_tokens" -gt 0 ]; then
        context_percent=$((estimated_tokens * 100 / max_tokens))
        # Cap at 100%
        if [ "$context_percent" -gt 100 ]; then
            context_percent=100
        fi
    else
        context_percent=0
    fi
else
    context_percent=0
fi

# Set color based on context usage
context_color="32"  # green by default
context_status=""
if [ "$context_percent" -ge 70 ]; then
    context_color="33"  # yellow for warning
    context_status="⚠"
elif [ "$context_percent" -ge 90 ]; then
    context_color="31"  # red for critical
    context_status="🔥"
fi

# Add context window indicator on the far right
printf " \033[${context_color}m${context_status}Context:${context_percent}%%${RESET}"

# End with newline
printf "\n"