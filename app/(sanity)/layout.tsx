import { Inter as FontSans } from 'next/font/google'
import { Metadata } from 'next'

export const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
  title: 'Curation - Tools & Resources',
  description: 'Developers, designers, and other creatives share their favorite tools and resources.',
}
