---
sidebar_position: 2
---

# Workflow Templates

## Overview

This collection provides ready-to-use workflow templates for common development scenarios. Each template includes the complete workflow structure, agent assignments, context flow, and coordination notes that you can customize for your specific needs.

## Template Categories

### 1. Web Development Templates
### 2. Mobile Development Templates  
### 3. Data & Analytics Templates
### 4. Infrastructure & DevOps Templates
### 5. Integration & API Templates
### 6. Quality Assurance Templates

---

## Web Development Templates

### Full-Stack Web Application Template

**Use Case**: Complete web application with frontend, backend, and database

```markdown
[Extended thinking: Full-stack web application development using modern technologies. Sequential foundation with parallel development and integrated testing.]

## Phase 1: Architecture & Planning
- Use Task tool with subagent_type="full-stack-architect"
- Prompt: "Design comprehensive architecture for web application including: frontend framework selection, backend API design, database schema, authentication strategy, and deployment architecture. Consider scalability, security, and maintainability."
- Output: System architecture, technology stack, API specifications, database design
- Context for next phase: Architecture decisions, technology choices, design patterns

## Phase 2: Parallel Development

### Branch A: Frontend Development
- Use Task tool with subagent_type="frontend-developer"
- Prompt: "Develop frontend application using architecture: [system architecture, API specifications]. Create responsive UI, implement state management, integrate with backend APIs, and ensure cross-browser compatibility."
- Output: Frontend application, UI components, state management, API integration

### Branch B: Backend Development
- Use Task tool with subagent_type="backend-developer"
- Prompt: "Develop backend API using architecture: [system architecture, database design]. Implement RESTful endpoints, authentication middleware, business logic, and database integration."
- Output: Backend API, authentication system, business logic, database integration

### Branch C: Database Implementation
- Use Task tool with subagent_type="database-engineer"
- Prompt: "Implement database using schema: [database design]. Create tables, indexes, relationships, stored procedures, and data migration scripts."
- Output: Database implementation, migration scripts, data access layer

## Phase 3: Integration & Testing
- Use Task tool with subagent_type="integration-engineer"
- Prompt: "Integrate all components: [Frontend application, Backend API, Database]. Perform integration testing, end-to-end testing, and resolve any compatibility issues."
- Output: Integrated application, test results, integration documentation

## Phase 4: Deployment & Monitoring
- Use Task tool with subagent_type="devops-engineer"
- Prompt: "Deploy integrated application: [complete application]. Set up production environment, configure monitoring, implement CI/CD pipeline, and establish backup procedures."
- Output: Production deployment, monitoring setup, CI/CD pipeline, operational documentation

## Coordination Notes
- Architecture phase establishes foundation for all parallel development
- Parallel branches must adhere to architectural decisions and API contracts
- Integration phase validates compatibility and resolves conflicts
- Deployment phase ensures production readiness and operational excellence
```

### Single Page Application (SPA) Template

**Use Case**: Frontend-focused application with API integration

```markdown
[Extended thinking: Single Page Application development with focus on user experience and API integration.]

## Phase 1: UI/UX Design & Planning
- Use Task tool with subagent_type="ui-ux-designer"
- Prompt: "Design user interface and experience for single page application including: user flows, wireframes, responsive design, accessibility considerations, and interaction patterns."
- Output: UI/UX design, wireframes, user flows, design system

## Phase 2: Frontend Development
- Use Task tool with subagent_type="frontend-developer"
- Prompt: "Develop SPA using design: [UI/UX design, wireframes]. Implement responsive components, routing, state management, API integration, and performance optimization."
- Output: Complete SPA, optimized performance, responsive design

## Phase 3: API Integration & Testing
- Use Task tool with subagent_type="frontend-integration-specialist"
- Prompt: "Integrate SPA with external APIs: [API specifications]. Implement error handling, loading states, data caching, and comprehensive testing."
- Output: API integration, error handling, test suite

## Phase 4: Performance & Deployment
- Use Task tool with subagent_type="frontend-performance-engineer"
- Prompt: "Optimize and deploy SPA: [integrated application]. Implement performance optimizations, SEO enhancements, and production deployment."
- Output: Optimized application, deployment configuration, performance metrics

## Coordination Notes
- UI/UX design guides all development decisions
- Performance considerations integrated throughout development
- API integration includes comprehensive error handling
- Deployment optimized for frontend performance and SEO
```

---

## Mobile Development Templates

### Cross-Platform Mobile App Template

**Use Case**: Mobile application for iOS and Android platforms

```markdown
[Extended thinking: Cross-platform mobile application development with native performance and platform-specific optimizations.]

## Phase 1: Mobile Architecture & Design
- Use Task tool with subagent_type="mobile-architect"
- Prompt: "Design mobile application architecture including: cross-platform framework selection, navigation structure, state management, offline capabilities, and platform-specific considerations."
- Output: Mobile architecture, framework choice, navigation design, offline strategy

## Phase 2: Parallel Platform Development

### Branch A: Core Application Logic
- Use Task tool with subagent_type="mobile-developer"
- Prompt: "Develop core application logic using architecture: [mobile architecture]. Implement business logic, data models, services, and cross-platform components."
- Output: Core application logic, shared components, business services

### Branch B: Platform-Specific Features
- Use Task tool with subagent_type="native-mobile-specialist"
- Prompt: "Implement platform-specific features using core logic: [core application]. Add native integrations, platform UI adaptations, and device-specific functionality."
- Output: Platform-specific implementations, native integrations

### Branch C: Backend Integration
- Use Task tool with subagent_type="mobile-backend-specialist"
- Prompt: "Implement backend integration using architecture: [mobile architecture]. Add API communication, authentication, push notifications, and data synchronization."
- Output: Backend integration, API services, push notifications, sync logic

## Phase 3: Testing & Optimization
- Use Task tool with subagent_type="mobile-qa-engineer"
- Prompt: "Test mobile application: [complete mobile app]. Perform device testing, performance optimization, user experience validation, and app store preparation."
- Output: Test results, performance optimizations, app store packages

## Phase 4: App Store Deployment
- Use Task tool with subagent_type="mobile-deployment-specialist"
- Prompt: "Deploy mobile application: [tested app]. Prepare app store submissions, configure analytics, implement crash reporting, and establish update procedures."
- Output: App store deployments, analytics setup, monitoring configuration

## Coordination Notes
- Architecture phase determines cross-platform strategy and technical approach
- Parallel development maintains consistency across platform-specific implementations
- Testing phase validates performance and user experience across devices
- Deployment phase ensures successful app store approval and monitoring
```

---

## Data & Analytics Templates

### Data Pipeline Template

**Use Case**: ETL/ELT data processing and analytics pipeline

```markdown
[Extended thinking: Comprehensive data pipeline for ingestion, processing, and analytics with scalability and reliability.]

## Phase 1: Data Architecture Design
- Use Task tool with subagent_type="data-architect"
- Prompt: "Design data pipeline architecture including: data sources analysis, ingestion strategy, processing framework, storage design, and analytics requirements."
- Output: Data architecture, ingestion design, processing strategy, storage schema

## Phase 2: Parallel Pipeline Development

### Branch A: Data Ingestion
- Use Task tool with subagent_type="data-engineer"
- Prompt: "Implement data ingestion using architecture: [data architecture]. Create connectors for data sources, implement data validation, error handling, and monitoring."
- Output: Data ingestion pipeline, source connectors, validation rules

### Branch B: Data Processing
- Use Task tool with subagent_type="data-processing-engineer"
- Prompt: "Implement data processing using architecture: [processing strategy]. Create ETL/ELT workflows, data transformations, quality checks, and performance optimization."
- Output: Data processing pipeline, transformation logic, quality controls

### Branch C: Data Storage
- Use Task tool with subagent_type="data-storage-specialist"
- Prompt: "Implement data storage using architecture: [storage schema]. Set up data warehouse, implement partitioning, indexing, and backup strategies."
- Output: Data storage implementation, warehouse setup, backup procedures

## Phase 3: Analytics & Visualization
- Use Task tool with subagent_type="data-analyst"
- Prompt: "Implement analytics and visualization using processed data: [data pipeline outputs]. Create dashboards, reports, and analytical models."
- Output: Analytics dashboards, reports, data models

## Phase 4: Monitoring & Optimization
- Use Task tool with subagent_type="data-ops-engineer"
- Prompt: "Deploy and monitor data pipeline: [complete pipeline]. Implement monitoring, alerting, performance optimization, and operational procedures."
- Output: Production deployment, monitoring setup, operational documentation

## Coordination Notes
- Architecture phase establishes data flow and processing strategy
- Parallel development ensures consistent data handling across pipeline stages
- Analytics phase validates data quality and business value
- Monitoring phase ensures reliable production operation
```

---

## Infrastructure & DevOps Templates

### Cloud Infrastructure Template

**Use Case**: Scalable cloud infrastructure deployment

```markdown
[Extended thinking: Cloud infrastructure deployment with high availability, security, and scalability considerations.]

## Phase 1: Infrastructure Planning
- Use Task tool with subagent_type="cloud-architect"
- Prompt: "Design cloud infrastructure including: resource requirements analysis, architecture design, security framework, scalability planning, and cost optimization."
- Output: Infrastructure architecture, security design, scaling strategy, cost analysis

## Phase 2: Conditional Cloud Implementation

### Path A: AWS Implementation (Condition: AWS selected)
- Use Task tool with subagent_type="aws-specialist"
- Prompt: "Implement AWS infrastructure using design: [infrastructure architecture]. Deploy VPC, compute resources, storage, networking, and security configurations."
- Output: AWS infrastructure, security configurations, networking setup

### Path B: Azure Implementation (Condition: Azure selected)
- Use Task tool with subagent_type="azure-specialist"
- Prompt: "Implement Azure infrastructure using design: [infrastructure architecture]. Deploy resource groups, virtual networks, compute resources, and security configurations."
- Output: Azure infrastructure, security configurations, networking setup

### Path C: GCP Implementation (Condition: GCP selected)
- Use Task tool with subagent_type="gcp-specialist"
- Prompt: "Implement GCP infrastructure using design: [infrastructure architecture]. Deploy VPC, compute engine, storage, and security configurations."
- Output: GCP infrastructure, security configurations, networking setup

## Phase 3: Security & Compliance
- Use Task tool with subagent_type="cloud-security-specialist"
- Prompt: "Implement security and compliance for infrastructure: [cloud infrastructure]. Configure access controls, encryption, monitoring, and compliance frameworks."
- Output: Security implementation, compliance configuration, monitoring setup

## Phase 4: Monitoring & Operations
- Use Task tool with subagent_type="cloud-ops-engineer"
- Prompt: "Implement monitoring and operations for infrastructure: [secured infrastructure]. Set up monitoring, alerting, backup, disaster recovery, and operational procedures."
- Output: Monitoring setup, operational procedures, disaster recovery plan

## Coordination Notes
- Planning phase determines cloud provider and architecture approach
- Conditional implementation optimizes for chosen cloud provider
- Security phase ensures compliance and protection across all resources
- Operations phase establishes reliable production management
```

### CI/CD Pipeline Template

**Use Case**: Continuous integration and deployment pipeline

```markdown
[Extended thinking: Comprehensive CI/CD pipeline with automated testing, security scanning, and deployment automation.]

## Phase 1: Pipeline Architecture
- Use Task tool with subagent_type="devops-architect"
- Prompt: "Design CI/CD pipeline architecture including: source control integration, build automation, testing strategy, security scanning, and deployment automation."
- Output: Pipeline architecture, tool selection, workflow design, security integration

## Phase 2: Parallel Pipeline Implementation

### Branch A: Build & Test Automation
- Use Task tool with subagent_type="build-engineer"
- Prompt: "Implement build and test automation using architecture: [pipeline architecture]. Create build scripts, automated testing, code quality checks, and artifact management."
- Output: Build automation, test automation, quality gates

### Branch B: Security & Compliance
- Use Task tool with subagent_type="security-engineer"
- Prompt: "Implement security scanning and compliance using architecture: [pipeline architecture]. Add vulnerability scanning, compliance checks, and security gates."
- Output: Security scanning, compliance automation, security gates

### Branch C: Deployment Automation
- Use Task tool with subagent_type="deployment-engineer"
- Prompt: "Implement deployment automation using architecture: [pipeline architecture]. Create deployment scripts, environment management, and rollback procedures."
- Output: Deployment automation, environment configuration, rollback procedures

## Phase 3: Integration & Testing
- Use Task tool with subagent_type="devops-integration-specialist"
- Prompt: "Integrate CI/CD components: [build automation, security scanning, deployment automation]. Test complete pipeline, validate workflows, and optimize performance."
- Output: Integrated pipeline, workflow validation, performance optimization

## Phase 4: Monitoring & Optimization
- Use Task tool with subagent_type="devops-monitoring-specialist"
- Prompt: "Implement monitoring and optimization for pipeline: [integrated CI/CD]. Add pipeline monitoring, metrics collection, alerting, and continuous improvement."
- Output: Pipeline monitoring, metrics dashboard, optimization recommendations

## Coordination Notes
- Architecture phase establishes pipeline strategy and tool integration
- Parallel implementation ensures comprehensive coverage of CI/CD concerns
- Integration phase validates end-to-end pipeline functionality
- Monitoring phase enables continuous improvement and reliability
```

---

## Integration & API Templates

### API Development Template

**Use Case**: RESTful API with comprehensive features

```markdown
[Extended thinking: RESTful API development with authentication, documentation, testing, and monitoring.]

## Phase 1: API Design & Specification
- Use Task tool with subagent_type="api-designer"
- Prompt: "Design RESTful API including: endpoint specification, data models, authentication strategy, error handling, and documentation structure."
- Output: API specification, data models, authentication design, documentation framework

## Phase 2: Sequential API Implementation
- Use Task tool with subagent_type="backend-developer"
- Prompt: "Implement API using specification: [API specification, data models]. Create endpoints, implement business logic, add authentication, and error handling."
- Output: API implementation, authentication system, error handling

## Phase 3: Parallel Quality Assurance

### Branch A: Testing
- Use Task tool with subagent_type="api-tester"
- Prompt: "Create comprehensive test suite for API: [API implementation]. Include unit tests, integration tests, performance tests, and security tests."
- Output: Test suite, test automation, performance benchmarks

### Branch B: Documentation
- Use Task tool with subagent_type="api-documentation-specialist"
- Prompt: "Create API documentation using implementation: [API implementation]. Generate interactive documentation, usage examples, and integration guides."
- Output: API documentation, usage examples, integration guides

### Branch C: Security Audit
- Use Task tool with subagent_type="api-security-auditor"
- Prompt: "Audit API security using implementation: [API implementation]. Perform security testing, vulnerability assessment, and compliance validation."
- Output: Security audit report, vulnerability fixes, compliance validation

## Phase 4: Deployment & Monitoring
- Use Task tool with subagent_type="api-deployment-specialist"
- Prompt: "Deploy and monitor API: [tested API, documentation, security fixes]. Set up production deployment, monitoring, rate limiting, and analytics."
- Output: Production deployment, monitoring setup, analytics configuration

## Coordination Notes
- Design phase establishes API contract and technical approach
- Implementation phase follows specification strictly for consistency
- Parallel QA ensures comprehensive validation across multiple dimensions
- Deployment phase provides production-ready API with full observability
```

---

## Quality Assurance Templates

### Comprehensive Testing Template

**Use Case**: Complete testing strategy for complex applications

```markdown
[Extended thinking: Comprehensive testing approach covering all aspects of application quality assurance.]

## Phase 1: Test Strategy & Planning
- Use Task tool with subagent_type="qa-architect"
- Prompt: "Design comprehensive test strategy including: test types, coverage requirements, automation strategy, performance testing, and quality gates."
- Output: Test strategy, coverage requirements, automation plan, quality framework

## Phase 2: Parallel Test Implementation

### Branch A: Unit & Integration Testing
- Use Task tool with subagent_type="test-automation-engineer"
- Prompt: "Implement unit and integration tests using strategy: [test strategy]. Create automated test suites, mock services, and continuous testing integration."
- Output: Automated test suites, test infrastructure, CI integration

### Branch B: Performance Testing
- Use Task tool with subagent_type="performance-tester"
- Prompt: "Implement performance testing using strategy: [test strategy]. Create load tests, stress tests, performance benchmarks, and monitoring."
- Output: Performance test suite, benchmarks, performance monitoring

### Branch C: Security Testing
- Use Task tool with subagent_type="security-tester"
- Prompt: "Implement security testing using strategy: [test strategy]. Create security test cases, vulnerability scans, and penetration testing procedures."
- Output: Security test suite, vulnerability assessments, security validation

### Branch D: User Acceptance Testing
- Use Task tool with subagent_type="uat-coordinator"
- Prompt: "Implement user acceptance testing using strategy: [test strategy]. Create UAT scenarios, user feedback collection, and acceptance criteria validation."
- Output: UAT test cases, user feedback system, acceptance validation

## Phase 3: Test Execution & Analysis
- Use Task tool with subagent_type="qa-analyst"
- Prompt: "Execute comprehensive testing: [all test suites]. Analyze results, identify issues, track metrics, and generate quality reports."
- Output: Test execution results, quality metrics, issue tracking, quality reports

## Phase 4: Quality Assurance & Sign-off
- Use Task tool with subagent_type="qa-manager"
- Prompt: "Validate quality and provide sign-off using results: [test results, quality reports]. Ensure all quality gates passed and provide release recommendation."
- Output: Quality validation, release recommendation, quality certification

## Coordination Notes
- Strategy phase establishes comprehensive testing approach
- Parallel test implementation covers all quality dimensions
- Execution phase provides complete quality assessment
- Sign-off phase ensures quality standards met before release
```

---

## Template Customization Guide

### How to Customize Templates

1. **Identify Base Template**: Choose the template closest to your needs
2. **Modify Requirements**: Adjust for your specific requirements
3. **Update Agent Selection**: Choose agents that match your technology stack
4. **Adjust Coordination**: Modify patterns based on your constraints
5. **Add Custom Phases**: Include project-specific requirements
6. **Validate Changes**: Ensure the modified workflow is coherent

### Template Variables

Replace these variables when customizing templates:

- `[Technology Stack]`: Your chosen technologies
- `[Timeline]`: Your project timeline
- `[Team Size]`: Your team composition
- `[Quality Requirements]`: Your quality standards
- `[Deployment Target]`: Your deployment environment
- `[Integration Requirements]`: Your integration needs

### Template Validation Checklist

- [ ] All phases have clear objectives
- [ ] Agent selections are appropriate
- [ ] Context flows logically
- [ ] Coordination strategy is clear
- [ ] Error handling is included
- [ ] Success criteria are defined

## Contributing Templates

To contribute new templates:

1. Follow the established template format
2. Include comprehensive coordination notes
3. Provide clear use case descriptions
4. Test the template with real scenarios
5. Document customization options
6. Submit for review and validation

Templates should be reusable, well-documented, and validated through real-world usage to ensure they provide value to the community.