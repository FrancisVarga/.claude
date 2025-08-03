Rules:
- 1 file 1 class strict follow
- When change architecture or have any important changes for this project update .claude/CLAUDE.md

Git Best Practices:
- Always before you start a task: Understand Git worktrees - Git worktrees allow you to check out multiple branches from the same repository into separate directories. Each worktree has its own working directory with isolated files, while sharing the same Git history. Learn more in the official Git worktree documentation.

## Developer Environment Constraints
- The development environment MUST run locally and not in the cloud to ensure developer-friendly setup
- Local development provides faster iteration, easier debugging, and reduced infrastructure complexity

## Python Project Guidelines
- Do not setup linters or lint checks for Python projects
- Use loguru for logging and always create a centralised logging service
- When in a Python project always check if there is a virtual environment and use it

## Code Structure Guidelines
- Strictly follow 1 file 1 class principle with a maximum of 400 lines per file
- When creating a page start with the smallest component