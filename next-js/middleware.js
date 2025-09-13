import { NextResponse } from "next/server";

export function middleware(request) {
  // যদি ইতিমধ্যেই SignUp এ থাকে তাহলে কিছু করব না
  if (request.nextUrl.pathname.startsWith("/SignUp")) {
    return NextResponse.next();
  }

  // class রাউটে গেলে SignUp এ পাঠাবে
  return NextResponse.redirect(new URL("/SignUp", request.url));
}

export const config = {
  matcher: ["/class/:path*"], // কোলন ছাড়া
};
