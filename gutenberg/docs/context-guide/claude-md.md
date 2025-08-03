---
sidebar_position: 2
---

# CLAUDE.md Files

CLAUDE.md files are the most powerful way to provide persistent, project-specific context to Claude Code. These files are automatically read and applied whenever Claude Code works on your project.

## What is CLAUDE.md?

CLAUDE.md is a markdown file that contains:
- Project-specific coding standards
- Architecture decisions and patterns
- Development constraints and rules
- Team conventions and preferences
- Important warnings or considerations

## File Locations

Claude Code looks for CLAUDE.md files in these locations (in priority order):

1. **`.claude/CLAUDE.md`** - Project-specific instructions
2. **`CLAUDE.md`** - Root directory fallback
3. **`~/.claude/CLAUDE.md`** - Global user preferences

```
project-root/
├── .claude/
│   └── CLAUDE.md      # Project-specific (highest priority)
├── CLAUDE.md          # Alternative location
└── src/
    └── ...

~/.claude/
└── CLAUDE.md          # Global preferences (lowest priority)
```

## File Structure

### Basic Template

```markdown
# Project: [Your Project Name]

## Project Overview
Brief description of what this project does and its main technologies.

## Architecture
- Architecture pattern (MVC, Clean Architecture, etc.)
- Key design decisions
- Module structure

## Coding Standards
- Language-specific conventions
- Naming conventions
- File organization rules

## Development Guidelines
- How to add new features
- Testing requirements
- Documentation standards

## Important Constraints
- What NOT to do
- Security considerations
- Performance requirements

## Common Patterns
- Examples of how things should be done
- References to key files that demonstrate patterns
```

### Comprehensive Example

```markdown
# Project: E-Commerce Platform

## Project Overview
Next.js e-commerce platform with TypeScript, Prisma, and PostgreSQL.
Using server components and app directory structure.

## Architecture
- **Pattern**: Clean Architecture with dependency injection
- **Structure**: 
  - `/app` - Next.js app directory routes
  - `/core` - Business logic (use cases, entities)
  - `/infrastructure` - External services, database
  - `/presentation` - UI components, pages

## Coding Standards

### TypeScript
- Strict mode enabled
- No `any` types allowed
- Interfaces for data contracts
- Types for unions and utilities

### File Organization
- One component per file
- Collocate tests with source files
- Group by feature, not by type

### Naming Conventions
- Components: PascalCase (e.g., `UserProfile.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Types/Interfaces: PascalCase with I prefix for interfaces
- Files: kebab-case for routes, PascalCase for components

## Development Guidelines

### Adding New Features
1. Start with use case in `/core/use-cases`
2. Define entities in `/core/entities`
3. Implement repository interface in `/core/repositories`
4. Create infrastructure implementation
5. Build UI components
6. Add tests for each layer

### Testing Requirements
- Unit tests for all use cases (100% coverage)
- Integration tests for API routes
- E2E tests for critical user flows
- Use Vitest for unit tests, Playwright for E2E

### API Design
- RESTful endpoints
- Always return consistent error format:
  ```json
  {
    "error": {
      "code": "ERROR_CODE",
      "message": "Human readable message",
      "details": {}
    }
  }
  ```

## Important Constraints

### Security
- NEVER expose database IDs in URLs
- Always validate input with Zod schemas
- Use parameterized queries (Prisma handles this)
- Implement rate limiting on all endpoints

### Performance
- Images must use next/image with optimization
- Implement pagination (max 50 items per page)
- Use React.memo for expensive components
- Cache expensive queries with Redis

### Database
- All migrations must be reversible
- Never delete data - use soft deletes
- Always add indexes for foreign keys
- Use transactions for multi-table updates

## Common Patterns

### Repository Pattern
See: `/infrastructure/repositories/user.repository.ts`
```typescript
export interface UserRepository {
  findById(id: string): Promise<User | null>
  create(data: CreateUserDto): Promise<User>
  update(id: string, data: UpdateUserDto): Promise<User>
  delete(id: string): Promise<void>
}
```

### Use Case Pattern
See: `/core/use-cases/create-order.use-case.ts`
- Inject dependencies via constructor
- Single public execute method
- Return Result<T> type for error handling

### Error Handling
See: `/lib/errors/app-error.ts`
- Use custom AppError classes
- Always include error codes
- Log errors with context

### Component Structure
See: `/components/product/product-card.tsx`
```typescript
interface Props {
  // Define all props
}

export function ComponentName({ prop1, prop2 }: Props) {
  // Hooks at the top
  // Event handlers
  // Render logic
}
```

## Git Workflow
- Feature branches from `develop`
- Conventional commits required
- PR requires 2 approvals
- Squash merge to develop

## Environment Variables
Required variables (see `.env.example`):
- DATABASE_URL
- NEXTAUTH_SECRET
- STRIPE_SECRET_KEY
- REDIS_URL

## Quick Commands
```bash
# Development
npm run dev          # Start dev server
npm run db:migrate   # Run migrations
npm run db:seed      # Seed database

# Testing
npm run test         # Unit tests
npm run test:e2e     # E2E tests
npm run test:coverage # Coverage report

# Building
npm run build        # Production build
npm run lint         # Lint check
npm run type-check   # TypeScript check
```

## Contact
- Tech Lead: @johndoe
- Project Channel: #ecommerce-dev
- Documentation: /docs
```

## Best Practices

### 1. Be Specific
```markdown
❌ "Use good naming"
✅ "Components: PascalCase, files: kebab-case, variables: camelCase"
```

### 2. Include Examples
```markdown
❌ "Follow the repository pattern"
✅ "Follow the repository pattern - see user.repository.ts"
```

### 3. Explain the Why
```markdown
❌ "Don't use any types"
✅ "Don't use any types - it defeats TypeScript's purpose and hides bugs"
```

### 4. Keep It Updated
```markdown
## Last Updated: 2024-01-15
## Version: 2.0
## Changes: Added new API error format, updated test requirements
```

### 5. Use Clear Sections
```markdown
## 🚫 Never Do This
- Commit directly to main
- Use console.log in production
- Store secrets in code

## ✅ Always Do This
- Write tests first
- Use environment variables
- Follow conventional commits
```

## Advanced Features

### Conditional Rules
```markdown
## Mobile Development (React Native)
<!-- IF: working on /mobile directory -->
- Use React Native Paper components
- Test on both iOS and Android
- Follow platform-specific guidelines
```

### Code Templates
```markdown
## Templates

### New Component Template
\```typescript
import { FC } from 'react'
import styles from './ComponentName.module.css'

interface ComponentNameProps {
  // props
}

export const ComponentName: FC<ComponentNameProps> = ({}) => {
  return <div className={styles.container}></div>
}
\```
```

### Priority Levels
```markdown
## CRITICAL: Security Rules
These MUST be followed - no exceptions:
- Sanitize all user input
- Use prepared statements
- Implement CSRF protection

## IMPORTANT: Performance Guidelines
Should be followed unless there's a good reason:
- Lazy load images
- Minimize bundle size
- Use CDN for assets

## SUGGESTED: Code Style
Nice to have but flexible:
- Order imports alphabetically
- Group related functions
- Add JSDoc comments
```

## Common CLAUDE.md Patterns

### For New Projects
Focus on:
- Technology stack
- Project structure
- Initial patterns to establish

### For Existing Projects
Focus on:
- Current conventions
- Migration strategies
- Technical debt areas

### For Team Projects
Focus on:
- Team agreements
- Review process
- Communication channels

## Troubleshooting

### Claude Code Not Following Rules?
1. Check file location (must be in correct directory)
2. Verify file name (CLAUDE.md exactly)
3. Ensure clear, unambiguous instructions
4. Use examples for complex patterns

### Conflicting Instructions?
Priority order:
1. Your immediate request
2. Project CLAUDE.md
3. Global CLAUDE.md
4. Claude's defaults

## Examples by Project Type

### React/Next.js Project
- Component patterns
- State management approach
- Routing conventions
- CSS methodology

### Python/Django Project
- Model structure
- View patterns
- Serializer conventions
- Testing approach

### Node.js API
- Route organization
- Middleware patterns
- Error handling
- Database patterns

Ready to create your CLAUDE.md? Start with our template and customize for your project's needs!