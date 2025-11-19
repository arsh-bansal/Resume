import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LoadingProvider } from '@/components/LoadingProvider'
import { Navigation } from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://arshbansal.dev'),
  title: 'Arsh Bansal | Portfolio',
  description: 'Modern portfolio website showcasing my skills, experience, and projects',
  openGraph: {
    title: 'Arsh Bansal | Portfolio',
    description: 'Modern portfolio website showcasing my skills, experience, and projects',
    type: 'website',
    url: 'https://arshbansal.dev',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Arsh Bansal - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arsh Bansal | Portfolio',
    description: 'Modern portfolio website showcasing my skills, experience, and projects',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LoadingProvider>
            <Navigation />
            {children}
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

