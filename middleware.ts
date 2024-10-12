import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Allow access to the life-story page without authentication
  if (path === '/life-story') {
    return NextResponse.next()
  }

  // For other routes, you can implement your authentication logic here
  // For now, we'll allow access to all routes
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
