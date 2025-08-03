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
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started - 5min ⏱️
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/examples/e-commerce-workflow"
            style={{marginLeft: '1rem'}}>
            View Examples
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, description, icon}: {title: string; description: string; icon: string}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{icon}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <FeatureCard
            title="Multi-Agent Orchestration"
            description="Coordinate multiple AI agents to work together seamlessly on complex tasks with intelligent workflow management."
            icon="🤖"
          />
          <FeatureCard
            title="Flexible Workflow Patterns"
            description="Support for sequential, parallel, conditional, and hybrid workflows to handle any automation scenario."
            icon="🔄"
          />
          <FeatureCard
            title="Context Management"
            description="Advanced techniques for maintaining context across agent interactions and workflow steps."
            icon="🧠"
          />
        </div>
        <div className="row" style={{marginTop: '2rem'}}>
          <FeatureCard
            title="Best Practices"
            description="Proven patterns, anti-patterns, and guidelines for optimal workflow design and implementation."
            icon="✅"
          />
          <FeatureCard
            title="Template Library"
            description="Ready-to-use workflow templates for common use cases like e-commerce, data pipelines, and more."
            icon="📚"
          />
          <FeatureCard
            title="Real-world Examples"
            description="Practical implementations and case studies from production workflows across various industries."
            icon="🌟"
          />
        </div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  return (
    <section className={styles.quickStart}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="text--center">
              <Heading as="h2">Quick Start Guide</Heading>
              <p>Get up and running with Workflow Creator in minutes</p>
              <div className="row" style={{marginTop: '2rem'}}>
                <div className="col col--4">
                  <div className="card">
                    <div className="card__header">
                      <h3>1. Learn the Basics</h3>
                    </div>
                    <div className="card__body">
                      <p>Start with our context guide to understand how to effectively work with AI agents.</p>
                      <Link to="/docs/context-guide/overview">Context Guide →</Link>
                    </div>
                  </div>
                </div>
                <div className="col col--4">
                  <div className="card">
                    <div className="card__header">
                      <h3>2. Choose a Template</h3>
                    </div>
                    <div className="card__body">
                      <p>Browse our template library to find a starting point for your workflow.</p>
                      <Link to="/docs/templates/quick-start">Templates →</Link>
                    </div>
                  </div>
                </div>
                <div className="col col--4">
                  <div className="card">
                    <div className="card__header">
                      <h3>3. Implement & Deploy</h3>
                    </div>
                    <div className="card__body">
                      <p>Follow our implementation guide to build and deploy your workflow.</p>
                      <Link to="/docs/implementation/workflow-creator-agent">Implementation →</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      description="Multi-Agent Workflow Orchestration System - Design, implement, and manage sophisticated multi-agent workflows with advanced context management and proven best practices.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <QuickStartSection />
      </main>
    </Layout>
  );
}