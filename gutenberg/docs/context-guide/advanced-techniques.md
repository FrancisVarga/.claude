---
sidebar_position: 8
---

# Advanced Context Techniques

Master advanced techniques for providing context to Claude Code, including screenshots, project state management, batch operations, and complex scenarios.

## Visual Context with Screenshots

### When to Use Screenshots
Screenshots are powerful for:
- UI bugs and layout issues
- Design implementation
- Visual regression problems  
- Complex UI state
- Before/after comparisons

### Effective Screenshot Usage
```
"Fix the alignment issue shown in the screenshot:
Path: /screenshots/nav-bug.png
Issue: Menu items not vertically centered
Component: /src/components/Navigation.tsx
Current: Items appear too high
Expected: Centered with 16px padding"
```

### Screenshot + Annotation
```
"Implement the design from the mockup:
Design: /designs/new-dashboard.png
Key elements marked:
- Red box: Stats cards (use Card component)
- Blue arrow: Data should update real-time
- Green circle: Add tooltip on hover
Match exact spacing and colors shown"
```

### Multiple Screenshots
```
"Fix responsive issues:
1. Desktop: /screens/desktop-good.png (reference)
2. Tablet: /screens/tablet-broken.png (fix this)
3. Mobile: /screens/mobile-broken.png (fix this)
Breakpoints: 768px (tablet), 480px (mobile)"
```

## Project State Context

### Migration State
```
"PROJECT STATE: TypeScript Migration 60% Complete

Completed:
- /src/utils/* (fully typed)
- /src/components/common/* (fully typed)
- /src/services/* (partially typed)

In Progress:
- /src/components/features/* (30% done)

Not Started:
- /src/legacy/*
- /src/admin/*

Continue migration in components/features/
Follow patterns from completed files"
```

### Development Phase
```
"PROJECT PHASE: MVP Development

Current Sprint Focus:
- User authentication ✓
- Basic CRUD operations ✓
- Payment integration (IN PROGRESS)
- Email notifications (NEXT)

Don't implement:
- Advanced analytics (Phase 2)
- Social features (Phase 2)  
- Mobile app (Phase 3)"
```

### Technical Debt State
```
"TECH DEBT CONTEXT:

High Priority:
- Database queries not optimized
- No caching implemented
- API lacks rate limiting

Medium Priority:
- Inconsistent error handling
- Missing unit tests
- Outdated dependencies

For this task: Address high priority items only"
```

## Batch Information Technique

### Related Changes
```
"Update all date formatting:

Files to update:
- /components/OrderList.tsx (line 45)
- /components/UserProfile.tsx (line 78)
- /components/Dashboard.tsx (line 120)
- /utils/formatters.ts (create helper)

Change from: moment().format('MM/DD/YYYY')
Change to: formatDate(date, 'short')
Create the formatDate helper first"
```

### Systematic Updates
```
"Implement new API error format across all services:

New format:
{
  error: {
    code: 'ERROR_CODE',
    message: 'User friendly message',
    details: {},
    timestamp: ISO8601
  }
}

Services to update:
1. AuthService (/services/auth.ts)
2. UserService (/services/user.ts)
3. ProductService (/services/product.ts)
4. OrderService (/services/order.ts)

Also update:
- Error handler middleware
- API documentation
- Frontend error parsing"
```

## Complex Scenario Context

### Multi-System Integration
```
"Integrate payment system:

Systems involved:
1. Frontend: React checkout flow
2. Backend: Node.js API
3. Database: PostgreSQL orders table
4. External: Stripe API
5. Queue: Redis for webhooks

Flow:
1. Frontend initiates payment
2. Backend creates pending order
3. Stripe processes payment
4. Webhook updates order status
5. Frontend shows confirmation

See diagram: /docs/payment-flow.png"
```

### Conditional Logic
```
"Add feature flags system:

Requirements:
- If DEV: Load flags from local config
- If STAGING: Load from feature flag service  
- If PROD: Load from service + cache 24h

Flag format:
{
  flagName: {
    enabled: boolean,
    rollout: number (0-100),
    conditions: {
      userGroups?: string[],
      regions?: string[]
    }
  }
}

Reference: LaunchDarkly SDK patterns"
```

## Historical Context

### Previous Attempts
```
"Optimize search (third attempt):

Previous attempts:
1. Elasticsearch (too complex, removed)
2. PostgreSQL FTS (too slow)

This time:
- Use MeiliSearch
- Already installed at localhost:7700
- Index only title, description, tags
- See failed attempts in /docs/search-history.md"
```

### Evolution Context
```
"Refactor auth system:

History:
- v1: Session-based (2019)
- v2: JWT in localStorage (2020)
- v3: JWT in httpOnly cookies (2021)

Now (v4):
- Keep JWT in cookies
- Add refresh token rotation
- Implement token family detection
- Don't break v3 clients (6 month transition)"
```

## Environmental Context

### Multi-Environment
```
"Configure logging:

Per environment needs:
- LOCAL: Console only, all levels
- DEV: File + console, debug and up
- STAGING: CloudWatch, info and up
- PROD: CloudWatch + Sentry, warn and up

Use LOG_LEVEL and LOG_TARGETS env vars
Config examples in /config/env-examples/"
```

### Cross-Platform
```
"Add file handling:

Platform considerations:
- Windows: Handle backslashes, drive letters
- Mac: Handle .DS_Store, resource forks
- Linux: Handle permissions, symlinks

Path handling:
- Always use path.join()
- Never hardcode separators
- Test on all platforms"
```

## Team Context

### Code Ownership
```
"Modify payment module:

Team context:
- Owner: @payments-team
- Reviewer required: @john-smith
- Notify: @finance-team
- SLA: Critical, 24h response

Recent changes:
- See PR #1234 for context
- Breaking change in v2.5
- Migration guide in /docs/payment-v2.md"
```

### Communication Context
```
"API deprecation:

Stakeholder context:
- Mobile team uses this endpoint
- Deprecation date: 2024-06-01
- Migration guide written: /docs/api-migration.md
- Teams notified: Mobile, Web, Partners

Add deprecation:
- Header: X-Deprecated: true
- Warning in response
- Log usage for metrics"
```

## Performance Context

### Current Metrics
```
"Optimize dashboard:

Current performance:
- Initial load: 4.2s (target: <2s)
- API calls: 15 (target: <5)
- Bundle size: 2.4MB (target: <1MB)
- Memory: 150MB (target: <100MB)

Bottlenecks identified:
- Moment.js: 230KB → use date-fns
- Lodash: 140KB → use specific imports
- Unnecessary API calls in loop

Measure with: npm run perf:dashboard"
```

### Load Patterns
```
"Implement caching:

Traffic patterns:
- Peak: 9am-11am EST (10k req/min)
- Low: 2am-4am EST (100 req/min)
- Spike events: Marketing emails (50k in 5min)

Cache strategy:
- User data: 5min TTL
- Product catalog: 1hr TTL
- Static content: 24hr TTL
- Invalidate on updates"
```

## Debugging Context

### Known Issues
```
"Fix memory leak:

Context:
- Occurs after 4-6 hours running
- Only in production build
- Memory grows by ~10MB/hour
- Suspected: Event listeners not cleaned

Previous debugging:
- Heap snapshots in /debug/heaps/
- Chrome DevTools timeline: /debug/timeline.json
- Suspected components: DataGrid, RealtimeChart

Start with DataGrid component"
```

### Error Context
```
"Handle edge case:

Error reports show:
- Frequency: 50-100 times/day
- Users affected: ~2%
- Pattern: Happens on slow connections
- Error: 'Cannot read property X of undefined'
- Stack trace: Points to line 234

Logs indicate:
- Race condition with API calls
- Happens when component unmounts
- Need cleanup in useEffect"
```

## Integration Context

### Third-Party Services
```
"Update Stripe integration:

Context:
- Current version: 8.x (outdated)
- Target version: 11.x
- Breaking changes: Webhook signatures, Price API
- Our usage: Subscriptions, one-time payments

Migration needs:
- Update webhook handler
- Change Price API calls
- Test in Stripe test mode
- Update our API docs"
```

### API Contracts
```
"Implement new partner endpoint:

Contract details:
- Spec: /specs/partner-api-v2.yaml
- Auth: Bearer token + HMAC signature
- Rate limit: 100 req/min
- SLA: 99.9% uptime, <200ms response

Their requirements:
- Idempotency keys required
- Pagination max 100 items
- ISO 8601 dates only
- Errors in their format (see spec)"
```

## Quick Reference

### Context Layering
1. **Immediate**: Current task specifics
2. **Project**: Overall project state
3. **Historical**: Past decisions/attempts
4. **Environmental**: Platform/deployment
5. **Team**: People and processes

### Advanced Patterns
```
"Context template:
WHAT: [Specific task]
WHERE: [Location/files]
CURRENT STATE: [How it is now]
DESIRED STATE: [How it should be]
CONSTRAINTS: [What to preserve]
CONTEXT: [Additional background]
SUCCESS: [How to verify]"
```

### Power User Tips
- **Use diagrams**: Reference architecture/flow diagrams
- **Link issues**: "See GitHub issue #123 for discussion"
- **Show examples**: "Like production but with test data"
- **State assumptions**: "Assuming Redis is already configured"
- **Provide fallbacks**: "If X doesn't work, try Y"

Remember: Rich context leads to better results. The more relevant information you provide, the more accurately Claude Code can help!