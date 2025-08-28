import { getEnhancedPageMap } from '@components/get-page-map'
import { NextraLogo, VercelLogo } from '@components/icons'
import cn from 'clsx'
import type { Metadata } from 'next'
import NextImage from 'next/image'
import { Footer, Layout, Link, Navbar } from 'nextra-theme-docs'
import { Anchor, Banner, Head } from 'nextra/components'
import type { FC, ReactNode } from 'react'
import xyflow from './showcase/_logos/xyflow.png'
import './globals.css'

export const metadata: Metadata = {
  description: 'Cloud Native internal documentation - comprehensive guides, best practices, and resources for building cloud-native solutions.',
  metadataBase: new URL('https://cloud-native.rs'),
  keywords: [
    'Cloud Native',
    'Kubernetes',
    'Microservices',
    'DevOps',
    'Documentation',
    'Best Practices'
  ],
  generator: 'Next.js',
  applicationName: 'Cloud Native Documentation',
  appleWebApp: {
    title: 'Cloud Native Docs'
  },
  title: {
    default: 'Cloud Native Documentation',
    template: '%s | Cloud Native Docs'
  },
  openGraph: {
    url: './',
    siteName: 'Cloud Native Documentation',
    locale: 'en_US',
    type: 'website'
  },
  other: {
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://cloud-native.rs'
  },
  alternates: {
    canonical: './'
  }
}

const banner = (
  <Banner dismissible={false}>
    🚀 Welcome to Cloud Native Documentation
  </Banner>
)
const navbar = (
  <Navbar
    logo={
      <span
        style={{ fontWeight: 'bold', fontSize: 20, letterSpacing: 1 }}
        className={cn(
          'hover:transition-all hover:duration-1000 motion-reduce:hover:transition-none',
          '[mask-image:linear-gradient(60deg,#000_25%,rgba(0,0,0,.2)_50%,#000_75%)] [mask-position:0] [mask-size:400%]',
          'hover:[mask-position:100%]'
        )}
        suppressHydrationWarning={true}
      >
        Cloud Native
      </span>
    }
    projectLink="https://github.com/Cloud-Native-RS/cn-documentation"
  />
)
const footer = (
  <Footer className="flex-col items-center md:items-start">
    <a
      className="x:focus-visible:nextra-focus flex items-center gap-1"
      target="_blank"
      rel="noreferrer"
      title="Cloud Native Documentation"
      href="https://cloud-native.rs"
    >
      Powered by Cloud Native Team
    </a>
    <p className="mt-6 text-xs">
      © {new Date().getFullYear()} Cloud Native Documentation.
    </p>
  </Footer>
)

const RootLayout: FC<{
  children: ReactNode
}> = async ({ children }) => {
  const pageMap = await getEnhancedPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body suppressHydrationWarning>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/Cloud-Native-RS/cn-documentation/tree/main/docs"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
          toc={{
            extraContent: (
              <>
                <b className="mt-2 text-xs">Sponsored by:</b>
                <Anchor href="https://xyflow.com?utm_source=nextra.site&utm_campaign=nextra&utm_content=sidebarLink">
                  <NextImage
                    src={xyflow}
                    alt="Wire your ideas with xyflow!"
                    className="nextra-border rounded-sm border"
                  />
                </Anchor>
              </>
            )
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

export default RootLayout
