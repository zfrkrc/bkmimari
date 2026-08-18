import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { getSiteContent, saveSiteContentToStore, type Reference } from "@/lib/site-store";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  const site = await getSiteContent();
  return NextResponse.json({ references: site.references });
}

export async function POST(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek" }, { status: 400 });
  }

  const ref = normalizeRef(body);
  if (!ref.name || !ref.img) return NextResponse.json({ error: "Ad ve görsel zorunludur" }, { status: 400 });

  const site = await getSiteContent();
  site.references.push(ref);
  await saveSiteContentToStore(site);
  return NextResponse.json({ ok: true, references: site.references });
}

export function normalizeRef(body: any): Reference {
  return {
    name: (body.name || "").toString().trim(),
    url: (body.url || "").toString().trim(),
    img: (body.img || "").toString().trim(),
  };
}
