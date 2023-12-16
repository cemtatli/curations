'use client'

import { NextIntlClientProvider } from 'next-intl'

type NextIntlProps = {
  children: React.ReactNode
  locale: string
}

const CustomNextIntlClientProvider = ({ children, locale, ...props }: NextIntlProps) => {
  const now = new Date()
  const timeZone = typeof Intl === 'object' ? Intl.DateTimeFormat().resolvedOptions().timeZone : 'Europe/Istanbul'

  return (
    <NextIntlClientProvider
      defaultTranslationValues={{
        i: text => <i>{text}</i>,
      }}
      locale={locale}
      timeZone={timeZone}
      now={now}
      {...props}>
      {children}
    </NextIntlClientProvider>
  )
}

export default CustomNextIntlClientProvider
