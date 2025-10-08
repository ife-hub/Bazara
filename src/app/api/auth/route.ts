// src/app/api/auth/route.ts
import { NextResponse } from "next/server";

type Body = { email?: string; password?: string };

function makeCookie(name: string, value: string, maxAge = 60 * 60 * 24 * 7) {
  // Secure; HttpOnly; SameSite=Strict; Path=/
  return `${name}=${value}; Max-Age=${maxAge}; Path=/; HttpOnly; Secure; SameSite=Strict;`;
}

export async function POST(req: Request) {
  try {
    const body: Body = await req.json();

    // simulated delay
    await new Promise((res) => setTimeout(res, 500));

    const { email, password } = body ?? {};

    if (email === "admin@example.com" && password === "Password1!") {
      // mock JWT
      const token = "mock-jwt-abc123";

      const res = NextResponse.json({ token }, { status: 200 });
      // set cookie
      res.headers.append("Set-Cookie", makeCookie("token", token, 60 * 60 * 24 * 7));
      return res;
    }

    return NextResponse.json({ message: "Invalid credentials." }, { status: 401 });
  } catch (err) {
    console.error("Auth route error:", err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}