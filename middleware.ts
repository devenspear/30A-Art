import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow artwork files to pass through without authentication
  if (pathname.startsWith('/artwork/')) {
    return NextResponse.next();
  }

  // Protected routes that require authentication
  const protectedPaths = ['/prototype'];
  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path));

  if (isProtectedPath) {
    // Check for authentication cookie
    const authCookie = request.cookies.get('30a-auth');

    if (!authCookie || authCookie.value !== 'authenticated') {
      // Redirect to gate page if not authenticated
      const url = request.nextUrl.clone();
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
