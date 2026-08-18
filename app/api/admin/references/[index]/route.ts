import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { getSiteContent, saveSiteContentToStore } from "@/lib/site-store";
import { normalizeRef } from "../route";

export const dynamic = "force-dynamic";

export async function PUT(req: Request, { params }: { params: Promise<{ index: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  const { index } = await params;
  const i = parseInt(index, 10);

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek" }, { status: 400 });
  }

  const site = await getSiteContent();
  if (i < 0 || i >= site.references.length) {
    return NextResponse.json({ error: "Referans bulunamadı" }, { status: 404 });
  }

  const ref = normalizeRef(body);
  if (!ref.name || !ref.img) return NextResponse.json({ error: "Ad ve görsel zorunludur" }, { status: 400 });

  site.references[i] = ref;
  await saveSiteContentToStore(site);
  return NextResponse.json({ ok: true, references: site.references });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ index: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  const { index } = await params;
  const i = parseInt(index, 10);

  const site = await getSiteContent();
  if (i < 0 || i >= site.references.length) {
    return NextResponse.json({ error: "Referans bulunamadı" }, { status: 404 });
  }

  site.references.splice(i, 1);
  await saveSiteContentToStore(site);
  return NextResponse.json({ ok: true, references: site.references });
}
