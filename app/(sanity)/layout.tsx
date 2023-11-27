import { Inter as FontSans } from 'next/font/google'
import { Metadata } from 'next'
import { RootLayoutProps } from '@/types'

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={fontSans.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
export const metadata: Metadata = {
  title: 'Curations for Epigra',
  description: 'Developers, designers, and other creatives share their favorite tools and resources.',
}
