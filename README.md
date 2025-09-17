# Turbo UI Library Monorepo

A modern UI component library built with React, TypeScript, and Tailwind CSS, managed as a Turborepo monorepo.

## Project Overview

This repository contains a comprehensive UI library ecosystem with:

- **@bobs-ui/ui** - Core React component library with TypeScript and Tailwind CSS
- **docs** - Documentation site built with Next.js and Nextra
- Automated versioning and publishing with Changesets
- GitHub Packages integration for private package distribution

## Repository Structure

```
├── apps/
│   └── docs/              # Documentation site (Next.js + Nextra)
├── packages/
│   ├── ui/                # Main UI component library
│   ├── eslint-config/     # Shared ESLint configurations
│   └── typescript-config/ # Shared TypeScript configurations
├── .github/
│   ├── workflows/         # CI/CD workflows
│   └── actions/           # Reusable GitHub Actions
├── .changeset/            # Changesets configuration
└── .husky/                # Git hooks
```

### Key Directories

- **`packages/ui/`** - Main UI component library with React components, TypeScript definitions, and Tailwind styles
- **`apps/docs/`** - Documentation and component showcase site
- **`.github/workflows/`** - Automated CI/CD pipelines for testing, versioning, and publishing

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm 9.12.0 (specified in `packageManager`)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd turbo-lib

# Install dependencies
pnpm install
```

### Development

```bash
# Start development servers for all apps
pnpm dev

# Build all packages and apps
pnpm build

# Run linting across all packages
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format

# Type checking
pnpm check-types
```

### Working with the UI Library

```bash
# Build only the UI package
pnpm build --filter=@bobs-ui/ui

# Develop the UI package with hot reload
cd packages/ui
pnpm dev
```

### Documentation Site

```bash
# Start the docs site
cd apps/docs
pnpm dev

# Build the docs site
pnpm build
```

## Available Scripts

### Root Level Scripts

- `pnpm build` - Build all packages and applications
- `pnpm dev` - Start development servers for all apps
- `pnpm lint` - Run ESLint across all packages
- `pnpm lint:fix` - Fix ESLint issues automatically
- `pnpm format` - Format code with Prettier
- `pnpm check-types` - Run TypeScript type checking
- `pnpm version` - Version packages using Changesets

### Package-Specific Scripts

**UI Package (`packages/ui/`):**

- `pnpm build` - Build the component library (ESM/CJS + CSS)
- `pnpm dev` - Development mode with hot reload
- `pnpm generate:component` - Generate new React component scaffolding

**Documentation (`apps/docs/`):**

- `pnpm dev` - Start Next.js development server on port 2025
- `pnpm build` - Build the documentation site
- `pnpm start` - Start production server

## Usage in Other Projects

### Authentication Setup

To install `@bobs-ui/ui` from GitHub Packages, you need to set up authentication:

1. **Generate a Personal Access Token (PAT)** from GitHub with `packages:read` scope
2. **Set environment variable:**
   ```bash
   export NPM_TOKEN=YOUR_PAT_HERE
   ```
3. **Configure package manager authentication:**

   **For npm/pnpm (.npmrc)** - see [.npmrc.dev](.npmrc.dev) for reference:

   ```
   @bobs-ui:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${NPM_TOKEN}
   ```

   **For Yarn Berry (.yarnrc.yml)** - see [.yarnrc.yml.dev](.yarnrc.yml.dev) for reference:

   ```yaml
   injectEnvironmentFiles:
     - .env

   nodeLinker: node-modules

   npmScopes:
     bobs-ui:
       npmAlwaysAuth: true
       npmAuthToken: "${NPM_TOKEN}"
       npmRegistryServer: "https://npm.pkg.github.com"
   ```

### Installation

```bash
npm install @bobs-ui/ui
# or
yarn add @bobs-ui/ui
# or
pnpm add @bobs-ui/ui
```

### Setup Requirements

This library is built with **Tailwind CSS v4** and requires specific setup:

1. **Import the CSS file** in your app's root (e.g., `layout.tsx`, `_app.tsx`, or `main.tsx`):

   ```tsx
   import "@bobs-ui/ui/dist/output.css";
   ```

2. **Add required CSS variables** to your global CSS file:

   ```css
   :root {
     --background: #ffffff;
     --foreground: #171717;
     --purple-900: #1f0444;
     --purple-800: #2b0660;
     --purple-700: #410891;
     --purple-600: #570bc1;
     --purple-500: #600cd4;
     --purple-400: #8a3ef4;
     --purple-300: #a76ef7;
     --purple-200: #c49ff9;
     --purple-100: #e2cffc;
     --purple-50: #f0e7fe;

     --color-secondary-50: #f8fafc;
     --color-secondary-100: #f1f5f9;
     --color-secondary-200: #e2e8f0;
     --color-secondary-300: #cbd5e1;
     --color-secondary-400: #94a3b8;
     --color-secondary-500: #f0ab20;
     --color-secondary-600: #d69a1c;
     --color-secondary-700: #334155;
     --color-secondary-800: #1e293b;
     --color-secondary-900: #0f172a;
     --color-secondary-950: #020617;
   }
   ```

3. **Use components** in your project:

   ```tsx
   import { Button } from "@bobs-ui/ui";

   export default function App() {
     return <Button>Click me</Button>;
   }
   ```

## Contributing

Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed information about:

- Development workflow
- Pull request process
- Publishing guidelines
- Code standards and conventions

## Architecture

- **Turborepo** - Monorepo build system with intelligent caching
- **pnpm** - Fast, disk space efficient package manager
- **Changesets** - Versioning and changelog management
- **GitHub Actions** - Automated CI/CD pipelines
- **GitHub Packages** - Private package registry
- **Husky** - Git hooks for code quality enforcement
