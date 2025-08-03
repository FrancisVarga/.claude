---
sidebar_position: 4
---

# Anti-Patterns to Avoid

## Overview

Anti-patterns are common design mistakes that initially appear to be good solutions but ultimately lead to poor outcomes. This guide identifies common anti-patterns in workflow design and provides better alternatives to avoid these pitfalls.

## Workflow Structure Anti-Patterns

### 1. The God Workflow

**Description**: A single workflow that tries to handle everything, becoming overly complex and unmaintainable.

**Example of Anti-Pattern:**
```markdown
## Phase 1: Complete Application Development
- Use Task tool with subagent_type="full-stack-developer"
- Prompt: "Design architecture, implement backend APIs, create frontend UI, set up database, implement authentication, add payment processing, create admin panel, set up monitoring, deploy to production, configure CI/CD, write documentation, and create user training materials."
- Output: Complete application with all features
```

**Problems:**
- Single point of failure
- Difficult to debug and maintain
- Poor separation of concerns
- Impossible to parallelize
- Context becomes unwieldy

**Better Approach:**
```markdown
## Phase 1: Architecture Design
- Use Task tool with subagent_type="backend-architect"
- Prompt: "Design system architecture for web application with authentication and payment processing"

## Phase 2: Backend Implementation
- Use Task tool with subagent_type="backend-developer"
- Prompt: "Implement backend APIs using architecture: [Phase 1 results]"

## Phase 3: Frontend Development
- Use Task tool with subagent_type="frontend-developer"
- Prompt: "Create frontend application using API specifications: [Phase 2 results]"

## Phase 4: Integration & Testing
- Use Task tool with subagent_type="integration-engineer"
- Prompt: "Integrate and test complete application: [Backend + Frontend]"
```

### 2. The Micro-Management Pattern

**Description**: Breaking down workflows into excessively small phases that create unnecessary overhead.

**Example of Anti-Pattern:**
```markdown
## Phase 1: Create Project Directory
- Use Task tool with subagent_type="file-manager"
- Prompt: "Create a new directory called 'my-project'"

## Phase 2: Initialize Git Repository
- Use Task tool with subagent_type="git-manager"
- Prompt: "Initialize git repository in project directory"

## Phase 3: Create README File
- Use Task tool with subagent_type="documentation-writer"
- Prompt: "Create a README.md file with project title"

## Phase 4: Add .gitignore File
- Use Task tool with subagent_type="file-manager"
- Prompt: "Create .gitignore file with basic patterns"
```

**Problems:**
- Excessive coordination overhead
- Trivial tasks don't need separate phases
- Poor agent utilization
- Increased execution time

**Better Approach:**
```markdown
## Phase 1: Project Setup
- Use Task tool with subagent_type="project-initializer"
- Prompt: "Set up new project with directory structure, git repository, README file, and appropriate .gitignore"
- Output: Initialized project structure ready for development
```

### 3. The Copy-Paste Workflow

**Description**: Duplicating similar phases instead of using proper patterns or parameterization.

**Example of Anti-Pattern:**
```markdown
## Phase 1: Deploy to Development
- Use Task tool with subagent_type="devops-engineer"
- Prompt: "Deploy application to development environment with dev database and dev API keys"

## Phase 2: Deploy to Staging
- Use Task tool with subagent_type="devops-engineer"
- Prompt: "Deploy application to staging environment with staging database and staging API keys"

## Phase 3: Deploy to Production
- Use Task tool with subagent_type="devops-engineer"
- Prompt: "Deploy application to production environment with production database and production API keys"
```

**Problems:**
- Code duplication
- Maintenance nightmare
- Inconsistent implementations
- Error-prone

**Better Approach:**
```markdown
## Phase 1: Multi-Environment Deployment
- Use Task tool with subagent_type="devops-engineer"
- Prompt: "Deploy application to multiple environments (development, staging, production) using environment-specific configurations. Ensure consistent deployment process across all environments."
- Output: Application deployed to all environments with appropriate configurations
```

## Agent Selection Anti-Patterns

### 4. The Swiss Army Knife Agent

**Description**: Using a single generalist agent for all tasks instead of specialized agents.

**Example of Anti-Pattern:**
```markdown
## Phase 1: Security Analysis
- Use Task tool with subagent_type="general-developer"
- Prompt: "Perform security audit of the application"

## Phase 2: Performance Optimization
- Use Task tool with subagent_type="general-developer"
- Prompt: "Optimize application performance"

## Phase 3: Database Design
- Use Task tool with subagent_type="general-developer"
- Prompt: "Design database schema"
```

**Problems:**
- Suboptimal results due to lack of specialization
- Missed domain-specific best practices
- Lower confidence in outcomes
- Inefficient use of specialized knowledge

**Better Approach:**
```markdown
## Phase 1: Security Analysis
- Use Task tool with subagent_type="security-auditor"
- Prompt: "Perform comprehensive security audit focusing on OWASP top 10 vulnerabilities"

## Phase 2: Performance Optimization
- Use Task tool with subagent_type="performance-engineer"
- Prompt: "Analyze and optimize application performance using specialized tools and techniques"

## Phase 3: Database Design
- Use Task tool with subagent_type="database-architect"
- Prompt: "Design optimized database schema with proper indexing and normalization"
```

### 5. The Model Mismatch Pattern

**Description**: Using inappropriate model types for task complexity.

**Example of Anti-Pattern:**
```markdown
## Phase 1: Simple File Copy
- Use Task tool with subagent_type="senior-architect" (opus model)
- Prompt: "Copy file from source to destination directory"

## Phase 2: Complex System Architecture
- Use Task tool with subagent_type="junior-developer" (haiku model)
- Prompt: "Design enterprise-scale microservices architecture with security, scalability, and compliance requirements"
```

**Problems:**
- Wasted resources on simple tasks
- Inadequate capability for complex tasks
- Poor cost-performance ratio
- Suboptimal results

**Better Approach:**
```markdown
## Phase 1: File Operations
- Use Task tool with subagent_type="file-manager" (haiku model)
- Prompt: "Copy files and organize directory structure"

## Phase 2: System Architecture
- Use Task tool with subagent_type="enterprise-architect" (opus model)
- Prompt: "Design comprehensive enterprise architecture with detailed analysis of requirements, constraints, and trade-offs"
```

## Context Management Anti-Patterns

### 6. The Context Hoarder

**Description**: Passing all available context to every phase, regardless of relevance.

**Example of Anti-Pattern:**
```markdown
## Phase 3: Frontend Development
- Use Task tool with subagent_type="frontend-developer"
- Prompt: "Create frontend using context: [Complete database schema, internal API implementation details, server configuration, deployment scripts, security audit results, performance benchmarks, project meeting notes, budget information, legal requirements, and UI mockups]"
```

**Problems:**
- Context bloat and performance issues
- Information overload for agents
- Increased processing time
- Potential security leaks

**Better Approach:**
```markdown
## Phase 3: Frontend Development
- Use Task tool with subagent_type="frontend-developer"
- Prompt: "Create frontend using relevant context: [API endpoints, authentication flow, UI mockups, and user requirements]"
- Context filtering: Only UI/UX relevant information passed
```

### 7. The Context Amnesia Pattern

**Description**: Failing to pass necessary context between phases, forcing agents to work without essential information.

**Example of Anti-Pattern:**
```markdown
## Phase 1: Database Design
- Output: Complex database schema with relationships

## Phase 2: API Development
- Use Task tool with subagent_type="backend-developer"
- Prompt: "Create REST API for the application"
- Context: [No database schema information provided]
```

**Problems:**
- Agents make assumptions without proper information
- Inconsistent implementations
- Integration failures
- Rework required

**Better Approach:**
```markdown
## Phase 2: API Development
- Use Task tool with subagent_type="backend-developer"
- Prompt: "Create REST API using database schema: [Phase 1 database design] and following established data relationships and constraints"
- Context: Database schema, entity relationships, business rules
```

### 8. The Context Mutation Pattern

**Description**: Allowing context to be modified unpredictably between phases without proper versioning or validation.

**Example of Anti-Pattern:**
```markdown
## Phase 2: Implementation
- Modifies API contracts from Phase 1 without notification
- Changes database schema without updating dependent phases
- Alters security requirements without validation
```

**Problems:**
- Inconsistent implementations
- Integration failures
- Difficult to debug issues
- Unpredictable workflow behavior

**Better Approach:**
```markdown
## Context Management Strategy:
- Immutable context passing between phases
- Explicit context transformation when needed
- Version tracking for context changes
- Validation of context modifications
```

## Coordination Anti-Patterns

### 9. The False Parallelism Pattern

**Description**: Claiming parallel execution for tasks that actually have dependencies.

**Example of Anti-Pattern:**
```markdown
## Phase 2: Parallel Development
### Branch A: Frontend Development
- Depends on API contracts from Branch B

### Branch B: Backend API Development
- Must complete before Branch A can start

### Branch C: Database Schema
- Must complete before Branch B can start
```

**Problems:**
- Sequential execution disguised as parallel
- Coordination complexity without benefits
- Misleading performance expectations
- Resource contention

**Better Approach:**
```markdown
## Phase 2: Sequential Development with Clear Dependencies
### Step 1: Database Schema Design
### Step 2: Backend API Development (using schema from Step 1)
### Step 3: Frontend Development (using API from Step 2)

OR

## Phase 2: True Parallel Development
### Branch A: Frontend Mockup (independent)
### Branch B: Database Schema (independent)
### Branch C: API Documentation (independent)
## Phase 3: Integration (using results from all branches)
```

### 10. The Coordination Chaos Pattern

**Description**: Lack of clear coordination strategy leading to unpredictable execution order and race conditions.

**Example of Anti-Pattern:**
```markdown
## Workflow with unclear coordination:
- Multiple phases with undefined execution order
- No clear dependencies specified
- Agents working on conflicting assumptions
- No synchronization points defined
```

**Problems:**
- Unpredictable results
- Race conditions
- Integration failures
- Difficult to debug

**Better Approach:**
```markdown
## Clear Coordination Strategy:
- Explicit phase dependencies
- Well-defined synchronization points
- Clear execution order
- Proper error handling and rollback procedures

## Coordination Notes:
- Phase 1 must complete before Phase 2 begins
- Phase 3 and 4 can execute in parallel after Phase 2
- Phase 5 requires completion of both Phase 3 and 4
- All phases include validation checkpoints
```

## Error Handling Anti-Patterns

### 11. The Ostrich Pattern

**Description**: Ignoring potential errors and hoping they won't occur.

**Example of Anti-Pattern:**
```markdown
## Phase 2: Database Migration
- Use Task tool with subagent_type="database-admin"
- Prompt: "Migrate database schema to new version"
- No error handling specified
- No rollback plan
- No validation checks
```

**Problems:**
- System failures with no recovery
- Data loss potential
- Difficult troubleshooting
- Poor user experience

**Better Approach:**
```markdown
## Phase 2: Database Migration with Error Handling
- Use Task tool with subagent_type="database-admin"
- Prompt: "Migrate database schema with comprehensive error handling: backup before migration, validate schema changes, test migration on copy, implement rollback procedures"
- Error Handling: Automatic rollback on failure, data validation, backup verification
- Fallback: Manual intervention with expert DBA if automated migration fails
```

### 12. The Panic Pattern

**Description**: Failing the entire workflow when any single phase encounters an error.

**Example of Anti-Pattern:**
```markdown
## Error Handling Strategy:
If any phase fails → Entire workflow fails → Manual intervention required
No fallback agents, no alternative approaches, no graceful degradation
```

**Problems:**
- Poor resilience
- Unnecessary workflow failures
- Poor user experience
- Wasted work from successful phases

**Better Approach:**
```markdown
## Resilient Error Handling Strategy:
Phase failure → Try fallback agent → Try alternative approach → 
Graceful degradation → Manual intervention only as last resort

## Example:
Primary agent fails → Secondary agent → Simplified approach → 
Partial completion with user notification → Manual review if needed
```

## Performance Anti-Patterns

### 13. The Premature Optimization Pattern

**Description**: Over-optimizing workflows before understanding actual performance bottlenecks.

**Example of Anti-Pattern:**
```markdown
## Over-optimized workflow with unnecessary complexity:
- Complex caching for rarely accessed data
- Excessive parallelization of fast operations
- Micro-optimizations that add complexity without benefit
- Performance tuning without measurement
```

**Problems:**
- Increased complexity without benefit
- Harder to maintain and debug
- Potential performance degradation
- Wasted development effort

**Better Approach:**
```markdown
## Performance Optimization Strategy:
1. Measure current performance
2. Identify actual bottlenecks
3. Apply targeted optimizations
4. Measure improvement
5. Iterate based on results
```

### 14. The Resource Hog Pattern

**Description**: Using excessive resources without consideration for efficiency or other workflows.

**Example of Anti-Pattern:**
```markdown
## Resource-intensive workflow:
- Requests maximum CPU for simple tasks
- Loads entire datasets into memory unnecessarily
- Uses high-end models for trivial operations
- No resource cleanup or management
```

**Problems:**
- Poor resource utilization
- Impacts other workflows
- Higher costs
- Scalability issues

**Better Approach:**
```markdown
## Resource-Efficient Design:
- Right-size resources for task requirements
- Implement resource cleanup
- Use appropriate models for task complexity
- Monitor and optimize resource usage
```

## Testing Anti-Patterns

### 15. The Happy Path Only Pattern

**Description**: Testing only successful scenarios without considering error cases or edge conditions.

**Example of Anti-Pattern:**
```markdown
## Testing Strategy:
- Test only successful workflow execution
- Ignore error scenarios
- No edge case testing
- No failure recovery testing
```

**Problems:**
- Unhandled errors in production
- Poor reliability
- Difficult troubleshooting
- User experience issues

**Better Approach:**
```markdown
## Comprehensive Testing Strategy:
- Happy path testing
- Error scenario testing
- Edge case validation
- Performance testing
- Recovery testing
- Integration testing
```

## How to Avoid Anti-Patterns

### 1. Design Reviews

Implement regular design reviews to catch anti-patterns early:

```markdown
## Design Review Checklist:
- [ ] Single responsibility per phase
- [ ] Appropriate agent selection
- [ ] Proper context management
- [ ] Clear coordination strategy
- [ ] Comprehensive error handling
- [ ] Performance considerations
- [ ] Testing strategy defined
```

### 2. Pattern Recognition Training

Train team members to recognize and avoid common anti-patterns:

- Study examples of good and bad workflow designs
- Learn from past mistakes and successes
- Share knowledge across team members
- Regular pattern review sessions

### 3. Automated Detection

Implement tools to automatically detect potential anti-patterns:

```python
class AntiPatternDetector:
    def __init__(self):
        self.detectors = [
            self.detect_god_workflow,
            self.detect_micro_management,
            self.detect_context_bloat,
            self.detect_false_parallelism
        ]
    
    def analyze_workflow(self, workflow):
        """Analyze workflow for anti-patterns"""
        detected_patterns = []
        
        for detector in self.detectors:
            patterns = detector(workflow)
            detected_patterns.extend(patterns)
        
        return AntiPatternReport(
            workflow_id=workflow.id,
            detected_patterns=detected_patterns,
            recommendations=self.generate_recommendations(detected_patterns)
        )
```

### 4. Continuous Improvement

Establish processes for continuous improvement:

- Regular workflow performance reviews
- Post-mortem analysis of failures
- Pattern library maintenance
- Best practice documentation updates

## Conclusion

Avoiding anti-patterns is crucial for creating maintainable, efficient, and reliable workflows. Key strategies:

1. **Recognize Common Pitfalls**: Learn to identify anti-patterns early
2. **Follow Best Practices**: Use established patterns and practices
3. **Regular Reviews**: Implement design and code reviews
4. **Continuous Learning**: Learn from mistakes and share knowledge
5. **Automated Detection**: Use tools to catch anti-patterns automatically

By being aware of these anti-patterns and actively working to avoid them, you can create workflows that are robust, maintainable, and efficient.