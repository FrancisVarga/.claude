# GitHub Actions for Docusaurus Multi-Branch Deployment

This repository includes GitHub Actions workflows for deploying Docusaurus documentation to GitHub Pages with support for multiple branches.

## Features

- 🚀 **Multi-branch deployment** - Each branch gets its own documentation deployment
- 📚 **Branch index page** - Automatic index showing all deployed branches
- 🔄 **Automatic updates** - Deploys on push to any branch
- 💬 **PR comments** - Preview links in pull requests
- 🎯 **Reusable actions** - Modular action components

## Workflows

### 1. Deploy Docusaurus (`deploy-docusaurus.yml`)

Builds and deploys Docusaurus documentation for any branch:

- **Main branch**: Deploys to `https://[owner].github.io/[repo]/`
- **Other branches**: Deploys to `https://[owner].github.io/[repo]/[branch-name]/`

**Triggers:**
- Push to any branch (when `gutenberg/` directory changes)
- Manual workflow dispatch

### 2. Update Branch Index (`update-branch-index.yml`)

Creates an index page listing all deployed documentation branches:

- Runs after successful Docusaurus deployment
- Generates searchable branch list
- Updates automatically

## Reusable Actions

Located in `.github/actions/`:

### `setup-docusaurus`
- Sets up Node.js environment
- Installs dependencies
- Extracts branch information

### `configure-docusaurus`
- Configures base URL for GitHub Pages
- Updates site URL based on branch
- Handles main vs feature branch paths

### `build-docusaurus`
- Builds production Docusaurus site
- Verifies build output
- Disables telemetry

### `prepare-deployment`
- Prepares files for GitHub Pages
- Handles branch-specific paths
- Creates deployment metadata

## Setup Instructions

1. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: GitHub Actions
   - Save

2. **Configure Docusaurus**
   - Ensure `docusaurus.config.ts` has configurable `baseUrl` and `url`
   - Place Docusaurus in `gutenberg/` directory

3. **Push to trigger deployment**
   - Workflows run automatically on push
   - Or trigger manually from Actions tab

## Branch Naming

Branch names are sanitized for URLs:
- Special characters replaced with hyphens
- Multiple hyphens collapsed to single
- Case preserved

Examples:
- `feature/new-docs` → `feature-new-docs`
- `fix/issue#123` → `fix-issue-123`

## Environment Variables

Set in workflows:
- `GITHUB_PAGES_URL`: Base URL for GitHub Pages
- `DOCUSAURUS_TELEMETRY`: Disabled by default

## Deployment Structure

```
github.io/[repo]/
├── index.html          # Branch index (if multiple branches)
├── [main docs]         # Main branch documentation
└── [branch-name]/      # Feature branch documentation
    └── [branch docs]
```

## Troubleshooting

### Build Fails
- Check Node.js version compatibility
- Verify `package-lock.json` exists
- Check Docusaurus configuration

### Deployment Not Showing
- Ensure GitHub Pages is enabled
- Check workflow permissions
- Verify branch name sanitization

### Wrong URLs
- Check `baseUrl` configuration
- Verify repository name in URLs
- Ensure proper path handling

## Contributing

To modify workflows:
1. Edit files in `.github/workflows/` or `.github/actions/`
2. Test changes in a feature branch
3. Verify deployment works correctly
4. Merge to main

## License

These workflows are provided as-is for use with your Docusaurus projects.