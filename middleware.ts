import createMiddleware from 'next-intl/middleware'
import { locales, localePrefix } from './navigation'
import { NextRequest } from 'next/server'

const nextIntlMiddleware = createMiddleware({
  defaultLocale: 'tr',
  locales,
  localePrefix,
})

export default async function combinedMiddleware(request: NextRequest) {
  const nextIntlResult = await nextIntlMiddleware(request)
  if (nextIntlResult) {
    return nextIntlResult
  }
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|studio|.*\\..*).*)'],
}
