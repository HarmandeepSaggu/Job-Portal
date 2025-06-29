// middleware.js 
// middleware.js 
import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token'); // Match your actual cookie name

  const isProtected = request.nextUrl.pathname.startsWith('/dashboard');

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}
