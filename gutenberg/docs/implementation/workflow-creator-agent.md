---
sidebar_position: 1
---

# Workflow Creator Agent Implementation

## Overview

This document provides the complete implementation details of the Workflow Creator Agent, including the core agent definition, system prompt, and integration with the existing agent ecosystem.

## Agent Definition

### Frontmatter Configuration

```yaml
---
name: workflow-creator
description: Analyzes user requirements and generates comprehensive multi-agent workflows with sequential, parallel, conditional, and hybrid coordination patterns. Dynamically matches tasks to appropriate agents and ensures proper context passing between workflow phases.
model: opus
---
```

### Model Selection Rationale

The workflow creator uses the **opus** model because it requires:
- Complex reasoning for requirement analysis
- Sophisticated pattern matching for agent selection
- Advanced planning for workflow coordination
- Deep understanding of multi-agent orchestration

## Core System Prompt

```markdown
You are an expert workflow orchestration architect specializing in creating comprehensive multi-agent workflows. Your role is to analyze complex user requirements, decompose them into manageable phases, and generate structured workflows that coordinate multiple specialized agents effectively.

## Core Capabilities

### 1. Requirements Analysis & Task Decomposition
- Parse complex user requirements into discrete, actionable tasks
- Identify dependencies and relationships between tasks
- Determine optimal workflow coordination patterns (sequential, parallel, conditional, hybrid)
- Assess complexity levels and resource requirements
- Extract context requirements for inter-agent communication

### 2. Dynamic Agent Selection & Capability Matching
- Analyze available agent descriptions and specializations dynamically
- Match task requirements to agent capabilities using semantic analysis
- Consider agent model requirements (opus, sonnet, haiku) based on task complexity
- Identify potential agent conflicts or overlapping responsibilities
- Suggest alternative agents when primary choices are unavailable

### 3. Workflow Pattern Design
- **Sequential Workflows**: Linear task progression with context accumulation
- **Parallel Workflows**: Independent task execution with result aggregation
- **Conditional Workflows**: Decision-based branching with fallback strategies
- **Hybrid Workflows**: Complex combinations of all coordination types

### 4. Context Management & Coordination
- Design context passing strategies between workflow phases
- Ensure information continuity across agent handoffs
- Define context accumulation patterns for complex workflows
- Specify coordination notes for agent synchronization
- Handle context conflicts and resolution strategies
```

## Implementation Architecture

### Core Components

```python
class WorkflowCreatorAgent:
    """Main workflow creator agent implementation"""
    
    def __init__(self):
        self.requirements_analyzer = RequirementsAnalyzer()
        self.task_decomposer = TaskDecomposer()
        self.agent_matcher = AgentMatcher()
        self.pattern_selector = PatternSelector()
        self.workflow_generator = WorkflowGenerator()
        self.validator = WorkflowValidator()
    
    async def create_workflow(self, user_requirements: str) -> WorkflowDocument:
        """Main workflow creation pipeline"""
        # Phase 1: Analyze requirements
        analysis = await self.requirements_analyzer.analyze(user_requirements)
        
        # Phase 2: Decompose into tasks
        tasks = await self.task_decomposer.decompose(analysis)
        
        # Phase 3: Select workflow pattern
        pattern = await self.pattern_selector.select_pattern(tasks, analysis)
        
        # Phase 4: Match agents to tasks
        agent_assignments = await self.agent_matcher.match_agents(tasks)
        
        # Phase 5: Generate workflow document
        workflow = await self.workflow_generator.generate(
            analysis, tasks, pattern, agent_assignments
        )
        
        # Phase 6: Validate and refine
        validation_result = await self.validator.validate(workflow)
        if not validation_result.is_valid:
            workflow = await self._refine_workflow(workflow, validation_result)
        
        return workflow
```

### Requirements Analysis Implementation

```python
class RequirementsAnalyzer:
    """Analyzes and structures user requirements"""
    
    def __init__(self):
        self.nlp_processor = NLPProcessor()
        self.domain_classifier = DomainClassifier()
        self.complexity_assessor = ComplexityAssessor()
    
    async def analyze(self, requirements: str) -> RequirementsAnalysis:
        """Comprehensive requirements analysis"""
        # Extract primary objectives
        objectives = await self._extract_objectives(requirements)
        
        # Classify technical domains
        domains = await self.domain_classifier.classify(requirements)
        
        # Assess complexity
        complexity = await self.complexity_assessor.assess(requirements)
        
        # Extract success criteria
        success_criteria = await self._extract_success_criteria(requirements)
        
        # Identify constraints
        constraints = await self._identify_constraints(requirements)
        
        return RequirementsAnalysis(
            objectives=objectives,
            domains=domains,
            complexity=complexity,
            success_criteria=success_criteria,
            constraints=constraints,
            raw_requirements=requirements
        )
    
    async def _extract_objectives(self, requirements: str) -> List[Objective]:
        """Extract primary and secondary objectives"""
        # Use NLP to identify action verbs and target nouns
        doc = self.nlp_processor.process(requirements)
        
        objectives = []
        for sentence in doc.sentences:
            if self._is_objective_sentence(sentence):
                objective = Objective(
                    description=sentence.text,
                    priority=self._assess_priority(sentence),
                    type=self._classify_objective_type(sentence)
                )
                objectives.append(objective)
        
        return objectives
```

### Task Decomposition Implementation

```python
class TaskDecomposer:
    """Decomposes requirements into actionable tasks"""
    
    def __init__(self):
        self.dependency_analyzer = DependencyAnalyzer()
        self.task_classifier = TaskClassifier()
    
    async def decompose(self, analysis: RequirementsAnalysis) -> List[Task]:
        """Break down requirements into discrete tasks"""
        tasks = []
        
        # Generate tasks from objectives
        for objective in analysis.objectives:
            objective_tasks = await self._decompose_objective(objective)
            tasks.extend(objective_tasks)
        
        # Analyze dependencies
        dependencies = await self.dependency_analyzer.analyze(tasks)
        
        # Update tasks with dependency information
        for task in tasks:
            task.dependencies = dependencies.get(task.id, [])
        
        # Classify tasks by type and complexity
        for task in tasks:
            task.type = await self.task_classifier.classify(task)
            task.complexity = await self._assess_task_complexity(task)
        
        return tasks
    
    async def _decompose_objective(self, objective: Objective) -> List[Task]:
        """Decompose a single objective into tasks"""
        if objective.type == ObjectiveType.ARCHITECTURE:
            return await self._decompose_architecture_objective(objective)
        elif objective.type == ObjectiveType.IMPLEMENTATION:
            return await self._decompose_implementation_objective(objective)
        elif objective.type == ObjectiveType.INTEGRATION:
            return await self._decompose_integration_objective(objective)
        else:
            return await self._decompose_generic_objective(objective)
```

### Agent Matching Implementation

```python
class AgentMatcher:
    """Matches tasks to appropriate agents"""
    
    def __init__(self):
        self.agent_discovery = AgentDiscoveryService()
        self.capability_matcher = CapabilityMatcher()
        self.confidence_scorer = ConfidenceScorer()
    
    async def match_agents(self, tasks: List[Task]) -> Dict[Task, AgentAssignment]:
        """Match each task to the best available agent"""
        # Discover available agents
        available_agents = await self.agent_discovery.discover_agents()
        
        assignments = {}
        for task in tasks:
            # Find candidate agents
            candidates = await self.capability_matcher.find_candidates(
                task, available_agents
            )
            
            # Score candidates
            scored_candidates = []
            for candidate in candidates:
                confidence = await self.confidence_scorer.score(candidate, task)
                scored_candidates.append((candidate, confidence))
            
            # Select best match
            best_match = max(scored_candidates, key=lambda x: x[1])
            
            # Create assignment
            assignments[task] = AgentAssignment(
                task=task,
                primary_agent=best_match[0],
                confidence=best_match[1],
                fallback_agents=self._select_fallbacks(scored_candidates)
            )
        
        return assignments
```

### Workflow Generation Implementation

```python
class WorkflowGenerator:
    """Generates structured workflow documents"""
    
    def __init__(self):
        self.template_engine = TemplateEngine()
        self.context_planner = ContextPlanner()
        self.coordination_designer = CoordinationDesigner()
    
    async def generate(
        self,
        analysis: RequirementsAnalysis,
        tasks: List[Task],
        pattern: WorkflowPattern,
        assignments: Dict[Task, AgentAssignment]
    ) -> WorkflowDocument:
        """Generate complete workflow document"""
        
        # Plan context flow
        context_plan = await self.context_planner.plan(tasks, assignments)
        
        # Design coordination strategy
        coordination = await self.coordination_designer.design(
            pattern, tasks, assignments
        )
        
        # Generate workflow phases
        phases = await self._generate_phases(
            tasks, assignments, pattern, context_plan
        )
        
        # Create workflow document
        workflow = WorkflowDocument(
            title=self._generate_title(analysis),
            description=self._generate_description(analysis),
            pattern=pattern,
            phases=phases,
            context_plan=context_plan,
            coordination_notes=coordination.notes,
            estimated_duration=self._estimate_duration(phases),
            complexity_score=analysis.complexity.score
        )
        
        return workflow
    
    async def _generate_phases(
        self,
        tasks: List[Task],
        assignments: Dict[Task, AgentAssignment],
        pattern: WorkflowPattern,
        context_plan: ContextPlan
    ) -> List[WorkflowPhase]:
        """Generate workflow phases based on pattern"""
        
        if pattern.type == PatternType.SEQUENTIAL:
            return await self._generate_sequential_phases(
                tasks, assignments, context_plan
            )
        elif pattern.type == PatternType.PARALLEL:
            return await self._generate_parallel_phases(
                tasks, assignments, context_plan
            )
        elif pattern.type == PatternType.CONDITIONAL:
            return await self._generate_conditional_phases(
                tasks, assignments, context_plan
            )
        elif pattern.type == PatternType.HYBRID:
            return await self._generate_hybrid_phases(
                tasks, assignments, context_plan
            )
```

## Workflow Templates

### Sequential Workflow Template

```python
SEQUENTIAL_TEMPLATE = """
[Extended thinking: Sequential workflow for {purpose}. Each phase builds upon previous results with careful context passing.]

## Phase {phase_number}: {phase_name}
- Use Task tool with subagent_type="{agent_name}"
- Prompt: "{detailed_prompt}"
- Output: {expected_deliverables}
- Context for next phase: {context_to_pass}

## Coordination Notes
- {coordination_requirements}
- {context_validation_checkpoints}
- {error_handling_procedures}
"""
```

### Parallel Workflow Template

```python
PARALLEL_TEMPLATE = """
[Extended thinking: Parallel workflow for {purpose}. Independent tasks executed simultaneously with result aggregation.]

## Phase {phase_number}: Parallel Execution

### Branch A: {branch_a_name}
- Use Task tool with subagent_type="{agent_a_name}"
- Prompt: "{branch_a_prompt}"
- Output: {branch_a_deliverables}

### Branch B: {branch_b_name}
- Use Task tool with subagent_type="{agent_b_name}"
- Prompt: "{branch_b_prompt}"
- Output: {branch_b_deliverables}

## Phase {next_phase}: Result Aggregation
- Use Task tool with subagent_type="{integration_agent}"
- Prompt: "Integrate results from parallel branches: [Branch A results] and [Branch B results]"
- Output: {unified_deliverables}

## Coordination Notes
- {parallel_execution_requirements}
- {result_aggregation_strategy}
- {conflict_resolution_procedures}
"""
```

## Validation Framework

### Workflow Validation Implementation

```python
class WorkflowValidator:
    """Validates generated workflows for completeness and correctness"""
    
    def __init__(self):
        self.structure_validator = StructureValidator()
        self.agent_validator = AgentValidator()
        self.context_validator = ContextValidator()
        self.coordination_validator = CoordinationValidator()
    
    async def validate(self, workflow: WorkflowDocument) -> ValidationResult:
        """Comprehensive workflow validation"""
        
        validation_tasks = [
            self.structure_validator.validate(workflow),
            self.agent_validator.validate(workflow),
            self.context_validator.validate(workflow),
            self.coordination_validator.validate(workflow)
        ]
        
        results = await asyncio.gather(*validation_tasks)
        
        # Combine results
        overall_valid = all(result.valid for result in results)
        all_errors = [error for result in results for error in result.errors]
        all_warnings = [warning for result in results for warning in result.warnings]
        
        return ValidationResult(
            valid=overall_valid,
            errors=all_errors,
            warnings=all_warnings,
            component_results=results
        )
```

### Validation Rules

```python
class ValidationRules:
    """Define validation rules for workflows"""
    
    STRUCTURE_RULES = {
        'must_have_extended_thinking': True,
        'must_have_phases': True,
        'must_have_coordination_notes': True,
        'must_use_task_tool_format': True,
        'max_phases_per_workflow': 10,
        'min_phases_per_workflow': 1
    }
    
    AGENT_RULES = {
        'agents_must_exist': True,
        'agents_must_match_capabilities': True,
        'must_have_fallback_agents': True,
        'max_agents_per_phase': 3,
        'min_confidence_threshold': 0.7
    }
    
    CONTEXT_RULES = {
        'context_must_flow_between_phases': True,
        'context_size_must_be_reasonable': True,
        'context_must_be_validated': True,
        'max_context_size_mb': 10,
        'required_context_fields': ['phase_results', 'key_decisions']
    }
```

## Integration Points

### Task Tool Integration

```python
class TaskToolIntegration:
    """Handles integration with the Task tool system"""
    
    @staticmethod
    def format_task_invocation(agent_name: str, prompt: str) -> str:
        """Format proper Task tool invocation"""
        return f'Use Task tool with subagent_type="{agent_name}"\nPrompt: "{prompt}"'
    
    @staticmethod
    def validate_agent_name(agent_name: str) -> bool:
        """Validate that agent name follows conventions"""
        return bool(re.match(r'^[a-z][a-z0-9-]*[a-z0-9]$', agent_name))
    
    @staticmethod
    def extract_context_references(prompt: str) -> List[str]:
        """Extract context references from prompts"""
        pattern = r'\[([^\]]+)\]'
        return re.findall(pattern, prompt)
```

### Agent Ecosystem Integration

```python
class AgentEcosystemIntegration:
    """Manages integration with the broader agent ecosystem"""
    
    def __init__(self):
        self.agent_registry = AgentRegistry()
        self.capability_index = CapabilityIndex()
    
    async def register_workflow_creator(self):
        """Register workflow creator in the agent ecosystem"""
        await self.agent_registry.register(
            name="workflow-creator",
            capabilities=[
                "workflow-orchestration",
                "multi-agent-coordination",
                "requirement-analysis",
                "task-decomposition"
            ],
            model="opus",
            description="Creates comprehensive multi-agent workflows"
        )
    
    async def discover_compatible_agents(self) -> List[AgentInfo]:
        """Discover agents compatible with workflow creation"""
        all_agents = await self.agent_registry.list_all()
        
        compatible_agents = []
        for agent in all_agents:
            if await self._is_compatible(agent):
                compatible_agents.append(agent)
        
        return compatible_agents
```

## Performance Optimization

### Caching Strategy

```python
class WorkflowCreatorCache:
    """Caching system for workflow creator performance"""
    
    def __init__(self):
        self.requirement_analysis_cache = TTLCache(maxsize=100, ttl=3600)
        self.agent_matching_cache = TTLCache(maxsize=500, ttl=1800)
        self.workflow_template_cache = TTLCache(maxsize=50, ttl=7200)
    
    async def get_cached_analysis(self, requirements_hash: str) -> Optional[RequirementsAnalysis]:
        """Get cached requirements analysis"""
        return self.requirement_analysis_cache.get(requirements_hash)
    
    async def cache_analysis(self, requirements_hash: str, analysis: RequirementsAnalysis):
        """Cache requirements analysis"""
        self.requirement_analysis_cache[requirements_hash] = analysis
```

### Batch Processing

```python
class BatchWorkflowCreator:
    """Batch processing for multiple workflow requests"""
    
    async def create_workflows_batch(
        self, 
        requirements_list: List[str]
    ) -> List[WorkflowDocument]:
        """Create multiple workflows efficiently"""
        
        # Group similar requirements
        requirement_groups = self._group_similar_requirements(requirements_list)
        
        # Process each group
        results = []
        for group in requirement_groups:
            group_results = await self._process_requirement_group(group)
            results.extend(group_results)
        
        return results
```

## Error Handling

### Comprehensive Error Management

```python
class WorkflowCreatorErrorHandler:
    """Handles errors in workflow creation process"""
    
    async def handle_error(self, error: Exception, context: Dict) -> ErrorResponse:
        """Handle workflow creation errors"""
        
        if isinstance(error, RequirementsAnalysisError):
            return await self._handle_analysis_error(error, context)
        elif isinstance(error, AgentMatchingError):
            return await self._handle_matching_error(error, context)
        elif isinstance(error, WorkflowGenerationError):
            return await self._handle_generation_error(error, context)
        elif isinstance(error, ValidationError):
            return await self._handle_validation_error(error, context)
        else:
            return await self._handle_unknown_error(error, context)
    
    async def _handle_analysis_error(
        self, 
        error: RequirementsAnalysisError, 
        context: Dict
    ) -> ErrorResponse:
        """Handle requirements analysis errors"""
        return ErrorResponse(
            error_type="requirements_analysis_failed",
            message="Failed to analyze requirements. Please provide more specific details.",
            suggestions=[
                "Break down requirements into smaller, more specific tasks",
                "Include technical details and constraints",
                "Specify success criteria clearly"
            ],
            retry_possible=True
        )
```

## Monitoring and Metrics

### Performance Metrics

```python
class WorkflowCreatorMetrics:
    """Collect and track workflow creator performance metrics"""
    
    def __init__(self):
        self.metrics = {
            'workflows_created': Counter(),
            'creation_time': Histogram(),
            'validation_success_rate': Gauge(),
            'agent_matching_accuracy': Gauge(),
            'pattern_distribution': Counter()
        }
    
    async def record_workflow_creation(self, workflow: WorkflowDocument, duration: float):
        """Record workflow creation metrics"""
        self.metrics['workflows_created'].inc()
        self.metrics['creation_time'].observe(duration)
        self.metrics['pattern_distribution'].inc(workflow.pattern.type.value)
```

## Testing Framework

### Unit Tests

```python
class TestWorkflowCreator(unittest.TestCase):
    """Unit tests for workflow creator"""
    
    def setUp(self):
        self.workflow_creator = WorkflowCreatorAgent()
        self.sample_requirements = "Create a web application with user authentication"
    
    async def test_requirements_analysis(self):
        """Test requirements analysis functionality"""
        analysis = await self.workflow_creator.requirements_analyzer.analyze(
            self.sample_requirements
        )
        
        self.assertIsNotNone(analysis)
        self.assertTrue(len(analysis.objectives) > 0)
        self.assertIn('web application', analysis.domains)
    
    async def test_task_decomposition(self):
        """Test task decomposition functionality"""
        analysis = RequirementsAnalysis(
            objectives=[Objective("Create web app", priority=1)],
            domains=['web', 'authentication'],
            complexity=ComplexityLevel.MEDIUM
        )
        
        tasks = await self.workflow_creator.task_decomposer.decompose(analysis)
        
        self.assertTrue(len(tasks) > 0)
        self.assertTrue(any('authentication' in task.description for task in tasks))
```

## Deployment Configuration

### Docker Configuration

```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY src/ ./src/
COPY agents/ ./agents/

ENV PYTHONPATH=/app/src
ENV AGENTS_DIRECTORY=/app/agents

CMD ["python", "-m", "src.workflow_creator.main"]
```

### Environment Configuration

```yaml
# config.yaml
workflow_creator:
  model: "opus"
  max_workflow_phases: 10
  agent_discovery:
    directory: "./agents"
    cache_ttl: 3600
  validation:
    strict_mode: true
    require_fallback_agents: true
  performance:
    enable_caching: true
    batch_size: 5
    timeout_seconds: 300
```

## Conclusion

The Workflow Creator Agent implementation provides:

1. **Comprehensive Analysis**: Deep understanding of user requirements
2. **Intelligent Matching**: Sophisticated agent selection algorithms
3. **Flexible Patterns**: Support for all workflow coordination types
4. **Robust Validation**: Comprehensive quality assurance
5. **Performance Optimization**: Caching and batch processing
6. **Error Resilience**: Comprehensive error handling
7. **Monitoring**: Detailed metrics and observability

This implementation serves as the foundation for intelligent multi-agent orchestration, enabling complex workflows to be created, validated, and executed efficiently.