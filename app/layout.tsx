import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LoadingProvider } from '@/components/LoadingProvider'
import { Navigation } from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arsh Bansal | Portfolio',
  description: 'Modern portfolio website showcasing my skills, experience, and projects',
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

