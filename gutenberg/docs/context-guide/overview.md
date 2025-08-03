---
sidebar_position: 1
---

# Providing Context to Claude Code

Effective communication with Claude Code is essential for achieving optimal results. This comprehensive guide covers all the methods and best practices for providing context and guidance to ensure Claude Code understands your requirements perfectly.

## Why Context Matters

Claude Code operates most effectively when it has:
- **Clear understanding** of your project structure and conventions
- **Specific requirements** rather than vague requests
- **Examples** of existing patterns to follow
- **Constraints** that define boundaries
- **Success criteria** to validate completion

## Quick Reference

| Method | Best For | Example |
|--------|----------|---------|
| CLAUDE.md | Project conventions | Coding standards, architecture rules |
| Clear Instructions | Task clarity | "Fix login bug where empty emails pass" |
| File References | Navigation | "API endpoints are in src/routes/" |
| Examples | Pattern matching | "Follow UserController pattern" |
| Screenshots | UI issues | Visual bugs, layout problems |
| Constraints | Boundaries | "Don't modify existing models" |

## Context Methods Overview

### 1. **[CLAUDE.md Files](./claude-md.md)**
Persistent project-specific guidelines that Claude Code automatically reads.

### 2. **[Clear Instructions](./clear-instructions.md)**
How to write specific, actionable requests that get better results.

### 3. **[File References](./file-references.md)**
Pointing Claude Code to relevant files and code locations.

### 4. **[Examples and Patterns](./examples-patterns.md)**
Using existing code as templates for new implementations.

### 5. **[Constraints and Boundaries](./constraints-boundaries.md)**
Defining what should and shouldn't be done.

### 6. **[Success Criteria](./success-criteria.md)**
Establishing clear completion requirements.

### 7. **[Advanced Techniques](./advanced-techniques.md)**
Screenshots, project state, batch information, and more.

## Best Practices Summary

### ✅ DO:
- Provide context **before** the task
- Be specific about requirements
- Include relevant file paths
- Define success criteria
- Mention constraints upfront
- Use examples from your codebase

### ❌ DON'T:
- Give vague instructions
- Assume Claude Code knows project specifics
- Forget to mention important constraints
- Skip context and jump to tasks

## Common Scenarios

### Starting a New Feature
```
"We're building a user authentication system.
- Using JWT tokens (not sessions)
- PostgreSQL database with Prisma ORM
- Follow the pattern in src/modules/posts/
- Add login, logout, and refresh token endpoints"
```

### Fixing a Bug
```
"Bug: Users can submit the form with invalid email
- Form component: src/components/ContactForm.tsx
- Validation should match our pattern in src/utils/validators.ts
- Add client and server-side validation
- Show error message below the input field"
```

### Refactoring Code
```
"Refactor the PaymentService class:
- It's in src/services/PaymentService.ts
- Split into smaller methods (max 30 lines each)
- Extract Stripe logic to separate StripeAdapter
- Maintain all existing public methods
- Ensure all tests still pass"
```

## Context Hierarchy

Claude Code processes context in this priority order:

1. **Immediate instructions** - What you just asked
2. **CLAUDE.md files** - Project-specific rules
3. **File context** - Code Claude has read
4. **Previous conversation** - Earlier messages
5. **General knowledge** - Programming best practices

## Getting Started

1. Start with our **[CLAUDE.md guide](./claude-md.md)** to set up persistent project context
2. Learn to write **[clear instructions](./clear-instructions.md)** for better results
3. Master **[file references](./file-references.md)** for efficient navigation
4. Use **[examples and patterns](./examples-patterns.md)** for consistency

## Quick Tips

💡 **Tip 1**: Front-load important context
```
"IMPORTANT: We're in a migration phase, only 60% TypeScript.
Task: Convert src/utils/ to TypeScript"
```

💡 **Tip 2**: Use concrete examples
```
"Make it like UserController but for Products"
// Better than: "Create a controller"
```

💡 **Tip 3**: Define non-goals
```
"Add caching but DON'T:
- Use Redis (we use in-memory)
- Modify the database schema
- Add new dependencies"
```

## Next Steps

Ready to improve your Claude Code interactions? Start with:
- 📄 **[Setting up CLAUDE.md](./claude-md.md)** for persistent context
- ✍️ **[Writing clear instructions](./clear-instructions.md)** for better results
- 🔍 **[Using file references](./file-references.md)** effectively

Remember: The more context you provide, the better Claude Code can help you!