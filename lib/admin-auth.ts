import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "bkm_admin";
const SECRET = process.env.ADMIN_SECRET || "bkmimari-dev-secret-change-me";
const PASSWORD = process.env.ADMIN_PASSWORD || "";

function sign(payload: string): string {
  return crypto.createHmac("sha256", SECRET).update(payload).digest("hex");
}

export function createAdminToken(): string {
  const payload = JSON.stringify({ exp: Date.now() + 7 * 24 * 3600 * 1000 });
  const sig = sign(payload);
  return Buffer.from(JSON.stringify({ payload, sig })).toString("base64url");
}

export function verifyAdminToken(token: string): boolean {
  try {
    const { payload, sig } = JSON.parse(Buffer.from(token, "base64url").toString("utf8"));
    if (sign(payload) !== sig) return false;
    const { exp } = JSON.parse(payload);
    return Date.now() < exp;
  } catch {
    return false;
  }
}

export function verifyPassword(password: string): boolean {
  return PASSWORD !== "" && password === PASSWORD;
}

export async function isAdmin(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  return token ? verifyAdminToken(token) : false;
}

export async function setAdminCookie(token: string): Promise<void> {
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 7 * 24 * 3600,
  });
}

export async function clearAdminCookie(): Promise<void> {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}
