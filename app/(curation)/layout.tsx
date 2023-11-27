import './globals.css'
import { Inter as FontSans } from 'next/font/google'
import { Metadata } from 'next'

import Header from '@/components/header'

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={fontSans.className}>
        <div className="bg-square min-h-screen">
          <Header />
          <main>{children}</main>
          <div className="absolute top-0 -z-10 h-full w-full bg-white backdrop-blur-3xl">
            <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(255,78,24,0.35)] opacity-60 blur-[80px]"></div>
          </div>
        </div>
      </body>
    </html>
  )
}
export const metadata: Metadata = {
  title: 'Curations',
  description: 'Developers, designers, and other creatives share their favorite tools and resources.',
}
