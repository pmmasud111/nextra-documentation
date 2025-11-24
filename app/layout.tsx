import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "Walsh Integrated Documentation",
  description: "Walsh Integrated Documentation",
};

const banner = (
  <Banner storageKey="some-key">Walsh Integrated 1.0.0 Relesd</Banner>
);
const navbar = (
  <Navbar
    logo={<b>Walsh</b>}
    logoLink="/home"
    projectLink="https://github.com/pmmasud111/nextra-documentation/"
    chatLink="https://discord.com/login"
  />
);

const search = <Search placeholder="Search the documents..." />;

const footer = <Footer>MIT {new Date().getFullYear()} © Walsh.</Footer>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/pmmasud111/nextra-documentation/"
          footer={footer}
          search={search}
          feedback={{ content: null }}
          editLink={null}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
