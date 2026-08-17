import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { getProjects, saveProjectsToStore } from "@/lib/projects-store";
import { normalizeProject } from "@/lib/project-utils";

export const dynamic = "force-dynamic";

export async function PUT(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  const { slug } = await params;

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek" }, { status: 400 });
  }

  const all = await getProjects();
  const idx = all.findIndex((p) => p.slug === slug);
  if (idx === -1) return NextResponse.json({ error: "Proje bulunamadı" }, { status: 404 });

  const updated = normalizeProject(body);
  updated.slug = slug; // slug değiştirilemez (URL kararlılığı)
  if (!updated.title) return NextResponse.json({ error: "Başlık zorunludur" }, { status: 400 });

  all[idx] = updated;
  await saveProjectsToStore(all);
  return NextResponse.json({ ok: true, project: updated });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  const { slug } = await params;

  const all = await getProjects();
  const filtered = all.filter((p) => p.slug !== slug);
  if (filtered.length === all.length) {
    return NextResponse.json({ error: "Proje bulunamadı" }, { status: 404 });
  }

  await saveProjectsToStore(filtered);
  return NextResponse.json({ ok: true });
}
