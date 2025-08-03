---
sidebar_position: 7
---

# Success Criteria

Success criteria define when a task is truly complete. This focused guide helps you establish clear, measurable completion requirements that ensure Claude Code delivers exactly what you need.

## What Makes Good Success Criteria?

Good success criteria are:
- **Specific** - Clearly defined, no ambiguity
- **Measurable** - Can be verified objectively
- **Achievable** - Possible within constraints
- **Relevant** - Directly related to the goal
- **Testable** - Can be validated

## Types of Success Criteria

### 1. Functional Criteria
What the code must do:
```
"User registration is complete when:
- Users can create account with email/password
- Email verification is sent
- Users cannot login until verified
- Duplicate emails are rejected
- Password meets security requirements
- Success redirects to dashboard"
```

### 2. Performance Criteria
How well it must perform:
```
"Search optimization successful when:
- Results return in < 200ms
- Handles 1000 concurrent searches
- Memory usage stays under 100MB
- Database queries < 5 per search
- Results are accurately ranked"
```

### 3. Quality Criteria
Code quality standards:
```
"Refactoring complete when:
- All functions < 30 lines
- Test coverage > 85%
- No ESLint warnings
- TypeScript strict mode passes
- No circular dependencies
- Documentation updated"
```

### 4. User Experience Criteria
How users experience it:
```
"Form improvement done when:
- Validation shows inline
- Errors appear within 100ms
- Success message displays
- Form clears after submit
- Tab order is logical
- Screen readers work properly"
```

## Writing Effective Success Criteria

### Be Specific
```
❌ Vague: "Make the API faster"
✅ Specific: "API response time < 100ms for 95% of requests"

❌ Vague: "Improve the UI"
✅ Specific: "Loading states show within 50ms, errors display clearly"

❌ Vague: "Add better error handling"
✅ Specific: "All errors logged, user-friendly messages shown, recovery options provided"
```

### Make It Measurable
```
"Migration successful when:
- All 50 test cases pass
- Zero console errors
- Database has 100% data integrity
- Performance degradation < 5%
- Rollback tested and working"
```

### Include Edge Cases
```
"File upload complete when:
- Accepts JPG, PNG, PDF up to 10MB
- Rejects invalid formats with clear message
- Handles network interruption gracefully
- Shows progress for files > 1MB
- Multiple simultaneous uploads work
- Drag-and-drop functions on desktop"
```

## Success Criteria Templates

### Feature Development
```
Feature: [Feature Name]
Successful implementation when:

Functionality:
□ Core feature works as described
□ Edge cases handled appropriately
□ Error scenarios managed gracefully

Quality:
□ Code follows project patterns
□ Tests provide 80%+ coverage
□ No linting errors

Performance:
□ Loads within 2 seconds
□ No memory leaks
□ Smooth animations (60fps)

Documentation:
□ README updated
□ API docs current
□ Code comments added
```

### Bug Fix
```
Bug: [Bug Description]
Successfully fixed when:

Resolution:
□ Original issue cannot be reproduced
□ Root cause identified and fixed
□ No new issues introduced

Testing:
□ Unit test added for the fix
□ Regression test passes
□ Manual testing completed

Verification:
□ Tested in all environments
□ Related issues checked
□ Performance not degraded
```

### API Development
```
API: [Endpoint Name]
Successfully implemented when:

Functionality:
□ All CRUD operations work
□ Proper HTTP status codes returned
□ Request validation in place

Security:
□ Authentication required
□ Authorization checked
□ Input sanitized
□ Rate limiting active

Documentation:
□ OpenAPI spec updated
□ Example requests included
□ Error responses documented

Testing:
□ Unit tests cover all paths
□ Integration tests pass
□ Load testing completed
```

## Verification Methods

### Automated Verification
```
"PR can be merged when:
- CI/CD pipeline green
- All tests pass: `npm test`
- Coverage met: `npm run coverage`
- No type errors: `npm run type-check`
- Linting clean: `npm run lint`
- Build succeeds: `npm run build`"
```

### Manual Verification
```
"Feature ready when manually verified:
1. Test on Chrome, Firefox, Safari
2. Check mobile responsiveness
3. Verify with screen reader
4. Test with slow network
5. Confirm with 3 user testers"
```

### Performance Verification
```
"Performance acceptable when:
- Lighthouse score > 90
- First Contentful Paint < 1s
- Time to Interactive < 2s
- Bundle size increase < 50KB
- No regression in metrics"
```

## Common Success Criteria Patterns

### CRUD Operations
```
"CRUD implementation complete when:
Create: 
- Valid data saves successfully
- Invalid data shows errors
- Returns created resource

Read:
- Single item retrieval works
- List supports pagination
- Filtering/sorting functional

Update:
- Partial updates supported
- Validation enforced
- Optimistic locking works

Delete:
- Soft delete implemented
- Cascading handled
- Confirmation required"
```

### Authentication Flow
```
"Auth system complete when:
Registration:
- Email/password validation
- Duplicate prevention
- Welcome email sent

Login:
- Success redirects properly
- Failed attempts limited
- Remember me works

Security:
- Passwords hashed
- Sessions expire
- CSRF protected

Recovery:
- Password reset works
- Email verification required
- Tokens expire"
```

### Data Migration
```
"Migration successful when:
- All records transferred
- Data integrity maintained
- No data loss occurred
- Rollback procedure tested
- Performance acceptable
- Downtime < 5 minutes"
```

## Conditional Success Criteria

### Environment-Specific
```
"Development complete when:
- Local: Hot reload works, debug tools enabled
- Staging: Matches production, test data loaded
- Production: Optimized build, monitoring active"
```

### Progressive Criteria
```
"MVP complete when:
- Basic functionality works
- Critical bugs fixed
- Core features tested

Full release when:
- All features implemented
- Performance optimized
- Documentation complete"
```

## Success Criteria Checklist

### Before Starting
- [ ] Success criteria defined
- [ ] Measurable metrics identified
- [ ] Test methods determined
- [ ] Edge cases considered
- [ ] Dependencies noted

### During Development
- [ ] Progress trackable
- [ ] Partial completion clear
- [ ] Blockers identified early
- [ ] Criteria still relevant
- [ ] Tests being written

### Before Completion
- [ ] All criteria met
- [ ] Tests passing
- [ ] Documentation updated
- [ ] Code reviewed
- [ ] Deployment ready

## Anti-Patterns

### ❌ Avoid Subjective Criteria
```
"Looks good"
"Feels fast"
"Works well"
"Users like it"
```

### ✅ Use Objective Criteria
```
"Matches design specs"
"Loads in < 2 seconds"
"Zero errors in 1000 operations"
"95% task completion rate"
```

### ❌ Avoid Moving Goalposts
```
Initial: "Add search"
Later: "Oh, and filtering"
Later: "Also needs export"
Later: "And real-time updates"
```

### ✅ Define Scope Upfront
```
"Search v1 includes:
- Text search only
- Results pagination
- Basic relevance

Future versions:
- Filters (v2)
- Export (v2)
- Real-time (v3)"
```

## Quick Reference

### Success Criteria Formula
```
When [condition]
Then [expected result]
And [additional requirement]
Verified by [test method]
```

### Common Metrics
- **Performance**: Response time, throughput, resource usage
- **Reliability**: Uptime, error rate, recovery time
- **Quality**: Test coverage, code metrics, defect density
- **Usability**: Task success rate, time to complete, error frequency
- **Security**: Vulnerabilities found, compliance met, audit passed

### Verification Commands
```bash
# Automated checks
npm test          # Unit tests
npm run e2e       # End-to-end tests
npm run lint      # Code quality
npm run typecheck # Type safety
npm run build     # Build success

# Performance checks
npm run lighthouse # Performance audit
npm run bundle-size # Size analysis
npm run perf      # Performance tests
```

Remember: Clear success criteria eliminate ambiguity and ensure everyone agrees when the work is complete!