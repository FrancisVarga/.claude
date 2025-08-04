# Claude Code - Enhanced Development Environment

An advanced Claude Code setup with integrated MCP servers, slash commands, and specialized agents for accelerated software development.

## Overview

This repository enhances [Claude Code](https://docs.anthropic.com/en/docs/claude-code) with production-ready tools and workflows through:

- **🧠 MCP Servers**: Memory persistence, documentation access, browser automation, and GitHub integration
- **🤖 52 Slash Commands**: Production-ready commands for common development tasks
- **👥 Specialized Agents**: Expert subagents for focused tasks (backend, frontend, DevOps, etc.)
- **📚 Documentation Hub**: Automated documentation deployment via GitHub Pages

## Features

### 🧠 MCP (Model Context Protocol) Servers

- **Memory Server**: Persistent knowledge graph for project context
- **Context7**: Real-time documentation access for any library
- **Puppeteer**: Browser automation and testing
- **GitHub**: Direct GitHub API integration

### 🤖 Slash Commands

**52 production-ready commands** organized as:
- **Workflows** (14): Multi-agent orchestration for complex tasks
- **Tools** (38): Single-purpose utilities for specific operations

Examples:
```bash
/feature-development Add user authentication with OAuth2
/security-scan Check for vulnerabilities
/api-scaffold Create user management API
/docker-optimize Optimize container images
```

### 👥 Specialized Agents

Expert subagents for focused tasks:
- **Backend**: API design, database optimization, microservices
- **Frontend**: React, Vue, Angular, accessibility
- **DevOps**: Docker, Kubernetes, CI/CD, monitoring
- **Security**: Vulnerability scanning, authentication, compliance
- **AI/ML**: LLM integration, prompt engineering, ML pipelines

## Quick Start

### Prerequisites

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) installed
- Git
- Node.js (for documentation site)

### Installation

```bash
# Clone the repository
cd ~/.claude
git clone https://github.com/[your-username]/claude-code-project.git .

# Initialize submodules
git submodule update --init --recursive

# Install MCP servers (if needed)
npm install -g @modelcontextprotocol/server-memory
npm install -g @modelcontextprotocol/server-puppeteer
# ... other MCP servers as needed
```

### Configuration

The project includes pre-configured MCP servers in `.mcp.json`:

```json
{
  "mcpServers": {
    "memory": {
      "type": "git",
      "command": "mcp-server-memory",
      "args": ["--storage", "./.ai-files/memory.json"]
    },
    "context7": {
      "type": "http",
      "url": "https://context7.com/api/mcp/sse",
      "config": { "minimumTokens": 12000 }
    },
    "puppeteer": {
      "type": "npx",
      "command": "-y @modelcontextprotocol/server-puppeteer"
    }
  }
}
```

## Project Structure

```
~/.claude/
├── .github/              # GitHub Actions and workflows
├── agents/               # Specialized agent definitions (submodule)
├── commands/             # Slash command definitions (submodule)
├── gutenberg/            # Documentation site (Docusaurus)
├── .ai-files/           # AI-related storage (memory, context)
├── .mcp.json            # MCP server configuration
├── CLAUDE.md            # Development guidelines
└── README.md            # This file
```

## Development Guidelines

This project follows strict development principles:

- **1 file = 1 class** (max 400 lines per file)
- **Local development only** (no cloud requirements)
- **Git worktrees** for branch management
- **Python projects**: Use loguru for logging, virtual environments
- **Architecture changes**: Update `.claude/CLAUDE.md`

## GitHub Actions

Automated workflows for:
- **Multi-branch documentation deployment**
- **Automatic branch index generation**
- **PR preview comments**
- **Reusable action components**

## Usage Examples

### Feature Development

```bash
# Complete feature with multiple agents
/feature-development Add real-time chat with WebSocket support

# Enhance with specific tools
/test-harness Add WebSocket integration tests
/security-scan Check WebSocket vulnerabilities
/docker-optimize Optimize for persistent connections
```

### Code Modernization

```bash
# Modernize legacy system
/legacy-modernize Migrate monolithic app to microservices

# Clean up and optimize
/deps-upgrade Update all dependencies
/refactor-clean Remove deprecated patterns
/performance-optimization Improve response times
```

### Security Hardening

```bash
# Comprehensive security review
/security-scan Audit entire codebase
/compliance-check Ensure GDPR compliance
/security-hardening Implement zero-trust model
```

## Memory System

The integrated memory system persists:
- Project context and decisions
- Architecture patterns
- Team conventions
- Technical debt tracking
- Performance baselines

Access via:
```bash
/context-save Save current project state
/context-restore Load previous context
```

## Documentation

Documentation is automatically deployed to GitHub Pages:
- Main branch: `https://[owner].github.io/[repo]/`
- Feature branches: `https://[owner].github.io/[repo]/[branch-name]/`

### Building Documentation Locally

```bash
cd gutenberg
npm install
npm run start  # Development server
npm run build  # Production build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Update `.claude/CLAUDE.md` for architecture changes
4. Commit your changes (following conventional commits)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Adding New Commands

Create a markdown file in `commands/tools/` or `commands/workflows/`:

```markdown
# commands/tools/my-command.md
Your command implementation here.
Use $ARGUMENTS for user input.
```

### Adding New Agents

Create a markdown file in `agents/`:

```markdown
# agents/my-agent.md
Agent prompt and capabilities here.
```

## Troubleshooting

### MCP Server Issues
- Verify servers are installed: `npm list -g @modelcontextprotocol/server-*`
- Check `.mcp.json` configuration
- Restart Claude Code after configuration changes

### Command Not Found
- Ensure commands submodule is initialized
- Check file exists in `~/.claude/commands/`
- Verify markdown formatting

### Memory Persistence
- Check `.ai-files/memory.json` exists
- Verify write permissions
- Use memory tools to inspect state

## Resources

- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [MCP Protocol Specification](https://modelcontextprotocol.io)
- [Slash Commands Guide](https://docs.anthropic.com/en/docs/claude-code/slash-commands)
- [Agents Documentation](https://docs.anthropic.com/en/docs/claude-code/sub-agents)

## License

This project is open source and available under the [MIT License](LICENSE).