import { NextResponse } from "next/server";
import { verifyPassword, createAdminToken, setAdminCookie } from "@/lib/admin-auth";

export async function POST(req: Request) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek" }, { status: 400 });
  }

  const password = (body.password || "").toString();
  if (!verifyPassword(password)) {
    return NextResponse.json({ error: "Şifre hatalı" }, { status: 401 });
  }

  const token = createAdminToken();
  await setAdminCookie(token);
  return NextResponse.json({ ok: true });
}
