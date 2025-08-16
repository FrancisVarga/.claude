#!/bin/bash

# Read JSON input from stdin
input=$(cat 2>/dev/null || echo '{}')

# Extract information from Claude Code JSON
model_name=$(echo "$input" | jq -r '.model.display_name // "Claude"')
cwd=$(echo "$input" | jq -r '.workspace.current_dir // .cwd // ""')
session_id=$(echo "$input" | jq -r '.session_id // ""')

# Extract token information
total_tokens=$(echo "$input" | jq -r '.tokens.total // 0')
cached_tokens=$(echo "$input" | jq -r '.tokens.cached // 0')

# Use current directory if cwd is empty or null
if [ -z "$cwd" ] || [ "$cwd" = "null" ]; then
    cwd=$(pwd)
fi

# Get username
user=$(whoami 2>/dev/null || echo "user")

# Get hostname (short form)
hostname=$(hostname 2>/dev/null | cut -d'.' -f1 || echo "localhost")

# Get git branch and status (suppress errors and optional locks)
git_info=""
if git rev-parse --git-dir >/dev/null 2>&1; then
    git_branch=$(git branch --show-current 2>/dev/null || git rev-parse --short HEAD 2>/dev/null || echo "detached")
    if [ -z "$git_branch" ]; then
        git_branch="detached"
    fi
    
    # Check for uncommitted changes (Windows-compatible)
    if ! git diff-index --quiet HEAD -- 2>/dev/null && git diff-index --name-only HEAD -- 2>/dev/null | head -1 >/dev/null; then
        git_status="*"
    else
        git_status=""
    fi
    
    git_info="($git_branch$git_status)"
fi

# Get current time
current_time=$(date +"%H:%M:%S")

# Directory name (similar to \W in PS1)
dir_name=$(basename "$cwd")

# Build status line in shell prompt style: user@host:dir git_info model time
status_line="$user@$hostname:$dir_name"

if [ -n "$git_info" ]; then
    status_line="$status_line $git_info"
fi

# Add model info with token metrics if available
if [ -n "$model_name" ] && [ "$model_name" != "null" ]; then
    model_info="$model_name"
    
    # Add token information if available
    if [ "$total_tokens" != "0" ] && [ "$total_tokens" != "null" ]; then
        if [ "$cached_tokens" != "0" ] && [ "$cached_tokens" != "null" ]; then
            # Format: Model | 1.2K tokens (340 cached)
            total_k=$(echo "scale=1; $total_tokens / 1000" | bc 2>/dev/null || echo "$total_tokens")
            cached_k=$(echo "scale=1; $cached_tokens / 1000" | bc 2>/dev/null || echo "$cached_tokens")
            
            # Format numbers cleanly (remove trailing .0)
            total_display=$(echo "$total_k" | sed 's/\.0$//')
            cached_display=$(echo "$cached_k" | sed 's/\.0$//')
            
            model_info="$model_info | ${total_display}K tokens (${cached_display}K cached)"
        else
            # Format: Model | 1.2K tokens
            total_k=$(echo "scale=1; $total_tokens / 1000" | bc 2>/dev/null || echo "$total_tokens")
            total_display=$(echo "$total_k" | sed 's/\.0$//')
            model_info="$model_info | ${total_display}K tokens"
        fi
    fi
    
    status_line="$status_line [$model_info]"
fi

# Add time
status_line="$status_line $current_time"

echo "$status_line"