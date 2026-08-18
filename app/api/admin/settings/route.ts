import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { getSiteContent, saveSiteContentToStore, type SiteContent } from "@/lib/site-store";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  const site = await getSiteContent();
  return NextResponse.json({ site });
}

export async function PUT(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek" }, { status: 400 });
  }

  const current = await getSiteContent();

  const updated: SiteContent = {
    ...current,
    logo: str(body.logo, current.logo),
    phone: str(body.phone, current.phone),
    phoneDisplay: str(body.phoneDisplay, current.phoneDisplay),
    email: str(body.email, current.email),
    address: str(body.address, current.address),
    workingHours: str(body.workingHours, current.workingHours),
    badge: str(body.badge, current.badge),
    heroBg: str(body.heroBg, current.heroBg),
    references: current.references, // referanslar ayrı endpoint'ten yönetilir
  };

  await saveSiteContentToStore(updated);
  return NextResponse.json({ ok: true, site: updated });
}

function str(v: any, fallback: string): string {
  return typeof v === "string" && v.trim() ? v.trim() : fallback;
}
