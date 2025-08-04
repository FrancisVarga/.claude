# Copilot Instructions for Claude Code Ecosystem

## Project Architecture

This is a **multi-agent workflow orchestration system** built around Claude Code with three main components:

- **`agents/`**: 50 specialized AI subagents (Haiku/Sonnet/Opus models) for domain expertise
- **`commands/`**: 52 slash commands orchestrating workflows across multiple agents
- **`gutenberg/`**: Docusaurus documentation site for workflow creator patterns

### Key Architectural Patterns

**Multi-Agent Coordination**: Sequential → Parallel → Conditional workflows with context passing

```bash
# Sequential: backend-architect → frontend-developer → test-automator → security-auditor
# Parallel: performance-engineer + database-optimizer → merged recommendations
# Conditional: debugger analyzes → routes to appropriate specialist
```

**MCP Server Integration**: Uses Model Context Protocol for memory, context7, and GitHub integration via `.mcp.json`

## Development Workflows

### Adding New Agents

```markdown
---
name: agent-name
description: When this agent should be invoked
model: haiku|sonnet|opus # Based on complexity
---

System prompt defining role and capabilities
```

### Creating Slash Commands

- **Workflows** (`commands/workflows/`): Multi-agent orchestration for complex tasks
- **Tools** (`commands/tools/`): Single-purpose utilities with complete implementations

### Building Documentation

```bash
cd gutenberg
npm install
npm start  # Local development
npm run build  # Production build
```

## Critical Conventions

### File Organization

- **1 file = 1 class** strict rule (max 400 lines per file)
- **Always update `CLAUDE.md`** for architecture changes
- Use **loguru for Python logging** with centralized service
- **Check for virtual environments** in Python projects

### Agent Model Assignment Strategy

- **Haiku**: Simple tasks (data analysis, documentation, support)
- **Sonnet**: Standard development (most language-specific agents, infrastructure)
- **Opus**: Complex tasks (AI engineering, security auditing, incident response)

### Context Management

- Use `context-manager` agent for projects >10k tokens
- Context flows between workflow phases via Task tool outputs
- Store critical decisions in memory for multi-session continuity

## Integration Points

### GitHub Actions

- Multi-branch Docusaurus deployment to GitHub Pages
- Branch-specific documentation at `/{branch-name}/`
- Automated branch index generation

### MCP Servers

```json
"memory": "./ai-files/memory.json"  // Context persistence
"context7": "@upstash/context7-mcp" // Library documentation
"github": "api.githubcopilot.com"   // Pull request integration
```

### Cross-Component Communication

- **Agent Discovery**: Dynamic matching via semantic analysis
- **Workflow Validation**: Strict mode with fallback agent requirements
- **Execution Engine**: Task tool orchestration with context accumulation

## Essential Commands

```bash
# Multi-agent feature development
/full-stack-feature "user authentication with OAuth2"

# Security-first implementation
/security-hardening "API endpoints with zero-trust"

# Production incident response
/incident-response "high memory usage in production"

# Multi-perspective code review
/multi-agent-review "authentication module"
```

## Local Development

### Prerequisites

- Node.js for Docusaurus builds
- Python virtual environment for agent development
- Git worktrees understanding (multiple branches, shared history)

### Quick Start

```bash
# Add new agent
vim agents/new-agent.md  # Follow agent format

# Add new command
vim commands/tools/new-tool.md  # Use $ARGUMENTS placeholder

# Test documentation
cd gutenberg && npm start

# Deploy changes
git push  # Triggers GitHub Pages deployment
```

## Common Patterns

### Workflow Orchestration

1. **Requirements Analysis** → Task Decomposition → Agent Matching
2. **Context Passing** between phases via Task tool outputs
3. **Fallback Agents** specified for critical phases
4. **Coordination Notes** ensure agent synchronization

### Error Handling

- **Agent unavailable**: Use fallback agents in workflow phases
- **Context overflow**: Trigger context-manager for compression
- **Build failures**: Check Node.js compatibility and package-lock.json

This ecosystem emphasizes **intelligent agent coordination** over manual task management - leverage the 50+ specialized agents and pre-built workflows rather than implementing from scratch.
