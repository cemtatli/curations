import './globals.css'
import { Inter as FontSans } from 'next/font/google'
import { Metadata } from 'next'

import Header from '@/components/header'
import { Toaster } from 'react-hot-toast'

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
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  )
}
export const metadata: Metadata = {
  title: 'Curations',
  description: 'Developers, designers, and other creatives share their favorite tools and resources.',
}
