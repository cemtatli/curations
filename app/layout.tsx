import './globals.css'
import { Inter as FontSans } from 'next/font/google'
import { Metadata } from 'next'
import { RootLayoutProps } from '@/types'
import Header from '@/components/header'
import { ThemeProvider } from '@/providers/theme-provider'

export const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={fontSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="bg-grid-slate-200/50 min-h-screen dark:bg-none">
            <Header />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
export const metadata: Metadata = {
  title: 'Curations for Epigra',
  description: 'Developers, designers, and other creatives share their favorite tools and resources.',
}
