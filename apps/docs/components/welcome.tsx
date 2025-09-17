'use client';

import { Button, Code } from '@bob/ui';
import { useState } from 'react';

export default function WelcomePage() {
  const [activeTab, setActiveTab] = useState<'install' | 'local'>('install');
  const [packageManager, setPackageManager] = useState<'npm' | 'pnpm' | 'yarn'>(
    'npm',
  );

  return (
    <div className="min-h-screen bg-slate-100 rounded-md p-5">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-primary">Bob UI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A modern, fast, and beautiful UI component library built with React,
            TypeScript, and Tailwind CSS v4. Designed for modern web
            applications with performance in mind.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button intent="secondary" size="lg">
              Get Started
            </Button>
            <Button intent="outline" size="lg">
              View Components
            </Button>
          </div>
        </div>

        {/* Installation Guide */}
        <div className="mb-12 bg-white rounded-lg shadow-md">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🚀 Installation Guide
            </h2>

            {/* Tab Navigation */}
            <div className="flex mb-6 border-b border-gray-200">
              <button
                className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === 'install'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('install')}
              >
                Install in Project
              </button>
              <button
                className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === 'local'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('local')}
              >
                Local Development Setup
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'install' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    1. Install the Package
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Install Bob UI in your existing React project:
                  </p>
                  <div className="mb-4">
                    <div className="flex mb-3 border-b border-gray-200">
                      <button
                        className={`px-3 py-1 text-xs font-medium border-b-2 transition-colors ${
                          packageManager === 'npm'
                            ? 'border-primary text-primary'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                        onClick={() => setPackageManager('npm')}
                      >
                        npm
                      </button>
                      <button
                        className={`px-3 py-1 text-xs font-medium border-b-2 transition-colors ${
                          packageManager === 'pnpm'
                            ? 'border-primary text-primary'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                        onClick={() => setPackageManager('pnpm')}
                      >
                        pnpm
                      </button>
                      <button
                        className={`px-3 py-1 text-xs font-medium border-b-2 transition-colors ${
                          packageManager === 'yarn'
                            ? 'border-primary text-primary'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                        onClick={() => setPackageManager('yarn')}
                      >
                        yarn
                      </button>
                    </div>
                    <Code language="bash">
                      {packageManager === 'npm'
                        ? 'npm install @bob/ui'
                        : packageManager === 'pnpm'
                          ? 'pnpm add @bob/ui'
                          : 'yarn add @bob/ui'}
                    </Code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    2. Import Styles
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Import the UI library styles in your app&apos;s root CSS
                    file or main entry point:
                  </p>
                  <Code language="css">
                    @import &quot;@bob/ui/dist/output.css&quot;;
                  </Code>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    3. Set CSS Variables
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Add the required purple and secondary CSS variables to your
                    root CSS file or{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      globals.css
                    </code>
                    :
                  </p>
                  <Code language="css">
                    {`:root {
  --purple-50: #F0E7FE;
  --purple-100: #E2CFFC;
  --purple-200: #C49FF9;
  --purple-300: #A76EF7;
  --purple-400: #8A3EF4;
  --purple-500: #600CD4;
  --purple-600: #570BC1;
  --purple-700: #410891;
  --purple-800: #2B0660;
  --purple-900: #1F0444;

  --color-secondary-50: #f8fafc;
  --color-secondary-100: #f1f5f9;
  --color-secondary-200: #e2e8f0;
  --color-secondary-300: #cbd5e1;
  --color-secondary-400: #94a3b8;
  --color-secondary-500: #F0AB20;
  --color-secondary-600: #D69A1C;
  --color-secondary-700: #334155;
  --color-secondary-800: #1e293b;
  --color-secondary-900: #0f172a;
  --color-secondary-950: #020617;
}`}
                  </Code>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    4. Start Using Components
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Import and use Bob UI components in your React application:
                  </p>
                  <Code language="typescript">
                    {`import { Button, Card } from "@bob/ui";

function App() {
  return (
    <Card>
      <Button variant="primary">
        Hello World!
      </Button>
    </Card>
  );
}`}
                  </Code>
                </div>
              </div>
            )}

            {activeTab === 'local' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    1. Prerequisites
                  </h3>
                  <p className="text-gray-600 mb-3">
                    This project uses Turbo Repo with pnpm as the package
                    manager. Make sure you have the following installed:
                  </p>
                  <Code language="bash">
                    {`node >= 18
pnpm >= 8
@turbo/cli`}
                  </Code>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    2. Clone Repository
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Clone the Bob UI repository to your local machine:
                  </p>
                  <Code language="bash">
                    {`git clone https://github.com/your-org/bob-ui.git
cd bob-ui`}
                  </Code>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    3. Install Dependencies
                  </h3>
                  <p className="text-gray-600 mb-3">
                    From the root of the bob repo, install all dependencies:
                  </p>
                  <Code language="bash">pnpm install</Code>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    4. Install Tailwind CSS v4
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Install Tailwind CSS CLI in your app directory (e.g.,{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      apps/docs
                    </code>
                    ):
                  </p>
                  <Code language="bash">
                    {`# Navigate to your app directory
cd apps/docs

# Install Tailwind CSS CLI
pnpm add -D @tailwindcss/cli`}
                  </Code>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    5. Start Development
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Run the development server from the root directory:
                  </p>
                  <Code language="bash">
                    {`# Start all packages in development mode
pnpm dev

# Or start specific app
pnpm dev --filter=docs`}
                  </Code>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    6. Build Components
                  </h3>
                  <p className="text-gray-600 mb-3">
                    To build the UI library and other packages:
                  </p>
                  <Code language="bash">
                    {`# Build all packages
pnpm build

# Build only UI library
pnpm build --filter=@bob/ui`}
                  </Code>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Lightning Fast
            </h3>
            <p className="text-gray-600">
              Built with performance in mind using modern React patterns and
              optimized bundle size.
            </p>
          </div>

          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Beautifully Designed
            </h3>
            <p className="text-gray-600">
              Crafted with attention to detail using Tailwind CSS v4 for
              consistent, modern aesthetics.
            </p>
          </div>

          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Developer Friendly
            </h3>
            <p className="text-gray-600">
              TypeScript support, excellent DX, and comprehensive documentation
              for smooth development.
            </p>
          </div>
        </div>

        {/* Quick Start */}
        <div className="p-8 text-center bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to build something amazing?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Start using Bob UI components in your project right away. Import any
            component and customize it to fit your needs.
          </p>
          <div className="mb-6">
            <Code language="typescript">
              {`import { Button, Card } from '@bob/ui';

function App() {
  return (
    <Card>
      <Button variant="primary">
        Hello World!
      </Button>
    </Card>
  );
}`}
            </Code>
          </div>
          <Button intent="secondary" size="lg">
            Explore Components
          </Button>
        </div>
      </div>
    </div>
  );
}
