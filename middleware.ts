import createMiddleware from 'next-intl/middleware'
import { locales, localePrefix } from './navigation'
import { NextRequest, NextResponse } from 'next/server'

const nextIntlMiddleware = createMiddleware({
  defaultLocale: 'tr',
  locales,
  localePrefix,
})

export default async function combinedMiddleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', request.nextUrl.pathname)

  const nextIntlResult = await nextIntlMiddleware(request)
  if (nextIntlResult) {
    nextIntlResult.headers.set('x-pathname', request.nextUrl.pathname)
    return nextIntlResult
  }
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|studio|.*\\..*).*)'],
}
