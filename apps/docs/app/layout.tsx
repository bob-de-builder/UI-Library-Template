import '@bobs-ui/ui/dist/output.css';
import 'nextra-theme-docs/style.css';
import './globals.css';

import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';

export const metadata = {
  title: 'Bob-UI',
};

const navbar = (
  <Navbar
    logo={<b>Bob UI</b>}
    // ... Your additional navbar options
  />
);
const footer = <Footer>MIT {new Date().getFullYear()} © BobUI.</Footer>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      dir="ltr"
      // Required to be set
      suppressHydrationWarning
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      lang="en"
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          darkMode={false}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          navbar={navbar}
          nextThemes={{
            defaultTheme: 'light',
            forcedTheme: 'light',
          }}
          pageMap={await getPageMap()}
          sidebar={{
            autoCollapse: false,
            defaultOpen: true,
            toggleButton: true,
          }}
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
