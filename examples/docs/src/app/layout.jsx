/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import ClientOnly from './_components/ClientOnly'

export const metadata = {
  metadataBase: new URL('https://cloudnative.site'),
  title: {
    template: '%s - Cloud Native'
  },
  description: 'Cloud Native: the Next.js site builder',
  applicationName: 'Cloud Native',
  generator: 'Next.js',
  appleWebApp: {
    title: 'Cloud Native'
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://cloudnative.site'
  }
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>Cloud Native</b>{' '}
          <span style={{ opacity: '60%' }}>Internal Documentation</span>
        </div>
      }
      // Next.js discord server
      chatLink="https://discord.gg/hEM84NMkRv"
      // GitHub repository
      projectLink="https://github.com/Cloud-Native-RS/cn-documentation"
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body suppressHydrationWarning>
        <ClientOnly>
          <Layout
            banner={<Banner storageKey="Cloud Native 2">Cloud Native 2 Alpha</Banner>}
            navbar={navbar}
            footer={<Footer>MIT {new Date().getFullYear()} © Cloud Native.</Footer>}
            editLink="Edit this page on GitHub"
            docsRepositoryBase="https://github.com/shuding/nextra/blob/main/examples/docs"
            sidebar={{ defaultMenuCollapseLevel: 1 }}
            pageMap={pageMap}
          >
            {children}
          </Layout>
        </ClientOnly>
      </body>
    </html>
  )
}
