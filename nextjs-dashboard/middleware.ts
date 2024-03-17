import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

export function middleware(request: NextRequest) {
  // 先頭が /hoge の場合
  if (request.nextUrl.pathname.startsWith('/hoge')) {
    return Response.json(
      { success: false, message: 'authentication failed' },
      { status: 401 },
    );
  }
}
