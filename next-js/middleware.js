import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.redirect(new URL("/SignUp", request.url));
}

export const config = {
  matcher: ["/userinfo/:path*"], // /userinfo বা এর ভেতরের সব path redirect হবে
};
