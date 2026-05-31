import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware to redirect old ?page=N pagination URLs to new /page/N static format.
 * This handles 301 redirects for:
 *   /codes?page=1 → /codes
 *   /codes?page=2 → /codes/page/2
 *   /guides?page=N → /guides/page/N
 *   /tier-list?page=N → /tier-list/page/N
 */
export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const pageParam = searchParams.get('page');

  // Only handle ?page= for category pages
  const categoryPaths = ['/codes', '/guides', '/tier-list'];
  const isCategoryPage = categoryPaths.some(
    (cat) => pathname === cat || pathname.startsWith(cat + '/')
  );

  if (isCategoryPage && pageParam) {
    const pageNum = parseInt(pageParam, 10);
    if (!isNaN(pageNum) && pageNum >= 1) {
      // Remove ?page= from URL
      const newUrl = request.nextUrl.clone();
      newUrl.searchParams.delete('page');

      if (pageNum === 1) {
        // /codes?page=1 → /codes
        newUrl.pathname = pathname.replace(/\/page\/\d+$/, '');
        if (newUrl.pathname !== pathname) {
          return NextResponse.redirect(newUrl, 301);
        }
        // Already on base path, just strip the query param
        return NextResponse.redirect(newUrl, 301);
      } else {
        // /codes?page=2 → /codes/page/2
        // /codes/page/2?page=2 → /codes/page/2 (strip query param)
        const basePath = pathname.replace(/\/page\/\d+$/, '');
        newUrl.pathname = `${basePath}/page/${pageNum}`;
        return NextResponse.redirect(newUrl, 301);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/codes/:path*', '/guides/:path*', '/tier-list/:path*'],
};
