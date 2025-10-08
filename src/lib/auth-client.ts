// src/lib/auth-client.ts
export async function login(email: string, password: string) {
  const res = await fetch("/api/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.message ?? "Login failed");
  }

  return data as { token: string };
}

export async function logout() {
  const res = await fetch("/api/logout", { method: "POST" });
  if (!res.ok) throw new Error("Logout failed");
}