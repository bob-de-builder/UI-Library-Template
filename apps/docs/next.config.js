/** @type {import('next').NextConfig} */
import nextra from 'nextra';

const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      // Path to your `mdx-components` file with extension
      'next-mdx-import-source-file': './mdx-components.tsx',
    },
  },
};

const withNextra = nextra({
  // theme: "nextra-theme-docs",
  // themeConfig: "./theme.config.tsx",
  latex: true,
  search: {
    codeblocks: true,
  },
});

export default withNextra(nextConfig);
