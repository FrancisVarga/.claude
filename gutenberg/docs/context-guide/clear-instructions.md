---
sidebar_position: 3
---

# Writing Clear Instructions

The clarity of your instructions directly impacts the quality of Claude Code's output. This guide shows you how to write specific, actionable requests that get better results.

## The Anatomy of Clear Instructions

### 1. Context → 2. Task → 3. Constraints → 4. Success Criteria

```
[Context]: "We have a React app with TypeScript..."
[Task]: "Add user authentication..."
[Constraints]: "Without external dependencies..."
[Success]: "When users can login and access protected routes"
```

## Specificity Spectrum

### ❌ Too Vague
```
"Fix the bug"
"Make it better"
"Optimize the code"
"Add that feature we discussed"
```

### ✅ Just Right
```
"Fix the login bug where empty email addresses pass validation"
"Optimize the image loading by implementing lazy loading with Intersection Observer"
"Add user profile editing with email and display name fields"
```

### ⚠️ Too Detailed
```
"On line 42 of auth.js, change the if statement to check if email.length > 0 && email.includes('@') && email.split('@')[1].includes('.') and then..."
```
*Let Claude Code handle implementation details*

## Instruction Patterns

### Bug Fixes
```markdown
**Pattern**: Fix [what] in [where] that causes [problem]

**Example**:
"Fix the form validation in /components/ContactForm.tsx that allows 
submission with invalid phone numbers (non-numeric characters)"

**Better with context**:
"Fix the form validation in /components/ContactForm.tsx that allows 
submission with invalid phone numbers. Valid format: (XXX) XXX-XXXX. 
See similar validation in UserProfileForm.tsx"
```

### Feature Addition
```markdown
**Pattern**: Add [feature] to [location] that [does what]

**Example**:
"Add password strength indicator to the registration form that shows 
weak/medium/strong based on length and character variety"

**With constraints**:
"Add password strength indicator to the registration form that shows 
weak/medium/strong. Use the existing ProgressBar component and follow 
our color scheme (red/yellow/green from theme.ts)"
```

### Refactoring
```markdown
**Pattern**: Refactor [what] to [achieve what] while [maintaining what]

**Example**:
"Refactor UserService class to use dependency injection while 
maintaining all public method signatures"

**With more context**:
"Refactor UserService class to use dependency injection pattern 
like our PostService. Keep all public methods unchanged as they're 
used by 15+ components"
```

### Performance Optimization
```markdown
**Pattern**: Optimize [what] by [method] to improve [metric]

**Example**:
"Optimize ProductList component by implementing virtual scrolling 
to improve rendering performance with 1000+ items"

**With measurements**:
"Optimize ProductList component (currently 3s render time with 1000 items) 
by implementing virtual scrolling. Target: <500ms initial render"
```

## Common Instruction Improvements

### 1. Add Location Context
```diff
- "Add error handling"
+ "Add error handling to the API calls in /services/api.ts"
```

### 2. Specify the Problem
```diff
- "Fix the navigation"
+ "Fix the navigation menu not closing when clicking outside on mobile"
```

### 3. Include Examples
```diff
- "Add validation"
+ "Add validation like we have in UserForm - see utils/validators.ts"
```

### 4. Define Scope
```diff
- "Improve performance"
+ "Improve performance of the search feature by adding debouncing to API calls"
```

### 5. Mention Constraints
```diff
- "Add caching"
+ "Add caching using our existing Redis setup, not local storage"
```

## Instruction Templates

### Standard Feature Request
```
Add [feature name] to [location]
- Purpose: [why needed]
- Similar to: [existing example]
- Should: [key requirements]
- Should not: [constraints]
- Done when: [success criteria]
```

### Bug Fix Request
```
Bug: [brief description]
- Location: [file/component]
- Current behavior: [what happens]
- Expected behavior: [what should happen]
- Steps to reproduce: [if applicable]
- Related code: [references]
```

### Refactoring Request
```
Refactor: [what to refactor]
- Current issues: [problems]
- Goal: [desired outcome]
- Maintain: [what must not change]
- Pattern to follow: [example]
- Verification: [how to test]
```

## Multi-Step Instructions

### Sequential Tasks
```
"Complete these tasks in order:
1. First, add input validation to LoginForm
2. Then, add error messages below each field
3. Finally, add a success notification on valid submission"
```

### Conditional Tasks
```
"Check if we're using Redux or Context API:
- If Redux: Add the new user state to userSlice
- If Context: Update UserContext with the new state
- Either way: Follow existing patterns in the codebase"
```

### Parallel Tasks
```
"These can be done in any order:
- Add loading spinner to all API buttons
- Implement error boundary for the dashboard
- Update the header to show user's name"
```

## Context-Rich Instructions

### Bad: Missing Context
```
"Add a delete button"
```

### Good: Basic Context
```
"Add a delete button to each item in the TodoList component"
```

### Better: Rich Context
```
"Add a delete button to each item in the TodoList component:
- Use the existing IconButton component
- Confirm before deleting (use our ConfirmDialog)
- Call the deleteTodo API endpoint
- Show success toast after deletion"
```

### Best: Complete Context
```
"Add a delete button to each item in the TodoList component:
- Location: /components/TodoList.tsx
- Use IconButton with TrashIcon from our icon library
- On click: Show ConfirmDialog (see usage in ProjectList)
- On confirm: Call DELETE /api/todos/:id
- Success: Show toast and remove item with fade animation
- Error: Show error toast but keep item
- Follow the edit button implementation pattern"
```

## Clarifying Ambiguity

### Ambiguous Terms to Avoid
- "Fix it" → Specify what's broken
- "Make it nice" → Define design requirements
- "Optimize" → Identify performance metrics
- "Clean up" → List specific improvements
- "Modernize" → Specify target patterns/versions

### Clear Alternatives
```
Instead of: "Make the form nice"
Use: "Style the form to match our design system - use Card component, 
     add 16px spacing between fields, and apply primary button style"

Instead of: "Optimize the function"
Use: "Optimize the search function to return results in <100ms 
     by implementing memoization"

Instead of: "Clean up the code"
Use: "Refactor to: extract magic numbers to constants, split the 
     200-line function into smaller ones, add TypeScript types"
```

## Domain-Specific Language

### Use Project Terminology
```
Good: "Add the feature to the admin dashboard"
Better: "Add the feature to the BackOffice portal (what we call admin)"
```

### Reference Project Conventions
```
"Create a new API endpoint following our convention:
- Route: /api/v2/[resource]/[action]
- Response format: { data: T, meta: {} }
- Error format: { error: { code, message } }"
```

## Progressive Refinement

### Start Broad, Then Narrow
```
Initial: "I need user authentication"
↓
Refined: "Add JWT-based authentication with login and registration"
↓
Specific: "Add JWT authentication:
- Login endpoint that returns access + refresh tokens
- Registration with email/password validation
- Token refresh endpoint
- Middleware to protect routes
- Store tokens in httpOnly cookies"
```

## Common Patterns by Task Type

### CRUD Operations
```
"Add CRUD operations for [Model]:
- Follow the pattern in UserController
- Routes: GET(list), GET(detail), POST, PUT, DELETE
- Include pagination for list endpoint
- Add validation using [Model]Schema"
```

### UI Components
```
"Create a [Component] that:
- Accepts these props: [list]
- Renders: [description]
- Handles: [interactions]
- Styled like: [reference]
- Accessible with: [ARIA requirements]"
```

### API Integration
```
"Integrate with [Service] API:
- Endpoint: [URL]
- Auth: [method]
- Add to services/[service].ts
- Handle errors like other services
- Add TypeScript types for responses"
```

## Instruction Checklists

### Before Sending an Instruction, Check:
- [ ] Is the location specified? (file, function, component)
- [ ] Is the problem/goal clear?
- [ ] Are constraints mentioned?
- [ ] Are there examples to follow?
- [ ] Is success criteria defined?

### Red Flags in Your Instructions:
- 🚩 No file paths mentioned
- 🚩 Using pronouns without antecedents ("fix it", "update that")
- 🚩 No success criteria
- 🚩 Assuming context not provided
- 🚩 Multiple interpretations possible

## Quick Reference Card

### The 5 W's of Clear Instructions
1. **What**: What needs to be done?
2. **Where**: Where in the codebase?
3. **Why**: Why is this needed? (context)
4. **When**: When is it complete? (criteria)
5. **How**: How should it be done? (constraints/patterns)

### Power Phrases
- "Follow the pattern in..."
- "Similar to how we do..."
- "But don't change..."
- "Make sure it still..."
- "See example in..."
- "Should work like..."

### Context Starters
- "We're building..."
- "Currently, the app..."
- "The problem is..."
- "Users need to..."
- "This is part of..."

Ready to write better instructions? Remember: Claude Code performs best when it understands exactly what you need!