import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextRequest, NextResponse } from 'next/server'

const locales = ['en-US', 'es']

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  const headers = {
    'accept-language':
      request.cookies.get('lang')?.value ||
      request.headers.get('accept-language') ||
      'en-US,en;q=0.5'
  }
  const languages = new Negotiator({ headers }).languages()
  const defaultLocale = 'en-US'

  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameLocale) {
    const response = NextResponse.next()
    response.cookies.set({
      name: 'lang',
      value: pathnameLocale,
      path: '/'
    })
    return response
  }

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next/static|_next/image|favicon.ico|images|fonts).*)'
    // Optional: only run on root (/) URL
    // '/'
  ]
}
