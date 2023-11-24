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
          <div className="bg-square min-h-screen dark:bg-none">
            <Header />
            ff4e00
            <main>{children}</main>
            <div className="absolute top-0 -z-10 h-full w-full bg-white backdrop-blur-3xl">
              <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(255,78,24,0.35)] opacity-60 blur-[80px]"></div>
            </div>
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
