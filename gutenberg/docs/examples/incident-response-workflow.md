---
sidebar_position: 3
---

# Incident Response Workflow Example

## Overview

This example demonstrates a critical incident response workflow using the conditional pattern with parallel investigation branches. It showcases how to rapidly coordinate multiple specialized agents to investigate, contain, and resolve production incidents while maintaining communication and documentation throughout the process.

## Incident Scenario

### Initial Alert
**Severity**: P1 (Critical)  
**System**: E-commerce platform  
**Symptoms**: 
- 500% increase in API response times
- 15% error rate spike
- Customer complaints about checkout failures
- Payment processing delays

### Business Impact
- Revenue loss: $10,000+ per minute
- Customer experience degradation
- Potential data integrity issues
- SLA breach risk

### Response Requirements
- **RTO (Recovery Time Objective)**: 30 minutes
- **RPO (Recovery Point Objective)**: 5 minutes
- **Communication**: Stakeholder updates every 15 minutes
- **Documentation**: Complete incident timeline and root cause analysis
- **Post-incident**: Comprehensive review and improvement plan

## Generated Workflow

```markdown
# Critical Incident Response Workflow

[Extended thinking: Critical production incident requiring immediate conditional response based on incident type and severity. Parallel investigation branches for different potential causes, with coordination for resolution and communication.]

## Phase 1: Incident Assessment & Initial Response
- Use Task tool with subagent_type="incident-commander"
- Prompt: "Assess critical production incident: API response time 500% increase, 15% error rate, checkout failures, payment delays. Determine incident severity, establish command structure, initiate communication protocols, and coordinate initial response team activation."
- Output: Incident classification, command structure, communication plan, initial response coordination
- Context for next phase: Incident severity, affected systems, response team, communication channels

## Phase 2: Conditional Investigation Strategy
### Decision Point: Investigation approach based on incident symptoms and system architecture

#### Path A: Database Performance Issue (Condition: High response times + database metrics)
- Use Task tool with subagent_type="database-incident-specialist"
- Prompt: "Investigate database performance issues using incident context: [incident classification, affected systems]. Analyze database metrics, query performance, connection pools, locks, and resource utilization. Identify immediate mitigation options and provide recommendations."
- Output: Database analysis, performance bottlenecks, mitigation options
- Applicability: Database-related performance degradation

#### Path B: Application/Code Issue (Condition: Error rates + application logs)
- Use Task tool with subagent_type="application-incident-specialist"
- Prompt: "Investigate application-level issues using incident context: [incident classification, affected systems]. Analyze application logs, error patterns, recent deployments, memory usage, and code-related failures. Identify root cause and immediate fixes."
- Output: Application analysis, error root cause, immediate fixes
- Applicability: Application code or configuration issues

#### Path C: Infrastructure Issue (Condition: System-wide impact + infrastructure metrics)
- Use Task tool with subagent_type="infrastructure-incident-specialist"
- Prompt: "Investigate infrastructure issues using incident context: [incident classification, affected systems]. Analyze server metrics, network performance, load balancer status, auto-scaling behavior, and cloud service health. Identify infrastructure problems and solutions."
- Output: Infrastructure analysis, system health assessment, resolution options
- Applicability: Infrastructure or platform-related issues

## Phase 3: Parallel Deep Investigation (Based on Path Selection)

### Branch A: System Monitoring & Metrics Analysis
- Use Task tool with subagent_type="monitoring-specialist"
- Prompt: "Conduct comprehensive monitoring analysis using: [selected investigation path results]. Analyze system metrics, application performance, user impact, and trend analysis. Provide real-time monitoring dashboard and impact assessment."
- Output: Monitoring analysis, performance trends, impact metrics, real-time dashboard

### Branch B: Log Analysis & Error Investigation
- Use Task tool with subagent_type="log-analysis-specialist"
- Prompt: "Perform detailed log analysis using: [selected investigation path results]. Analyze application logs, system logs, error patterns, correlation analysis, and timeline reconstruction. Identify specific failure points and error sequences."
- Output: Log analysis, error patterns, failure timeline, correlation insights

### Branch C: Customer Impact Assessment
- Use Task tool with subagent_type="customer-impact-analyst"
- Prompt: "Assess customer impact using: [incident classification, monitoring analysis]. Analyze affected user sessions, transaction failures, revenue impact, geographic distribution, and customer communication needs. Provide impact summary and communication recommendations."
- Output: Customer impact analysis, affected user metrics, communication strategy

### Branch D: Security & Data Integrity Check
- Use Task tool with subagent_type="security-incident-analyst"
- Prompt: "Conduct security and data integrity assessment using: [investigation results]. Check for security breaches, data corruption, unauthorized access, and potential security implications. Ensure incident is not security-related and validate data integrity."
- Output: Security assessment, data integrity validation, security clearance or escalation

## Phase 4: Solution Implementation & Coordination
- Use Task tool with subagent_type="incident-resolution-coordinator"
- Prompt: "Coordinate incident resolution using: [all investigation results, monitoring analysis, impact assessment]. Prioritize resolution actions, coordinate implementation across teams, manage rollback procedures if needed, and ensure solution effectiveness."
- Output: Resolution plan, implementation coordination, rollback procedures, effectiveness validation
- Context for next phase: Resolution actions, implementation status, system recovery progress

## Phase 5: Parallel Recovery Validation & Communication

### Branch A: System Recovery Validation
- Use Task tool with subagent_type="recovery-validation-specialist"
- Prompt: "Validate system recovery using: [resolution implementation, monitoring data]. Verify system performance restoration, error rate normalization, customer experience recovery, and overall system health. Confirm incident resolution."
- Output: Recovery validation, performance confirmation, system health verification

### Branch B: Stakeholder Communication
- Use Task tool with subagent_type="incident-communications-specialist"
- Prompt: "Manage incident communications using: [incident timeline, resolution status, customer impact]. Provide stakeholder updates, customer communications, internal notifications, and prepare incident summary. Ensure all parties are informed of resolution."
- Output: Stakeholder communications, customer notifications, incident summary

### Branch C: Documentation & Timeline
- Use Task tool with subagent_type="incident-documentation-specialist"
- Prompt: "Document incident response using: [complete incident timeline, all investigation results, resolution actions]. Create comprehensive incident report, timeline documentation, lessons learned, and improvement recommendations."
- Output: Incident documentation, timeline report, lessons learned, improvement plan

## Phase 6: Post-Incident Analysis & Improvement
- Use Task tool with subagent_type="post-incident-analyst"
- Prompt: "Conduct post-incident analysis using: [complete incident documentation, resolution validation]. Perform root cause analysis, identify systemic issues, recommend preventive measures, and create action items for system improvements and process enhancements."
- Output: Root cause analysis, preventive measures, improvement action items, process recommendations
- Context for completion: Incident closure, improvement plan, preventive measures

## Coordination Notes
- Incident commander maintains overall coordination and decision-making authority
- Investigation path selection based on initial symptoms and system behavior
- Parallel investigation branches maximize information gathering speed
- Continuous monitoring and communication throughout all phases
- Security assessment runs parallel to ensure no security implications
- Recovery validation confirms resolution before incident closure
- Documentation and communication ensure stakeholder awareness
- Post-incident analysis drives continuous improvement
- All phases include time-sensitive coordination and escalation procedures
```

## Execution Results

### Phase 1: Incident Assessment & Initial Response
**Duration**: 5 minutes  
**Agent Used**: incident-commander (opus)  
**Key Actions**:
- Incident classified as P1 (Critical) - Production system failure
- War room established with key stakeholders
- Communication channels activated (Slack, PagerDuty, email)
- Response team assembled: DevOps, Database, Application, Security
- Initial customer communication prepared

**Context Generated**:
```json
{
  "incident": {
    "id": "INC-2024-001",
    "severity": "P1-Critical",
    "start_time": "2024-01-15T14:23:00Z",
    "affected_systems": ["api-gateway", "checkout-service", "payment-service", "database"],
    "symptoms": ["high_response_times", "error_rate_spike", "checkout_failures"],
    "business_impact": "revenue_loss_critical"
  },
  "response_team": {
    "incident_commander": "Sarah Chen",
    "technical_lead": "Mike Rodriguez",
    "communications": "Lisa Wang",
    "stakeholders": ["CTO", "VP Engineering", "Customer Success"]
  }
}
```

### Phase 2: Investigation Path Selection
**Duration**: 3 minutes  
**Decision**: Path A - Database Performance Issue  
**Rationale**: High response times combined with database connection pool exhaustion indicators  
**Agent Used**: database-incident-specialist (sonnet)

**Key Findings**:
- Database connection pool at 100% utilization
- Long-running queries blocking other operations
- Recent deployment introduced inefficient query
- Database CPU at 95% utilization
- Connection timeout errors increasing

### Phase 3: Parallel Deep Investigation
**Duration**: 12 minutes (parallel execution)  
**Agents Used**: 4 specialists running concurrently

#### Branch A: Monitoring Analysis (monitoring-specialist)
- Confirmed database as primary bottleneck
- API response times correlated with database query times
- Identified specific slow queries causing cascade failures
- Customer impact: 25% of checkout attempts failing
- Revenue impact: $150,000 in 15 minutes

#### Branch B: Log Analysis (log-analysis-specialist)
- Identified specific query introduced in deployment 2 hours ago
- Query missing proper indexing causing table scans
- Connection pool exhaustion starting 90 minutes ago
- Error cascade pattern identified across microservices
- Timeline correlation with deployment confirmed

#### Branch C: Customer Impact Assessment (customer-impact-analyst)
- 15,000 customers affected in checkout process
- 3,500 abandoned carts due to errors
- Customer support tickets increased 400%
- Social media mentions trending negative
- Immediate customer communication required

#### Branch D: Security Assessment (security-incident-analyst)
- No security breach indicators found
- Data integrity validated - no corruption detected
- Access logs normal - no unauthorized access
- Incident confirmed as performance issue, not security
- Security team cleared to focus on other priorities

### Phase 4: Solution Implementation & Coordination
**Duration**: 8 minutes  
**Agent Used**: incident-resolution-coordinator (sonnet)  
**Resolution Actions**:
1. **Immediate**: Kill long-running queries and restart connection pools
2. **Short-term**: Rollback problematic deployment
3. **Monitoring**: Continuous validation of recovery metrics
4. **Coordination**: Synchronized rollback across all affected services

**Implementation Results**:
- Long-running queries terminated successfully
- Connection pools restarted and utilization normalized
- Deployment rollback completed in 5 minutes
- Database CPU dropped to 30% within 2 minutes
- API response times returned to normal baseline

### Phase 5: Parallel Recovery Validation & Communication
**Duration**: 10 minutes (parallel execution)  
**Agents Used**: 3 specialists running concurrently

#### Branch A: Recovery Validation (recovery-validation-specialist)
- API response times: 150ms average (normal baseline)
- Error rate: 0.2% (within normal range)
- Database performance: All metrics normal
- Checkout success rate: 99.8% (fully recovered)
- System health: All services green

#### Branch B: Stakeholder Communication (incident-communications-specialist)
- Executive team notified of resolution
- Customer-facing status page updated
- Internal teams informed via Slack and email
- Customer support provided with talking points
- Social media response coordinated

#### Branch C: Documentation (incident-documentation-specialist)
- Complete incident timeline documented
- All investigation findings recorded
- Resolution steps documented with timestamps
- Impact metrics calculated and recorded
- Initial lessons learned captured

### Phase 6: Post-Incident Analysis
**Duration**: 45 minutes (post-resolution)  
**Agent Used**: post-incident-analyst (opus)  
**Key Outcomes**:

#### Root Cause Analysis
- **Primary Cause**: Inefficient database query in recent deployment
- **Contributing Factors**: 
  - Insufficient query performance testing in staging
  - Missing database index for new query pattern
  - Inadequate connection pool monitoring alerts
  - Deployment process lacked database performance validation

#### Preventive Measures
1. **Enhanced Testing**: Mandatory database performance testing for all deployments
2. **Monitoring**: Additional database connection pool alerts
3. **Process**: Database review required for all schema/query changes
4. **Tooling**: Automated query performance analysis in CI/CD pipeline
5. **Training**: Database optimization training for development team

## Key Metrics Achieved

### Response Time Metrics
- **Detection to Assessment**: 2 minutes
- **Assessment to Investigation**: 3 minutes
- **Investigation to Resolution**: 20 minutes
- **Total Resolution Time**: 25 minutes (within 30-minute RTO)
- **Communication Frequency**: Every 10 minutes (exceeded 15-minute requirement)

### Impact Metrics
- **Customers Affected**: 15,000
- **Revenue Impact**: $150,000 (limited by quick resolution)
- **System Downtime**: 25 minutes partial degradation
- **Data Loss**: 0 (within 5-minute RPO)
- **Customer Complaints**: 47 (managed through proactive communication)

### Process Metrics
- **Team Response Time**: 100% within 5 minutes
- **Communication Effectiveness**: 95% stakeholder satisfaction
- **Documentation Completeness**: 100% timeline captured
- **Resolution Accuracy**: 100% (no rollbacks needed)
- **Follow-up Actions**: 5 improvement items identified

## Lessons Learned

### What Worked Well
1. **Rapid Assessment**: Incident commander quickly established command structure and priorities
2. **Conditional Investigation**: Database path selection saved critical time by focusing efforts
3. **Parallel Investigation**: Multiple specialists working simultaneously accelerated diagnosis
4. **Clear Communication**: Regular updates kept stakeholders informed and confident
5. **Systematic Resolution**: Coordinated approach prevented additional issues during recovery

### Challenges Encountered
1. **Initial Confusion**: Multiple symptoms initially suggested different root causes
2. **Coordination Complexity**: Managing 4 parallel investigation streams required careful coordination
3. **Customer Communication**: Balancing transparency with avoiding panic required careful messaging
4. **Rollback Complexity**: Coordinating rollback across multiple microservices needed precise timing
5. **Pressure Management**: Maintaining systematic approach under high-pressure situation

### Improvements Identified
1. **Enhanced Monitoring**: Better database performance alerts could have prevented incident
2. **Deployment Process**: Stronger database performance validation in deployment pipeline
3. **Runbook Updates**: Create specific runbooks for database performance incidents
4. **Training**: Additional incident response training for team members
5. **Tooling**: Automated rollback procedures for faster recovery

## Workflow Variations

### For Security Incidents
- Add dedicated security investigation branch
- Include forensic analysis and evidence preservation
- Add compliance and legal notification requirements
- Include threat intelligence and attribution analysis

### For Data Loss Incidents
- Add data recovery specialist branch
- Include backup validation and restoration procedures
- Add data integrity verification processes
- Include customer data impact assessment

### For Network/Infrastructure Incidents
- Focus on infrastructure investigation path
- Add network analysis and traffic routing
- Include cloud provider status and escalation
- Add capacity and scaling analysis

## Reusable Components

This incident response workflow generated several reusable components:

1. **Incident Command Structure**: Standardized roles and responsibilities
2. **Investigation Playbooks**: Specific procedures for different incident types
3. **Communication Templates**: Stakeholder and customer communication templates
4. **Monitoring Dashboards**: Incident-specific monitoring and alerting
5. **Documentation Framework**: Structured incident documentation and reporting
6. **Post-Incident Process**: Standardized root cause analysis and improvement planning

## Advanced Incident Response Features

### Automated Response Integration
- Integration with monitoring systems for automatic incident creation
- Automated team notification and escalation procedures
- Self-healing systems for common incident patterns
- Automated rollback triggers based on performance thresholds

### Predictive Incident Prevention
- Machine learning models for incident prediction
- Proactive monitoring and alerting based on patterns
- Capacity planning and resource optimization
- Continuous system health assessment

### Cross-Team Coordination
- Integration with external vendor support systems
- Coordination with customer success and marketing teams
- Legal and compliance team notification procedures
- Executive escalation and communication protocols

## Conclusion

This incident response workflow example demonstrates the effectiveness of the conditional pattern with parallel investigation branches for critical production incidents. The combination of rapid assessment, focused investigation, and coordinated resolution enabled quick recovery while maintaining comprehensive documentation and communication.

The workflow's success was driven by:
- **Clear command structure** ensuring coordinated response
- **Conditional investigation paths** focusing efforts on most likely causes
- **Parallel investigation branches** maximizing information gathering speed
- **Systematic resolution approach** preventing additional issues
- **Comprehensive communication** maintaining stakeholder confidence
- **Thorough documentation** enabling continuous improvement

This example serves as a template for incident response procedures and demonstrates best practices for coordinating multiple specialists during critical production issues. The workflow can be adapted for different types of incidents while maintaining the core principles of rapid response, systematic investigation, and coordinated resolution.

**Key Takeaway**: The conditional pattern with parallel investigation branches is particularly effective for incident response scenarios where rapid diagnosis and resolution are critical, and multiple potential causes need to be investigated simultaneously.