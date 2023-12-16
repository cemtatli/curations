import { Inter as FontSans } from 'next/font/google'
import { Metadata } from 'next'

import { notFound } from 'next/navigation'
import Header from '@/components/header'
import { Toaster } from 'react-hot-toast'
import CustomNextIntlClientProvider from '@/components/next-intl-provider'
import './globals.css'
import GoogleReCaptchaWrapper from '@/providers/recaptcha-provider'

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
})

const locales = ['en', 'tr']

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale as any)) notFound()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body className={fontSans.className}>
        <GoogleReCaptchaWrapper>
          <CustomNextIntlClientProvider locale={locale}>
            <div className="bg-square min-h-screen">
              <Header />
              <main>{children}</main>
            </div>
            <Toaster position="top-center" reverseOrder={false} />
          </CustomNextIntlClientProvider>
        </GoogleReCaptchaWrapper>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  )
}
export const metadata: Metadata = {
  title: 'Curations',
  description: 'Developers, designers, and other creatives share their favorite tools and resources.',
}
