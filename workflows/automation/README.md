# Automation Workflows

Process automation, orchestration, and CI/CD workflows for intelligent task execution and system coordination.

## Overview

This directory contains workflows focused on automating complex processes, orchestrating multiple agents, and managing sophisticated execution pipelines. These workflows are designed for tasks that require intelligent coordination, parallel execution, and automated quality assurance.

## Workflows

### project-task.yaml
**Purpose**: Comprehensive project task orchestration with intelligent sub-agent coordination

**Key Features**:
- Intelligent task analysis and domain classification
- Dynamic sub-agent selection from 10+ specialized agents
- Parallel execution with dependency management
- Real-time progress tracking and error recovery
- Quality gates and comprehensive validation
- Result aggregation with synthesis logic

**Use Cases**:
- Complex software development tasks
- Multi-domain integration projects
- Quality improvement initiatives
- Performance optimization campaigns
- Security assessment and hardening
- Architecture review and validation

**Sub-Agent Ecosystem**:
- mastra-tools-specialist, typescript-pro, test-automator
- backend-architect, frontend-developer, security-auditor
- performance-engineer, error-detective, code-reviewer, architect-reviewer

**Performance Targets**:
- 60-80% time savings through parallel execution
- >90% successful task completion rate
- >85% quality score across all outputs
- <20 seconds orchestration overhead

## Classification Criteria

Workflows in this directory typically involve:
- **Keywords**: deploy, ci, cd, pipeline, automate, orchestrate, coordinate
- **Tools**: Task (primary), Bash, Sequential, TodoWrite
- **Patterns**: Parallel execution, process automation, quality gates
- **Scope**: System-wide automation and orchestration

## Best Practices

1. **Intelligent Orchestration**: Use dynamic agent selection and parallel execution
2. **Quality Gates**: Implement validation checkpoints throughout execution
3. **Error Recovery**: Design graceful degradation and fallback strategies
4. **Progress Tracking**: Provide real-time visibility into execution status
5. **Resource Optimization**: Maximize parallel processing while managing dependencies
6. **Result Synthesis**: Aggregate outputs into coherent, actionable results

## Integration Points

- **MCP Servers**: Sequential (coordination), Context7 (patterns), Magic (UI), Playwright (testing)
- **SuperClaude Framework**: Wave system, persona integration, quality orchestration
- **Mastra Ecosystem**: TypeScript framework, tool integration, memory persistence