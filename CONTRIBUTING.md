# Contributing Guide

This guide covers the development workflow, pull request process, and publishing guidelines for the Turbo UI Library monorepo.

## Project Structure

This is a Turborepo monorepo with the following structure:

- **`apps/docs/`** - Next.js documentation site with Nextra theme
- **`packages/ui/`** - Main React component library with TypeScript and Tailwind CSS
- **`packages/eslint-config/`** - Shared ESLint configurations for the monorepo
- **`packages/typescript-config/`** - Shared TypeScript configurations
- **`.changeset/`** - Changesets configuration for versioning and changelog generation
- **`.github/workflows/`** - CI/CD workflows for automated testing, versioning, and publishing

## Development Workflow

### Prerequisites

- Node.js >= 18
- pnpm 9.12.0

### Local Development

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start development servers:**
   ```bash
   # Start all development servers
   pnpm dev
   
   # Or start specific packages
   pnpm dev --filter=@bobs-ui/ui
   pnpm dev --filter=docs
   ```

3. **Run quality checks:**
   ```bash
   # Lint all packages
   pnpm lint
   
   # Fix linting issues
   pnpm lint:fix
   
   # Type checking
   pnpm check-types
   
   # Build all packages
   pnpm build
   ```

### Git Hooks

This repository uses Husky for git hooks:

- **Pre-commit:** Runs `pnpm lint` to ensure code quality before commits
- **Lint-staged:** Automatically fixes linting issues on staged files

## Making a Pull Request

### Non-Publishing PR (Bug fixes, docs, refactoring)

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes and ensure quality:**
   ```bash
   pnpm lint
   pnpm check-types
   pnpm build
   ```

3. **Commit and push:**
   ```bash
   git add .
   git commit -m "feat: your descriptive commit message"
   git push origin feature/your-feature-name
   ```

4. **Create PR** - The following CI workflows will run:
   - **Lint and type checking** across all packages
   - **Build verification** to ensure no build errors
   - **Test version publishing** (creates a test package version)

### Publishing PR (New features, breaking changes)

For changes that should trigger a new package version:

1. **Follow steps 1-2 from non-publishing PR**

2. **Add a changeset:**
   ```bash
   pnpm changeset
   ```
   - Select which packages are affected
   - Choose version bump type (patch/minor/major)
   - Write a clear description of changes

3. **Commit the changeset:**
   ```bash
   git add .changeset/
   git commit -m "feat: add new component with changeset"
   git push origin feature/your-feature-name
   ```

4. **Create PR** - Same CI workflows run, plus:
   - **Test version publishing** with format `0.0.0-pr{number}-{run_number}`
   - Comment on PR with published test version

**Important:** Adding a changeset (`pnpm changeset`) is required if you want the publish GitHub Actions workflow to run after merge.

### Expected CI Workflows

All PRs trigger these workflows (defined in `.github/workflows/`):

- **`publish-test-pr.yml`** - Publishes test versions to GitHub Packages
- Lint, type checking, and build verification (part of install action)

## Publishing Flow

### Automated Publishing

When a PR with changesets is merged to `main`:

1. **Version and Release workflow** (`.github/workflows/version-and-release.yml`) runs:
   - Builds the UI package: `pnpm build --filter=@bobs-ui/ui`
   - Runs `pnpm changeset version` to update package versions
   - Commits version changes with message: `"chore: version packages [skip ci]"`
   - Publishes to GitHub Packages: `pnpm changeset publish`
   - Pushes git tags for the new versions

2. **Package Distribution:**
   - Published to GitHub Packages registry (configured in `.npmrc`)
   - Uses `publishConfig.registry: "https://npm.pkg.github.com/"`
   - Requires `NPM_TOKEN` secret for authentication

### Manual Versioning

If needed, you can manually version packages:

```bash
# Create changesets interactively
pnpm changeset

# Apply version bumps
pnpm changeset version

# Publish (requires proper authentication)
pnpm changeset publish
```

## Contribution Guidelines

### Branch Naming

Use descriptive branch names:
- `feature/component-name` - New features
- `fix/issue-description` - Bug fixes
- `docs/update-readme` - Documentation updates
- `refactor/cleanup-utils` - Code refactoring

### Commit Style

Follow conventional commit format:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

### Code Quality Requirements

Before pushing, ensure:

1. **Linting passes:** `pnpm lint`
2. **Type checking passes:** `pnpm check-types`
3. **Build succeeds:** `pnpm build`
4. **Format code:** `pnpm format`

### Package-Specific Development

**UI Package (`packages/ui/`):**
- Use `pnpm generate:component` for new React components
- Build outputs: ESM (`dist/index.mjs`), CJS (`dist/index.js`), types (`dist/index.d.ts`), CSS (`dist/output.css`)
- Development: `pnpm dev` (concurrent TypeScript and Tailwind watching)

**Documentation (`apps/docs/`):**
- Runs on port 2025 in development
- Uses Nextra theme for documentation
- Import UI components from `@bobs-ui/ui`

### Required Checks

All PRs must pass:
- ESLint with zero warnings
- TypeScript compilation
- Successful build of all packages
- Prettier formatting

The pre-commit hook will catch most issues, but verify locally before pushing.

## GitHub Packages Authentication

For publishing and installing private packages:

1. **Set up authentication** in `.npmrc`:
   ```
   @bobs-ui:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${NPM_TOKEN}
   ```

2. **Environment variables:**
   - `NPM_TOKEN` - GitHub Personal Access Token with packages:write scope

This information is not defined in the repo for local development setup of GitHub Packages authentication.
