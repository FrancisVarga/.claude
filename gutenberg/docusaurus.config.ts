import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Claude Code Documentation',
  tagline: 'Enhanced Development Environment with AI-Powered Tools',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Claude Code',
      logo: {
        alt: 'Claude Code Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'workflowSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'dropdown',
          label: 'Guides',
          position: 'left',
          items: [
            {
              label: 'Context Guide',
              to: '/docs/context-guide/overview',
            },
            {
              label: 'Best Practices',
              to: '/docs/best-practices/workflow-design',
            },
            {
              label: 'Templates',
              to: '/docs/templates/quick-start',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Examples',
          position: 'left',
          items: [
            {
              label: 'E-commerce Workflow',
              to: '/docs/examples/e-commerce-workflow',
            },
            {
              label: 'Data Pipeline',
              to: '/docs/examples/data-pipeline-workflow',
            },
            {
              label: 'Incident Response',
              to: '/docs/examples/incident-response-workflow',
            },
          ],
        },
        {
          href: 'https://github.com/anthropics/claude-code',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Context Guide',
              to: '/docs/context-guide/overview',
            },
            {
              label: 'Best Practices',
              to: '/docs/best-practices/workflow-design',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Templates',
              to: '/docs/templates/quick-start',
            },
            {
              label: 'Examples',
              to: '/docs/examples/e-commerce-workflow',
            },
            {
              label: 'Patterns',
              to: '/docs/patterns/sequential-workflows',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/anthropics/claude-code',
            },
            {
              label: 'Issues',
              href: 'https://github.com/your-org/workflow-creator/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Claude Code Project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
