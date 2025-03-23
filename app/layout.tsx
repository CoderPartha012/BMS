import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "react-hot-toast"
import Sidebar from '@/components/sidebar'
import { GlobalSearch } from '@/components/global-search'
import { QuickActions } from '@/components/quick-actions'
import { ThemeToggle } from '@/components/theme-toggle'

// Configure font with display: swap to prevent FOIT
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: 'Business Management System',
  description: 'Comprehensive solution for business operations management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 overflow-y-auto bg-background">
              <div className="flex items-center justify-between p-4 border-b">
                <GlobalSearch />
                <div className="flex items-center space-x-2">
                  <QuickActions />
                  <ThemeToggle />
                </div>
              </div>
              {children}
            </main>
          </div>
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}