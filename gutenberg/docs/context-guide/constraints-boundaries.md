---
sidebar_position: 6
---

# Constraints, Boundaries & Success Criteria

Clear constraints and success criteria are essential for getting exactly what you need. This guide covers how to define boundaries and establish clear completion requirements.

## Why Constraints Matter

Constraints help Claude Code:
- **Avoid breaking changes** to existing code
- **Respect boundaries** you've established
- **Work within limitations** of your environment
- **Preserve important functionality**
- **Meet specific requirements**

## Types of Constraints

### 1. Technical Constraints
```
"Add caching but:
- Must use Redis (not in-memory)
- Max cache size: 100MB
- TTL: 1 hour for user data, 5 minutes for search
- Don't cache sensitive data (passwords, tokens)"
```

### 2. Code Constraints
```
"Refactor the service but:
- Keep all public method signatures unchanged
- Maintain backward compatibility
- Don't change the database schema
- Preserve all existing tests"
```

### 3. Dependency Constraints
```
"Implement the feature but:
- No new npm packages
- Use only React 17 features (not 18)
- Must work with Node 14+
- Stay under 50KB bundle size increase"
```

### 4. Style Constraints
```
"Update the UI but:
- Follow Material Design guidelines
- Use only our existing color palette
- Maintain WCAG AA accessibility
- Keep mobile-first approach"
```

## Defining Boundaries

### What TO Do vs What NOT to Do
```
"Update user authentication:
✅ DO:
- Add remember me functionality
- Implement password reset
- Add login rate limiting
- Log authentication attempts

❌ DON'T:
- Change the User model structure
- Modify existing JWT token format
- Add OAuth/social login (future phase)
- Touch the admin authentication"
```

### Scope Boundaries
```
"Fix performance issues in the dashboard:
IN SCOPE:
- Optimize database queries
- Add pagination to lists
- Implement lazy loading
- Cache frequent API calls

OUT OF SCOPE:
- Redesigning the UI
- Changing the API structure
- Migrating to GraphQL
- Adding new features"
```

### Time/Resource Boundaries
```
"Quick fix needed:
- Maximum 50 lines of code change
- No database migrations
- Must be deployable today
- No breaking changes to API"
```

## Success Criteria

### Defining "Done"
```
"This task is complete when:
1. All unit tests pass
2. No TypeScript errors
3. Page loads in under 2 seconds
4. Works in Chrome, Firefox, and Safari
5. Accessibility audit shows no issues"
```

### Measurable Criteria
```
"Optimize the search feature:
Success metrics:
- Search response time < 200ms
- Supports 10,000+ concurrent users
- Memory usage stays under 512MB
- 99.9% uptime maintained
- Zero data inconsistencies"
```

### Functional Criteria
```
"Add shopping cart:
Must support:
- Add/remove items
- Update quantities
- Apply discount codes
- Calculate shipping
- Save cart for logged-in users
- Clear cart after purchase"
```

### Quality Criteria
```
"Refactor complete when:
- Code coverage > 80%
- No functions > 50 lines
- Cyclomatic complexity < 10
- All ESLint rules pass
- Documentation updated
- PR approved by 2 reviewers"
```

## Constraint Patterns

### Progressive Enhancement
```
"Add dark mode:
Phase 1 constraints:
- CSS variables only
- System preference detection
- Manual toggle button

Future phases (not now):
- Per-page preferences
- Custom theme builder
- Sync across devices"
```

### Compatibility Constraints
```
"Update the component library:
Must maintain compatibility with:
- IE 11 (yes, still required)
- React 16.8+ (not just 18)
- Our legacy jQuery widgets
- The WordPress plugin version"
```

### Performance Constraints
```
"Add the new feature but ensure:
- Initial bundle size increase < 10KB
- No impact on Time to Interactive
- API calls complete in < 500ms
- Memory footprint < 50MB
- Works on 3G connections"
```

## Common Constraint Categories

### Security Constraints
```
"Implement file upload:
Security requirements:
- Max file size: 10MB
- Allowed types: jpg, png, pdf only
- Virus scan before storage
- No direct file system access
- Sanitize all filenames
- Store outside web root"
```

### Data Constraints
```
"Update the data pipeline:
Data integrity rules:
- Never delete records (soft delete only)
- Maintain audit trail
- Preserve all timestamps
- Keep backups for 30 days
- GDPR compliance required
- PII must be encrypted"
```

### UI/UX Constraints
```
"Redesign the form:
UX requirements:
- Single column layout
- Mobile-first design
- Max 5 fields per screen
- Inline validation
- Clear error messages
- Progress indicator for multi-step"
```

### API Constraints
```
"Add new endpoints:
API rules:
- RESTful conventions only
- Version with /v2/ prefix
- Return same error format
- Support pagination
- Include rate limiting
- Backward compatible with v1"
```

## Success Criteria Templates

### Feature Implementation
```
Feature: [Name]
Done when:
□ Functionality works as specified
□ Unit tests written and passing
□ Integration tests passing
□ Documentation updated
□ Code reviewed and approved
□ No regression in existing features
□ Performance benchmarks met
```

### Bug Fix
```
Bug: [Description]
Fixed when:
□ Issue no longer reproducible
□ Root cause identified and documented
□ Fix doesn't introduce new issues
□ Test added to prevent regression
□ Related issues also resolved
□ Verified in all environments
```

### Performance Optimization
```
Optimization: [Target]
Success when:
□ Target metric improved by X%
□ No functionality compromised
□ Measurements documented
□ Sustainable (not a hack)
□ Works across all scenarios
□ Monitoring in place
```

### Refactoring
```
Refactor: [Component/Module]
Complete when:
□ All tests still pass
□ Code coverage maintained/improved
□ No behavior changes
□ Cleaner architecture achieved
□ Documentation reflects changes
□ Team approves approach
```

## Constraint Communication Strategies

### Priority Levels
```
"MUST have (non-negotiable):
- Works on mobile devices
- Loads in under 3 seconds
- Passes security audit

SHOULD have (strongly preferred):
- Smooth animations
- Keyboard navigation
- Dark mode support

NICE to have (if time permits):
- Micro-interactions
- Sound effects
- Tutorial mode"
```

### Trade-off Constraints
```
"Optimize for speed over memory:
- Cache aggressively
- Preload common data
- OK to use more RAM
- Target: 50ms response time
- Acceptable: 500MB memory usage"
```

### Conditional Constraints
```
"If using Method A:
- Must handle errors gracefully
- Need rollback mechanism
- Add comprehensive logging

If using Method B:
- Simpler error handling OK
- No rollback needed
- Basic logging sufficient"
```

## Anti-Patterns to Avoid

### ❌ Vague Constraints
```
"Make it fast"
"Don't break anything"
"Keep it simple"
"Make it secure"
```

### ✅ Specific Constraints
```
"Response time < 200ms"
"Maintain all existing public APIs"
"Max 3 levels of nesting"
"Follow OWASP top 10 guidelines"
```

### ❌ Contradictory Constraints
```
"Make it work offline but always sync real-time"
"Support all browsers but use latest features"
"Make it simple but handle every edge case"
```

### ✅ Balanced Constraints
```
"Support offline with sync when connected"
"Support modern browsers, graceful degradation for old"
"Simple common cases, escape hatch for complex ones"
```

## Validation & Verification

### How to Verify Success
```
"Cart feature complete when:
1. Run test suite: `npm test`
2. Check metrics: `npm run perf`
3. Validate a11y: `npm run audit`
4. Test user flow: [list steps]
5. Review meets criteria: [checklist]"
```

### Acceptance Criteria Format
```
GIVEN a user with items in cart
WHEN they click checkout
THEN payment form appears
AND shipping is calculated
AND order total is shown
AND submit button is enabled
```

## Quick Reference

### Constraint Keywords
- **MUST / MUST NOT**: Non-negotiable requirements
- **SHOULD / SHOULD NOT**: Strong recommendations
- **MAY / OPTIONAL**: Nice-to-have features
- **NEVER**: Absolute prohibitions
- **ALWAYS**: Mandatory practices

### Success Criteria Checklist
- [ ] Specific and measurable
- [ ] Achievable with given constraints
- [ ] Relevant to the task
- [ ] Time-bound if applicable
- [ ] Verifiable by defined method

### Common Success Metrics
- Performance: Response time, throughput, resource usage
- Quality: Test coverage, code metrics, bug count
- Functionality: Features working, edge cases handled
- Usability: User success rate, error rate, time to complete
- Compatibility: Browser support, device support, API versions

Remember: Clear constraints prevent problems, and specific success criteria ensure satisfaction!