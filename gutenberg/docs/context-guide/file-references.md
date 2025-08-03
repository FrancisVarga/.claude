---
sidebar_position: 4
---

# File References Guide

Effective file referencing helps Claude Code navigate your codebase efficiently and understand the context of your requests. This guide covers best practices for pointing Claude Code to the right locations.

## Why File References Matter

When you provide file references, Claude Code can:
- **Navigate directly** to relevant code without searching
- **Understand context** from surrounding code
- **Follow patterns** in existing files
- **Make changes** in the correct locations
- **Avoid confusion** in large codebases

## Types of File References

### 1. Absolute Paths
Most precise, best for specific files:
```
/src/components/auth/LoginForm.tsx
/backend/api/routes/userRoutes.js
C:\Projects\myapp\src\utils\validators.ts
```

### 2. Relative Paths
Good when context is clear:
```
components/Header.jsx (when in src/)
../utils/helpers.js (relative to current file)
./styles/main.css (same directory)
```

### 3. Pattern-Based References
For multiple files or discovering structure:
```
src/**/*.test.ts (all test files)
components/**/index.tsx (all component indexes)
api/v2/*.js (all v2 API files)
```

### 4. Contextual References
When exact path unknown:
```
"The login component" (if only one exists)
"The main API file" (if convention is clear)
"Our database models" (if in standard location)
```

## Best Practices

### 1. Start Specific, Then Broaden
```
Best: /src/components/forms/LoginForm.tsx
Good: components/forms/LoginForm.tsx
Okay: LoginForm component
Avoid: The login thing
```

### 2. Include File Extensions
```
✅ UserService.ts
✅ styles.module.css
✅ config.json
❌ UserService
❌ styles
```

### 3. Reference Related Files
```
"Update the UserProfile component at /src/components/UserProfile.tsx
Following the pattern in /src/components/UserAvatar.tsx
Using the types from /src/types/user.ts"
```

### 4. Use Landmarks
```
"Near the TODO comment in auth.js"
"Below the validateEmail function"
"In the same file as the UserContext"
"Where we define the API routes"
```

## Common Reference Patterns

### Component + Styles
```
"Update the Card component:
- Component: /src/components/ui/Card.tsx
- Styles: /src/components/ui/Card.module.css
- Tests: /src/components/ui/Card.test.tsx"
```

### API Endpoint + Handler
```
"Fix the user endpoint:
- Route definition: /api/routes/users.js
- Controller: /api/controllers/userController.js
- Model: /api/models/User.js
- Validation: /api/validators/userValidator.js"
```

### Feature Module
```
"Add to the authentication module:
- Main: /src/modules/auth/
- Components: /src/modules/auth/components/
- Services: /src/modules/auth/services/
- Types: /src/modules/auth/types.ts"
```

## Directory Structure References

### Showing Structure
```
"Our project structure:
src/
├── components/
│   ├── common/      # Shared components
│   ├── forms/       # Form components
│   └── layouts/     # Layout components
├── services/        # API services
├── utils/          # Helper functions
└── types/          # TypeScript types

Add the new date picker to components/forms/"
```

### Explaining Conventions
```
"We follow feature-based structure:
features/
├── user/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   └── types/
└── product/
    ├── components/
    ├── hooks/
    ├── services/
    └── types/

Add cart functionality as a new feature"
```

## Reference Strategies

### For New Features
```
"Create a new payment module following our structure:
- Look at: /src/modules/user/ for module pattern
- Create in: /src/modules/payment/
- Follow naming: like UserService → PaymentService"
```

### For Bug Fixes
```
"Bug in the search functionality:
- Main component: /src/components/Search/SearchBar.tsx
- API call: /src/services/searchService.ts line 45
- Related type: /src/types/search.ts
- Error occurs: when calling the filterResults function"
```

### For Refactoring
```
"Refactor the old jQuery code:
- Old code: /legacy/js/user-management.js
- New location: /src/modules/users/
- Reference modern pattern: /src/modules/products/"
```

## Dynamic References

### Using Search Patterns
```
"Find and update all API calls that use the old endpoint:
- Search for: 'api/v1/users'
- In files: src/**/*.{ts,js}
- Replace with: 'api/v2/users'"
```

### Conditional References
```
"Update the config:
- If development: /config/dev.json
- If production: /config/prod.json
- If test: /config/test.json
- Base config: /config/default.json"
```

## Line-Specific References

### Exact Line Numbers
```
"Fix the bug at:
/src/utils/validation.ts:42
(line 42 in the validation file)"
```

### Line Ranges
```
"Refactor the function at:
/src/services/auth.js:100-150
(the authenticate function from lines 100-150)"
```

### Relative Line References
```
"In /src/components/Header.tsx:
- Around line 25 (the useState hook)
- Near the renderMenu function
- Just before the return statement"
```

## Multi-File Operations

### Related Files
```
"Update the user feature:
1. Model: /backend/models/User.js
2. Controller: /backend/controllers/userController.js
3. Routes: /backend/routes/userRoutes.js
4. Tests: /backend/tests/user.test.js
5. Docs: /docs/api/users.md"
```

### Cross-References
```
"Sync these files:
- Type definition: /shared/types/user.ts
- Frontend model: /frontend/src/models/user.ts
- Backend model: /backend/src/entities/user.ts
- API contract: /api-spec/user.yaml"
```

## Handling Unknown Locations

### Guided Discovery
```
"Find the email validation (probably in):
- A utils or helpers directory
- Named something like validate, validator, or validation
- Used by the registration form"
```

### Progressive Narrowing
```
"Look for the API configuration:
1. Check /config/ directory first
2. If not there, check /src/config/
3. Look for files named api, apiConfig, or endpoints
4. It exports the BASE_URL"
```

## Common Patterns

### Frontend References
```
- Components: /src/components/[feature]/[Component].tsx
- Hooks: /src/hooks/use[Feature].ts
- Context: /src/context/[Feature]Context.tsx
- Pages: /src/pages/[page]/index.tsx
- Styles: /src/styles/[feature].module.css
```

### Backend References
```
- Routes: /routes/[resource].routes.js
- Controllers: /controllers/[resource].controller.js
- Models: /models/[Resource].model.js
- Middleware: /middleware/[function].middleware.js
- Services: /services/[resource].service.js
```

### Full-Stack References
```
- API Types: /shared/types/api/[endpoint].ts
- DB Schema: /prisma/schema.prisma
- Env Config: /.env.example
- Docker: /docker-compose.yml
- CI/CD: /.github/workflows/[action].yml
```

## Reference Shortcuts

### Common Abbreviations
```
"Update the UC" → UserController
"Fix the auth MW" → authentication middleware
"Check the DB config" → database configuration
"Update the API spec" → API specification/OpenAPI file
```

### Project-Specific Shortcuts
Define in CLAUDE.md:
```
"Project shortcuts:
- @components → /src/components/
- @api → /backend/api/
- @types → /shared/types/
- @utils → /src/lib/utils/"
```

## Anti-Patterns to Avoid

### ❌ Too Vague
```
"Fix the thing in that file"
"Update the component somewhere in src"
"Change the function we talked about"
```

### ❌ Wrong Assumptions
```
"In the usual place" (without defining usual)
"Where we always put these" (without context)
"You know, that file" (assuming memory)
```

### ❌ Incomplete Paths
```
"In components" (which subdirectory?)
"The user file" (user.js? User.tsx? userModel.js?)
"Somewhere in backend" (too broad)
```

## Quick Reference Card

### File Reference Checklist
- [ ] Full path when possible
- [ ] File extension included
- [ ] Directory context if helpful
- [ ] Line numbers for specific locations
- [ ] Related files mentioned
- [ ] Pattern shown for similar files

### Power Patterns
```
"At [path]:[line]"
"Following pattern in [example file]"
"Similar to [reference file]"
"In the [directory] directory"
"Near the [function/comment/section]"
"Where we [do something]"
```

### Progressive Specificity
1. Directory: `/src/components/`
2. Subdirectory: `/src/components/forms/`
3. File: `/src/components/forms/Input.tsx`
4. Location: `/src/components/forms/Input.tsx:45`
5. Context: `/src/components/forms/Input.tsx:45 // validation logic`

Remember: Good file references save time and prevent errors. Be as specific as your knowledge allows!