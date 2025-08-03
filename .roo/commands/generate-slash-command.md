---
description: "Generate complete slash commands from natural language descriptions using AI-powered workflow orchestration"
---

# /generate-slash-command

Generate complete, production-ready slash commands from natural language descriptions. This meta-command analyzes your requirements and creates fully functional workflow commands that orchestrate multiple specialized agents to accomplish complex tasks.

## Parameters

**Required:**
- `description` (string): Natural language description of the desired workflow
  - Example: "Create a command that builds and deploys a microservice with testing and monitoring"

**Optional:**
- `complexity` (enum): Target complexity level
  - Values: `simple`, `moderate`, `complex`, `enterprise`
  - Default: `complex`
- `domain` (enum): Primary domain focus
  - Values: `backend`, `frontend`, `fullstack`, `devops`, `security`, `ml`, `data`
  - Default: Auto-detected from description
- `phases` (integer): Number of workflow phases
  - Range: 2-8
  - Default: Auto-determined based on complexity
- `agents` (integer): Maximum number of agents to orchestrate
  - Range: 3-15
  - Default: Auto-determined based on workflow needs
- `output_format` (enum): Generated command format
  - Values: `workflow`, `tool`, `hybrid`
  - Default: `workflow`
- `validation_level` (enum): Validation strictness
  - Values: `basic`, `standard`, `strict`
  - Default: `standard`

## Usage Examples

```bash
/generate-slash-command "Create a command that implements a complete e-commerce checkout flow with payment processing, inventory management, and fraud detection"

/generate-slash-command "Build a command for setting up a machine learning model deployment pipeline with A/B testing and monitoring" --complexity=enterprise --domain=ml

/generate-slash-command "Design a command that handles database migration across multiple environments with rollback capabilities" --phases=4 --agents=6
```

## Extended Thinking

This meta-command system transforms natural language descriptions into fully functional slash commands by:

1. **Intent Analysis**: Classifies the user's intent into workflow patterns (feature development, security hardening, deployment pipeline, data processing, ML deployment, incident response)

2. **Entity Extraction**: Identifies technical entities, operations, domains, constraints, and integrations from the description

3. **Complexity Assessment**: Determines the appropriate complexity level, number of phases, and agent requirements

4. **Template Selection**: Chooses the most appropriate workflow template based on the analysis

5. **Command Generation**: Creates a complete markdown-based command with proper structure, agent orchestration, and coordination rules

6. **Validation**: Ensures the generated command follows established patterns and conventions

The system specializes in creating complex multi-step workflows that orchestrate multiple operations, following the established patterns found in existing workflow commands like `/feature-development`, `/security-hardening`, and `/incident-response`.

## Implementation

### Phase 1: Natural Language Processing

#### 1. Intent Classification
- Use Task tool with subagent_type="data-scientist"
- Prompt: "Analyze the natural language description to classify the primary intent and workflow pattern. Identify keywords, entities, and complexity indicators that match established workflow patterns: feature_development, security_hardening, deployment_pipeline, data_processing, ml_deployment, incident_response."
- Output: Intent classification with confidence scores, workflow pattern selection, and reasoning

#### 2. Entity Extraction
- Use Task tool with subagent_type="backend-architect"
- Prompt: "Extract technical entities from the description including technologies, operations, domains, constraints, and integrations. Categorize entities to inform template selection and agent assignment."
- Output: Structured entity extraction with categories and relevance scores

#### 3. Complexity Analysis
- Use Task tool with subagent_type="backend-architect"
- Prompt: "Analyze the complexity of the described workflow. Determine the appropriate number of phases, agents, and coordination requirements based on the scope and technical complexity."
- Output: Complexity assessment with phase and agent recommendations

### Phase 2: Template Selection and Configuration

#### 4. Workflow Template Selection
- Use Task tool with subagent_type="backend-architect"
- Prompt: "Based on the intent classification and entity extraction, select the most appropriate workflow template. Configure the template with the specific requirements from the description."
- Output: Selected template with configuration parameters

#### 5. Agent Assignment Planning
- Use Task tool with subagent_type="backend-architect"
- Prompt: "Plan the agent assignments for each phase of the workflow. Select appropriate agent types based on the technical requirements and ensure proper coordination between phases."
- Output: Detailed agent assignment plan with coordination rules

### Phase 3: Command Generation

#### 6. Command Structure Generation
- Use Task tool with subagent_type="backend-developer"
- Prompt: "Generate the complete command structure with proper markdown formatting, phase organization, and agent task definitions. Include extended thinking section, coordination notes, and proper parameter handling."
- Output: Complete command structure with all required sections

#### 7. Agent Task Definition
- Use Task tool with subagent_type="backend-developer"
- Prompt: "Define specific tasks for each agent in each phase. Create detailed prompts, expected outputs, and dependencies between tasks. Ensure tasks build upon each other logically."
- Output: Detailed agent task definitions with prompts and outputs

#### 8. Coordination Rules Implementation
- Use Task tool with subagent_type="integration-specialist"
- Prompt: "Implement coordination rules between phases and agents. Define handoff procedures, dependency management, and error handling strategies."
- Output: Coordination rules and dependency management

### Phase 4: Validation and Optimization

#### 9. Command Validation
- Use Task tool with subagent_type="test-automator"
- Prompt: "Validate the generated command against established patterns and conventions. Check for proper structure, valid agent types, logical flow, and completeness."
- Output: Validation report with any issues and recommendations

#### 10. Usage Example Generation
- Use Task tool with subagent_type="backend-developer"
- Prompt: "Generate practical usage examples showing how the command would be used in different scenarios. Include parameter variations and expected outcomes."
- Output: Comprehensive usage examples and documentation

## Coordination Notes

- The natural language processing must accurately identify the core workflow pattern to select the appropriate template
- Agent assignments must follow established patterns and use only valid agent types
- Generated commands must include proper extended thinking sections and coordination notes
- All phases must have clear dependencies and logical progression
- Validation must ensure the command follows the established markdown structure and conventions
- The final command must be immediately usable without additional modification

## Supported Workflow Patterns

### Feature Development
- **Keywords**: implement, build, create, develop, feature, application
- **Phases**: Architecture and Design, Implementation, Quality Assurance, Deployment
- **Agents**: backend-architect, frontend-developer, database-designer, test-automator, security-auditor, deployment-engineer

### Security Hardening
- **Keywords**: secure, harden, protect, audit, compliance, security
- **Phases**: Security Assessment, Implementation, Testing and Validation, Monitoring and Response
- **Agents**: security-auditor, compliance-specialist, security-engineer, penetration-tester, security-monitor

### Deployment Pipeline
- **Keywords**: deploy, pipeline, ci/cd, release, automation, infrastructure
- **Phases**: Infrastructure Design, Pipeline Implementation, Testing and Validation, Monitoring
- **Agents**: deployment-engineer, backend-architect, test-automator, monitoring-specialist

### Data Processing
- **Keywords**: process, transform, analyze, pipeline, etl, data, analytics
- **Phases**: Data Architecture, Pipeline Implementation, Processing Logic, Monitoring
- **Agents**: data-scientist, backend-architect, database-designer, data-analyst

### ML Deployment
- **Keywords**: machine learning, ml, model, ai, prediction, training
- **Phases**: ML Infrastructure, Model Implementation, Testing and Validation, Deployment and Monitoring
- **Agents**: ml-engineer, data-scientist, backend-architect, monitoring-specialist

### Incident Response
- **Keywords**: fix, debug, troubleshoot, resolve, incident, issue
- **Phases**: Assessment, Investigation, Resolution, Prevention
- **Agents**: incident-responder, monitoring-specialist, backend-developer, devops-troubleshooter

Generate slash command: $ARGUMENTS