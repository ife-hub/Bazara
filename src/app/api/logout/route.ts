// src/app/api/logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  // Remove the token cookie
  const res = NextResponse.json({ message: "Logged out" });
  res.headers.append(
    "Set-Cookie",
    "token=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Strict"
  );
  return res;
}