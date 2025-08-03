---
sidebar_position: 5
---

# Examples and Patterns Guide

Using existing code examples and patterns is one of the most effective ways to ensure consistency in your codebase. This guide shows how to reference examples for Claude Code to follow.

## Why Examples Matter

Examples help Claude Code:
- **Match your style** exactly
- **Follow conventions** consistently  
- **Understand intent** clearly
- **Avoid guesswork** about preferences
- **Maintain patterns** across the codebase

## Types of Examples

### 1. Direct File References
Point to specific files as templates:
```
"Create a new service following the pattern in:
/src/services/UserService.ts"
```

### 2. Code Snippets
Provide inline examples:
```
"Format API responses like this:
{
  success: boolean,
  data: T | null,
  error: string | null,
  meta: { timestamp: number }
}"
```

### 3. Pattern Descriptions
Explain the pattern conceptually:
```
"Follow our Repository pattern:
- Interface in /core/repositories/
- Implementation in /infrastructure/repositories/
- Inject via constructor
- Return Result<T> type"
```

### 4. Before/After Examples
Show transformations:
```
"Convert callbacks to async/await:
Before: getUserData((err, data) => { ... })
After: const data = await getUserData()"
```

## Referencing Patterns Effectively

### Component Patterns
```
"Create a new modal component following our pattern:
- Example: /src/components/modals/ConfirmModal.tsx
- Use our BaseModal wrapper
- Follow the props interface pattern
- Include the useModal hook usage
- Add to the modals/index.ts barrel export"
```

### API Endpoint Patterns
```
"Add a new endpoint following this pattern:
- Route example: /api/routes/products.js
- Controller example: /api/controllers/productController.js
- Naming: GET /resources, POST /resources, GET /resources/:id
- Response format: See /api/utils/responseFormatter.js
- Error handling: Use AppError class from /api/errors/"
```

### State Management Patterns
```
"Add new state following our Redux pattern:
- Slice example: /store/slices/userSlice.ts
- Actions: createAsyncThunk for API calls
- Selectors: Memoized with createSelector
- Types: In /store/types/[feature].types.ts
- Connect: Use typed hooks from /store/hooks.ts"
```

## Common Pattern Categories

### 1. Structural Patterns
```
"Follow our module structure (see /modules/user/):
modules/
└── feature/
    ├── components/     # Feature-specific components
    ├── hooks/         # Custom hooks
    ├── services/      # API calls
    ├── types/         # TypeScript types
    ├── utils/         # Helper functions
    └── index.ts       # Public exports"
```

### 2. Naming Patterns
```
"Follow our naming conventions:
- Components: PascalCase (UserProfile.tsx)
- Hooks: camelCase with 'use' prefix (useAuth.ts)
- Utils: camelCase (formatDate.ts)
- Types: PascalCase with suffix (UserDto.ts)
- Tests: Same name + .test.ts (UserProfile.test.tsx)

See examples in /src/components/ and /src/hooks/"
```

### 3. Testing Patterns
```
"Write tests following our patterns:
- Unit test example: /tests/unit/utils/validation.test.ts
- Integration example: /tests/integration/api/users.test.ts
- Component example: /tests/components/Button.test.tsx
- Use our test utilities from /tests/helpers/
- Follow AAA pattern: Arrange, Act, Assert"
```

### 4. Error Handling Patterns
```
"Handle errors like we do in /services/api/baseService.ts:
try {
  const response = await apiCall()
  return { success: true, data: response.data }
} catch (error) {
  logger.error('Operation failed', { error, context })
  return { success: false, error: error.message }
}"
```

## Pattern Documentation Strategies

### Inline Examples
```
"Use our custom hook pattern:
// Example from useUser.ts:
export function useUser(userId: string) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  
  useEffect(() => {
    // Fetch logic
  }, [userId])
  
  return { user, loading, error }
}"
```

### Reference + Explanation
```
"Create a new form following /components/forms/LoginForm.tsx:
- Use react-hook-form for validation
- Schema validation with yup
- Error display with ErrorMessage component
- Submit button disabled during loading
- Success/error toast notifications"
```

### Multiple Examples
```
"For the new data table, combine patterns from:
1. Table structure: /components/tables/UserTable.tsx
2. Pagination: /components/tables/ProductTable.tsx
3. Sorting: /components/tables/OrderTable.tsx
4. Filtering: /components/tables/TransactionTable.tsx"
```

## Pattern Anti-Patterns

### ❌ Vague Pattern References
```
"Make it like the other components"
"Follow our usual pattern"
"Do it the way we always do"
```

### ✅ Specific Pattern References
```
"Follow the Card component pattern in /components/ui/Card.tsx"
"Use the same API structure as /api/routes/users.js"
"Match the validation approach in /utils/validators/index.ts"
```

## Complex Pattern Examples

### Multi-Layer Pattern
```
"Implement the new Order feature following our layered architecture:

1. Domain Layer (see /domain/product/):
   - Entity: Order.ts
   - Value Objects: OrderStatus.ts, OrderItem.ts
   - Repository Interface: IOrderRepository.ts

2. Application Layer (see /application/product/):
   - Use Cases: CreateOrder.ts, UpdateOrderStatus.ts
   - DTOs: CreateOrderDto.ts, OrderResponseDto.ts

3. Infrastructure Layer (see /infrastructure/product/):
   - Repository: PostgresOrderRepository.ts
   - Mappers: OrderMapper.ts

4. Presentation Layer (see /presentation/product/):
   - Controller: OrderController.ts
   - Routes: orderRoutes.ts"
```

### Workflow Pattern
```
"Implement the payment flow like our registration flow:
1. Start: /flows/registration/steps/EmailStep.tsx
2. Progress: /flows/registration/steps/DetailsStep.tsx
3. Confirm: /flows/registration/steps/ConfirmStep.tsx
4. Complete: /flows/registration/steps/SuccessStep.tsx

Key patterns to follow:
- Step validation before proceeding
- Progress indicator updates
- Back button functionality
- State persistence between steps
- Error recovery on step failure"
```

### Integration Pattern
```
"Add Stripe integration following our PayPal pattern:
- Service: /integrations/paypal/PayPalService.ts
- Types: /integrations/paypal/types.ts
- Config: /config/integrations/paypal.ts
- Wrapper: /integrations/paypal/PayPalProvider.tsx
- Hooks: /integrations/paypal/hooks/usePayPal.ts

Key aspects to replicate:
- Environment-specific configuration
- Retry logic with exponential backoff
- Comprehensive error mapping
- Webhook signature verification
- Idempotency key handling"
```

## Pattern Discovery Techniques

### For New Developers
```
"To understand our patterns:
1. Authentication: Start with /src/auth/README.md
2. Components: Review /src/components/examples/
3. API Calls: Check /src/services/baseService.ts
4. State: Look at /src/store/examples/
5. Testing: See /tests/examples/"
```

### Pattern Hierarchy
```
"Our patterns from general to specific:
1. Architecture: /docs/architecture.md
2. Module Pattern: /src/modules/README.md
3. Component Pattern: /src/components/README.md
4. Specific Examples: Look for *.example.* files"
```

## Living Pattern Examples

### Component Library
```
"All our UI patterns are in Storybook:
- Run: npm run storybook
- Basic components: Button, Input, Card stories
- Complex components: DataTable, Form stories
- Patterns: Layout, Theme, Animation stories"
```

### Code Templates
```
"Use our generators for consistent patterns:
- npm run generate:component [name]
- npm run generate:service [name]
- npm run generate:module [name]

Templates in: /scripts/templates/"
```

## Pattern Evolution

### Migrating Patterns
```
"We're moving from class to functional components:
- Old pattern: /legacy/components/UserClass.js
- New pattern: /src/components/UserFunction.tsx
- Migration guide: /docs/migration/components.md
- For new components: Only use functional pattern"
```

### Deprecated Patterns
```
"Avoid these deprecated patterns:
❌ Direct state mutation (see old /legacy/store/)
❌ Callback hell (see old /legacy/api/)
❌ Inline styles (see old /legacy/components/)

✅ Use instead:
- Immutable updates (see /src/store/slices/)
- Async/await (see /src/services/)
- CSS modules (see /src/components/)"
```

## Quick Pattern Reference

### Finding Examples
1. **Similar feature?** Look in the same directory
2. **Same type?** Check other modules
3. **Common pattern?** Check shared/common directories
4. **Not sure?** Ask: "What's a good example of X?"

### Pattern Checklist
- [ ] Identified similar existing code
- [ ] Noted specific files to follow
- [ ] Understood the pattern's purpose
- [ ] Checked for recent updates
- [ ] Verified pattern is current (not legacy)

### Example-Driven Development
```
"For [new feature]:
1. Find similar: [existing feature]
2. Located at: [file path]
3. Key patterns: [list patterns]
4. Modifications needed: [differences]
5. Keep consistent: [must match items]"
```

Remember: Good examples eliminate ambiguity and ensure consistency. Always reference specific, current examples from your codebase!