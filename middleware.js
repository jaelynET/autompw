import { NextResponse } from "next/server";

export function middleware(request) {
  // Your middleware logic goes here (e.g., auth checks)
  return NextResponse.next();
}

// import { auth } from "./app/_lib/auth";
// export const middleware = auth;

export const config = {
  // matcher: ["/account/:path*"],
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
