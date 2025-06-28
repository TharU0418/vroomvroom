// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_ROUTES = ['/auth/signin', '/auth/signup'];
const PROTECTED_ROUTES = ['/profile'];

export function middleware(request: NextRequest) {
  console.log('🔍 Middleware is running on:', request.nextUrl.pathname);

  return NextResponse.next();
}
