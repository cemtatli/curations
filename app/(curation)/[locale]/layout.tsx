import { Inter as FontSans } from 'next/font/google'
import { Metadata } from 'next'

import { notFound } from 'next/navigation'
import Header from '@/components/header'
import { Toaster } from 'react-hot-toast'
import CustomNextIntlClientProvider from '@/components/next-intl-provider'
import './globals.css'
import GoogleReCaptchaWrapper from '@/providers/recaptcha-provider'
import { useMessages } from 'next-intl'

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
  const messages = useMessages()
  if (!locales.includes(locale as any)) notFound()

  return (
    <html lang={locale}>
      <head />
      <body className={fontSans.className}>
        <CustomNextIntlClientProvider locale={locale} messages={messages}>
          <GoogleReCaptchaWrapper>
            <div className="bg-square min-h-screen">
              <Header />
              <main>{children}</main>
            </div>
            <Toaster position="top-center" reverseOrder={false} />
          </GoogleReCaptchaWrapper>
        </CustomNextIntlClientProvider>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  )
}
export const metadata: Metadata = {
  title: 'Curations',
  description: 'Developers, designers, and other creatives share their favorite tools and resources.',
}
