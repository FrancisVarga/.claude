import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroBackground}>
        <div className={styles.heroGradient} />
        <div className={styles.heroPattern} />
      </div>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Supercharge Your Development with{' '}
              <span className={styles.heroTitleGradient}>Claude Code</span>
            </h1>
            <p className={styles.heroSubtitle}>
              An enhanced development environment powered by AI agents, 
              52 slash commands, and integrated MCP servers. Build faster, 
              smarter, and with confidence.
            </p>
            <div className={styles.heroButtons}>
              <Link
                className={clsx('button button--primary button--lg', styles.heroButton)}
                to="/docs/intro">
                <span>Get Started</span>
                <svg className={styles.buttonIcon} width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                className={clsx('button button--outline button--lg', styles.heroButtonSecondary)}
                to="https://github.com/anthropics/claude-code">
                <svg className={styles.buttonIcon} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>View on GitHub</span>
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.codeWindow}>
              <div className={styles.codeHeader}>
                <div className={styles.codeHeaderDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className={styles.codeHeaderTitle}>claude-code</span>
              </div>
              <div className={styles.codeContent}>
                <pre>
                  <code>
{`$ claude code
> /feature-development authentication system
🤖 Initializing multi-agent workflow...
✓ Backend API created
✓ Frontend components built
✓ Tests implemented
✓ Security review completed

🎉 Feature deployed successfully!`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function FeatureSection() {
  const features = [
    {
      title: 'MCP Servers',
      description: 'Integrated Model Context Protocol servers for memory persistence, documentation access, and browser automation.',
      icon: '🧠',
      gradient: 'gradient1',
      details: ['Memory persistence', 'Context7 docs', 'Puppeteer automation', 'GitHub integration']
    },
    {
      title: '52 Slash Commands',
      description: 'Production-ready commands for every development task, from API scaffolding to security scanning.',
      icon: '🚀',
      gradient: 'gradient2',
      details: ['Workflows & Tools', 'Multi-agent orchestration', 'Instant execution', 'Customizable']
    },
    {
      title: 'Specialized Agents',
      description: 'Expert AI agents for backend, frontend, DevOps, security, and ML tasks working in harmony.',
      icon: '🤖',
      gradient: 'gradient3',
      details: ['Domain experts', 'Collaborative workflow', 'Context aware', 'Self-improving']
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Everything You Need to <span className={styles.titleGradient}>Build Faster</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Claude Code combines the power of AI with developer-first tools to accelerate your workflow
          </p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={clsx(styles.featureCardBg, styles[feature.gradient])} />
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
              <ul className={styles.featureDetails}>
                {feature.details.map((detail, i) => (
                  <li key={i}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: '52+', label: 'Slash Commands', suffix: '' },
    { value: '10', label: 'Specialized Agents', suffix: 'x' },
    { value: '100', label: 'Faster Development', suffix: '%' },
    { value: '24/7', label: 'AI Assistance', suffix: '' },
  ];

  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statItem}>
              <div className={styles.statValue}>
                {stat.value}
                <span className={styles.statSuffix}>{stat.suffix}</span>
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className={styles.workflow}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            How Claude Code <span className={styles.titleGradient}>Transforms</span> Your Workflow
          </h2>
        </div>
        <div className={styles.workflowSteps}>
          <div className={styles.workflowStep}>
            <div className={styles.stepNumber}>01</div>
            <h3>Describe Your Task</h3>
            <p>Simply tell Claude Code what you want to build using natural language</p>
          </div>
          <div className={styles.workflowConnector} />
          <div className={styles.workflowStep}>
            <div className={styles.stepNumber}>02</div>
            <h3>AI Agents Collaborate</h3>
            <p>Multiple specialized agents work together to implement your solution</p>
          </div>
          <div className={styles.workflowConnector} />
          <div className={styles.workflowStep}>
            <div className={styles.stepNumber}>03</div>
            <h3>Review & Deploy</h3>
            <p>Get production-ready code with tests, security checks, and documentation</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const useCases = [
    {
      title: 'Full-Stack Development',
      description: 'Build complete features with coordinated frontend and backend implementation',
      icon: '💻',
    },
    {
      title: 'API Development',
      description: 'Scaffold production-ready APIs with authentication, validation, and documentation',
      icon: '🔌',
    },
    {
      title: 'DevOps Automation',
      description: 'Set up CI/CD pipelines, Docker containers, and Kubernetes deployments',
      icon: '⚙️',
    },
    {
      title: 'Code Modernization',
      description: 'Refactor legacy code, update dependencies, and migrate to modern frameworks',
      icon: '🔄',
    },
    {
      title: 'Security Hardening',
      description: 'Scan for vulnerabilities, implement security best practices, and ensure compliance',
      icon: '🔒',
    },
    {
      title: 'AI/ML Integration',
      description: 'Build LLM-powered features, implement RAG systems, and optimize prompts',
      icon: '🧪',
    },
  ];

  return (
    <section className={styles.useCases}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Built for <span className={styles.titleGradient}>Every Developer</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            From startups to enterprises, Claude Code adapts to your needs
          </p>
        </div>
        <div className={styles.useCaseGrid}>
          {useCases.map((useCase, idx) => (
            <div key={idx} className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>{useCase.icon}</div>
              <h3>{useCase.title}</h3>
              <p>{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaBackground} />
      <div className="container">
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Ready to 10x Your Development Speed?
          </h2>
          <p className={styles.ctaSubtitle}>
            Join thousands of developers building faster with Claude Code
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className={clsx('button button--primary button--lg', styles.ctaButton)}
              to="https://docs.anthropic.com/en/docs/claude-code">
              Start Building Now
            </Link>
            <Link
              className={clsx('button button--outline button--lg', styles.ctaButtonSecondary)}
              to="/docs/intro">
              Read Documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Enhanced Development Environment with AI-Powered Tools - MCP servers, slash commands, and specialized agents for accelerated software development.">
      <HomepageHeader />
      <main>
        <FeatureSection />
        <StatsSection />
        <WorkflowSection />
        <UseCasesSection />
        <CTASection />
      </main>
    </Layout>
  );
}