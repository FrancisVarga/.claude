---
sidebar_position: 2
---

# Error Handling Best Practices

## Overview

Robust error handling is essential for reliable multi-agent workflows. This guide provides comprehensive strategies for anticipating, handling, and recovering from various types of errors that can occur during workflow execution.

## Error Classification

### 1. Agent-Related Errors

**Agent Unavailability**
- Agent service is down or unreachable
- Agent capacity limits exceeded
- Agent model temporarily unavailable

**Agent Execution Errors**
- Task execution failures
- Invalid output format
- Timeout during execution

**Agent Selection Errors**
- No suitable agent found for task
- Agent capabilities mismatch
- Confidence score below threshold

### 2. Context-Related Errors

**Context Validation Errors**
- Missing required context fields
- Invalid context format
- Context size exceeds limits

**Context Flow Errors**
- Context corruption during transfer
- Context version mismatches
- Context dependency failures

### 3. System-Related Errors

**Resource Errors**
- Insufficient memory or CPU
- Storage capacity exceeded
- Network connectivity issues

**Integration Errors**
- External service failures
- API rate limiting
- Authentication/authorization failures

## Error Handling Strategies

### 1. Defensive Programming

Design workflows to anticipate and handle potential failures proactively.

```markdown
## Phase 2: API Integration
- Use Task tool with subagent_type="api-developer"
- Prompt: "Implement API integration with error handling for: timeout scenarios, rate limiting, authentication failures, and service unavailability. Include retry logic and fallback mechanisms."
- **Error Handling**: 
  - Timeout: 30s with 3 retries
  - Rate limiting: Exponential backoff
  - Auth failure: Token refresh attempt
  - Service down: Switch to fallback endpoint
- Output: Robust API integration with comprehensive error handling
```

### 2. Graceful Degradation

Design workflows to continue functioning with reduced capability when errors occur.

```markdown
## Phase 3: Data Processing
- **Primary Approach**: Advanced analytics with ml-specialist
- **Degraded Approach**: Basic analytics with data-analyst if ML services unavailable
- **Minimal Approach**: Statistical summary with general-analyst if advanced analytics fail
- **Trigger Conditions**: 
  - ML service timeout > 60s → Switch to degraded
  - Data analyst unavailable → Switch to minimal
```

### 3. Circuit Breaker Pattern

Prevent cascading failures by temporarily disabling failing components.

```python
class WorkflowCircuitBreaker:
    def __init__(self, failure_threshold=5, timeout=60):
        self.failure_threshold = failure_threshold
        self.timeout = timeout
        self.failure_count = 0
        self.last_failure_time = None
        self.state = 'CLOSED'  # CLOSED, OPEN, HALF_OPEN
    
    async def call_agent(self, agent_name, task):
        if self.state == 'OPEN':
            if time.time() - self.last_failure_time > self.timeout:
                self.state = 'HALF_OPEN'
            else:
                raise CircuitBreakerOpenError(f"Circuit breaker open for {agent_name}")
        
        try:
            result = await self.execute_agent_task(agent_name, task)
            if self.state == 'HALF_OPEN':
                self.state = 'CLOSED'
                self.failure_count = 0
            return result
        except Exception as e:
            self.failure_count += 1
            self.last_failure_time = time.time()
            
            if self.failure_count >= self.failure_threshold:
                self.state = 'OPEN'
            
            raise e
```

## Retry Strategies

### 1. Exponential Backoff

Implement exponential backoff for transient failures.

```python
class RetryHandler:
    def __init__(self, max_retries=3, base_delay=1, max_delay=60):
        self.max_retries = max_retries
        self.base_delay = base_delay
        self.max_delay = max_delay
    
    async def retry_with_backoff(self, operation, *args, **kwargs):
        for attempt in range(self.max_retries + 1):
            try:
                return await operation(*args, **kwargs)
            except TransientError as e:
                if attempt == self.max_retries:
                    raise e
                
                delay = min(self.base_delay * (2 ** attempt), self.max_delay)
                await asyncio.sleep(delay)
                
                logger.info(f"Retrying operation after {delay}s (attempt {attempt + 1})")
            except PermanentError as e:
                # Don't retry permanent errors
                raise e
```

### 2. Conditional Retry Logic

Implement different retry strategies based on error type.

```markdown
## Retry Strategy by Error Type:

### Transient Errors (Retry with backoff):
- Network timeouts
- Temporary service unavailability
- Rate limiting
- Resource exhaustion

### Intermittent Errors (Retry with different approach):
- Agent capacity exceeded → Try fallback agent
- Context validation failed → Regenerate context
- Integration conflict → Use alternative integration

### Permanent Errors (No retry, immediate fallback):
- Agent not found
- Invalid configuration
- Authentication permanently failed
- Unsupported operation
```

## Fallback Mechanisms

### 1. Agent Fallback Hierarchy

Define clear fallback chains for agent selection.

```markdown
## Agent Fallback Chain Example:

### Primary: security-specialist (opus)
- Specialization: Advanced security analysis
- Confidence threshold: > 0.9

### Secondary: security-engineer (sonnet)  
- Specialization: Standard security practices
- Confidence threshold: > 0.7

### Tertiary: general-developer (sonnet)
- Specialization: Basic security awareness
- Confidence threshold: > 0.5

### Last Resort: manual-intervention
- Human expert consultation required
```

### 2. Functional Fallbacks

Provide alternative approaches when primary functionality fails.

```markdown
## Phase 4: Performance Testing
- **Primary**: Comprehensive load testing with automated tools
- **Fallback 1**: Manual performance testing with performance-engineer
- **Fallback 2**: Basic performance validation with monitoring tools
- **Fallback 3**: Performance estimation based on similar systems
```

### 3. Data Fallbacks

Handle data-related failures with alternative data sources.

```python
class DataFallbackHandler:
    def __init__(self):
        self.data_sources = [
            'primary_database',
            'replica_database', 
            'cached_data',
            'default_data'
        ]
    
    async def get_data_with_fallback(self, query):
        for source in self.data_sources:
            try:
                data = await self.query_data_source(source, query)
                if self.validate_data(data):
                    return data
            except Exception as e:
                logger.warning(f"Data source {source} failed: {e}")
                continue
        
        raise DataUnavailableError("All data sources failed")
```

## Error Recovery Patterns

### 1. Rollback and Retry

Implement rollback mechanisms for failed operations.

```python
class WorkflowRollbackManager:
    def __init__(self):
        self.checkpoints = {}
        self.rollback_handlers = {}
    
    async def create_checkpoint(self, phase_name, state):
        """Create rollback checkpoint before risky operation"""
        self.checkpoints[phase_name] = {
            'state': deepcopy(state),
            'timestamp': datetime.utcnow()
        }
    
    async def rollback_to_checkpoint(self, phase_name):
        """Rollback to previous checkpoint"""
        if phase_name not in self.checkpoints:
            raise RollbackError(f"No checkpoint found for {phase_name}")
        
        checkpoint = self.checkpoints[phase_name]
        
        # Execute rollback handler if available
        if phase_name in self.rollback_handlers:
            await self.rollback_handlers[phase_name](checkpoint['state'])
        
        return checkpoint['state']
```

### 2. Compensating Actions

Implement compensating actions to undo partial work.

```markdown
## Compensating Actions Example:

### Phase: Database Migration
- **Action**: Create new tables and migrate data
- **Compensation**: Drop new tables and restore original data
- **Trigger**: Migration validation fails

### Phase: Service Deployment  
- **Action**: Deploy new service version
- **Compensation**: Rollback to previous version
- **Trigger**: Health checks fail after deployment

### Phase: Configuration Update
- **Action**: Update system configuration
- **Compensation**: Restore previous configuration
- **Trigger**: System instability detected
```

### 3. Forward Recovery

Continue workflow execution with alternative approaches.

```python
class ForwardRecoveryHandler:
    async def handle_phase_failure(self, failed_phase, error, context):
        """Attempt forward recovery from phase failure"""
        
        recovery_strategies = [
            self.try_alternative_agent,
            self.try_simplified_approach,
            self.try_manual_intervention,
            self.skip_with_degradation
        ]
        
        for strategy in recovery_strategies:
            try:
                result = await strategy(failed_phase, error, context)
                if result.success:
                    return result
            except Exception as e:
                logger.warning(f"Recovery strategy {strategy.__name__} failed: {e}")
        
        raise UnrecoverableError(f"All recovery strategies failed for {failed_phase}")
```

## Error Monitoring and Alerting

### 1. Error Classification and Tracking

Implement comprehensive error tracking and classification.

```python
class ErrorTracker:
    def __init__(self):
        self.error_counts = defaultdict(int)
        self.error_patterns = {}
        self.alert_thresholds = {
            'agent_failure': 5,
            'context_error': 3,
            'system_error': 1
        }
    
    def track_error(self, error_type, error_details, workflow_id):
        """Track error occurrence and patterns"""
        self.error_counts[error_type] += 1
        
        # Store error details for pattern analysis
        error_key = f"{error_type}_{workflow_id}"
        if error_key not in self.error_patterns:
            self.error_patterns[error_key] = []
        
        self.error_patterns[error_key].append({
            'timestamp': datetime.utcnow(),
            'details': error_details
        })
        
        # Check alert thresholds
        if self.error_counts[error_type] >= self.alert_thresholds.get(error_type, 10):
            self.send_alert(error_type, self.error_counts[error_type])
```

### 2. Proactive Error Detection

Implement early warning systems for potential failures.

```python
class ErrorPredictor:
    def __init__(self):
        self.health_monitors = {}
        self.prediction_models = {}
    
    async def predict_potential_failures(self, workflow_context):
        """Predict potential failures before they occur"""
        predictions = []
        
        # Check agent health
        for agent_name in workflow_context.get('required_agents', []):
            health_score = await self.check_agent_health(agent_name)
            if health_score < 0.7:
                predictions.append({
                    'type': 'agent_failure_risk',
                    'agent': agent_name,
                    'probability': 1 - health_score,
                    'recommendation': 'Consider using fallback agent'
                })
        
        # Check resource availability
        resource_usage = await self.check_resource_usage()
        if resource_usage > 0.8:
            predictions.append({
                'type': 'resource_exhaustion_risk',
                'current_usage': resource_usage,
                'probability': (resource_usage - 0.8) / 0.2,
                'recommendation': 'Scale resources or delay non-critical workflows'
            })
        
        return predictions
```

## Error Communication

### 1. User-Friendly Error Messages

Provide clear, actionable error messages to users.

```python
class ErrorMessageFormatter:
    def format_error_for_user(self, error, context):
        """Format technical errors into user-friendly messages"""
        
        error_templates = {
            'agent_unavailable': "The {agent_name} service is temporarily unavailable. We're using an alternative approach that may take slightly longer.",
            'context_validation_failed': "There was an issue with the information from the previous step. We're attempting to resolve this automatically.",
            'timeout_error': "The {operation} is taking longer than expected. We're continuing with a simplified approach.",
            'resource_exhaustion': "System resources are currently limited. Your workflow has been queued and will resume shortly."
        }
        
        template = error_templates.get(error.type, "An unexpected issue occurred. Our team has been notified and we're working to resolve it.")
        
        return template.format(**context)
```

### 2. Error Escalation

Implement clear escalation paths for different error severities.

```markdown
## Error Escalation Matrix:

### Low Severity (Auto-handled):
- Transient network errors
- Agent busy/retry scenarios
- Minor context validation issues
- **Action**: Automatic retry/fallback

### Medium Severity (Monitored):
- Agent persistent failures
- Context corruption
- Performance degradation
- **Action**: Alert operations team, continue with fallbacks

### High Severity (Immediate attention):
- System resource exhaustion
- Security-related errors
- Data integrity issues
- **Action**: Page on-call engineer, halt affected workflows

### Critical Severity (Emergency response):
- Complete system failures
- Data loss scenarios
- Security breaches
- **Action**: Emergency response team activation
```

## Testing Error Scenarios

### 1. Chaos Engineering

Implement chaos engineering practices to test error handling.

```python
class ChaosTestSuite:
    def __init__(self):
        self.chaos_scenarios = [
            self.simulate_agent_failure,
            self.simulate_network_partition,
            self.simulate_resource_exhaustion,
            self.simulate_context_corruption
        ]
    
    async def run_chaos_tests(self, workflow):
        """Run chaos engineering tests on workflow"""
        results = []
        
        for scenario in self.chaos_scenarios:
            try:
                # Run workflow with chaos scenario
                with scenario():
                    result = await self.execute_workflow(workflow)
                    results.append({
                        'scenario': scenario.__name__,
                        'success': result.success,
                        'recovery_time': result.recovery_time,
                        'degradation_level': result.degradation_level
                    })
            except Exception as e:
                results.append({
                    'scenario': scenario.__name__,
                    'success': False,
                    'error': str(e)
                })
        
        return results
```

### 2. Error Injection Testing

Systematically test error handling by injecting specific errors.

```python
class ErrorInjectionFramework:
    def __init__(self):
        self.injection_points = {}
        self.error_scenarios = {}
    
    def inject_agent_error(self, agent_name, error_type, probability=1.0):
        """Inject errors for specific agent"""
        self.injection_points[agent_name] = {
            'error_type': error_type,
            'probability': probability
        }
    
    def inject_context_error(self, phase_name, corruption_type):
        """Inject context-related errors"""
        self.injection_points[f"context_{phase_name}"] = {
            'error_type': 'context_corruption',
            'corruption_type': corruption_type
        }
    
    async def execute_with_injection(self, workflow):
        """Execute workflow with error injection"""
        # Apply error injections during execution
        # Monitor error handling responses
        # Validate recovery mechanisms
        pass
```

## Best Practices Summary

### 1. Design for Failure

- Assume components will fail and design accordingly
- Implement multiple layers of error handling
- Provide graceful degradation paths
- Test failure scenarios regularly

### 2. Fail Fast, Recover Quickly

- Detect errors early in the process
- Implement quick recovery mechanisms
- Minimize impact of failures on overall workflow
- Provide clear feedback on recovery actions

### 3. Monitor and Learn

- Track error patterns and frequencies
- Analyze root causes of failures
- Continuously improve error handling based on experience
- Share learnings across teams and workflows

### 4. User Experience Focus

- Provide clear, actionable error messages
- Minimize user impact during error recovery
- Communicate progress during recovery operations
- Maintain system availability during partial failures

By following these error handling best practices, you can create resilient workflows that gracefully handle failures and provide reliable service even in the face of various error conditions.