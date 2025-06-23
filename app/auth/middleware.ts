// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "yoursecretkey";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  let isAuthenticated = false;

  if (token) {
    try {
      jwt.verify(token, JWT_SECRET);
      isAuthenticated = true;
    } catch (err) {
      isAuthenticated = false;
    }
  }

  const pathname = request.nextUrl.pathname;

  console.log("Token:", token);
console.log("IsAuthenticated:", isAuthenticated);
console.log("Pathname:", pathname);


  // If user is authenticated and tries to access /signin or /signup
  if (isAuthenticated && (pathname === "/auth/signin" || pathname === "/auth/signup")) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/auth/signin", "/auth/signup"], // only run middleware on these paths
};