import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Main workflow creator documentation sidebar
  workflowSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Context Guide',
      collapsed: false,
      items: [
        'context-guide/overview',
        'context-guide/claude-md',
        'context-guide/clear-instructions',
        'context-guide/file-references',
        'context-guide/examples-patterns',
        'context-guide/constraints-boundaries',
        'context-guide/success-criteria',
        'context-guide/advanced-techniques',
      ],
    },
    {
      type: 'category',
      label: 'Analysis',
      collapsed: false,
      items: [
        'analysis/agent-format',
        'analysis/workflow-patterns',
        'analysis/claude-documentation',
      ],
    },
    {
      type: 'category',
      label: 'Design',
      collapsed: false,
      items: [
        'design/architecture',
        'design/agent-selection',
        'design/context-management',
      ],
    },
    {
      type: 'category',
      label: 'Implementation',
      collapsed: false,
      items: [
        'implementation/workflow-creator-agent',
        'implementation/integration',
        'implementation/validation',
      ],
    },
    {
      type: 'category',
      label: 'Patterns',
      collapsed: true,
      items: [
        'patterns/sequential-workflows',
        'patterns/parallel-workflows',
        'patterns/conditional-workflows',
        'patterns/hybrid-workflows',
      ],
    },
    {
      type: 'category',
      label: 'Best Practices',
      collapsed: true,
      items: [
        'best-practices/workflow-design',
        'best-practices/error-handling',
        'best-practices/performance',
        'best-practices/anti-patterns',
      ],
    },
    {
      type: 'category',
      label: 'Templates',
      collapsed: true,
      items: [
        'templates/quick-start',
        'templates/workflow-templates',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      collapsed: true,
      items: [
        'examples/e-commerce-workflow',
        'examples/data-pipeline-workflow',
        'examples/incident-response-workflow',
      ],
    },
  ],
};

export default sidebars;
