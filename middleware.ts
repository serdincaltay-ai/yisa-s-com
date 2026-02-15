import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Panel koruması: /panel* yollarını /giris'e yönlendir
  if (request.nextUrl.pathname.startsWith('/panel')) {
    return NextResponse.redirect(new URL('/giris', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/panel', '/panel/:path*'],
}
