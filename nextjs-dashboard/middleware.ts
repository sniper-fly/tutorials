import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/hoge')) {
    const url = new URL('/dashboard', request.url)
    console.log(url.pathname)
    console.log(request.url)
    // return NextResponse.rewrite('http://localhost:3000/dashboard/')
    return NextResponse.rewrite(url)
  }
}
