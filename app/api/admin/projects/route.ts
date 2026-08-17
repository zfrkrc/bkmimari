import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { getProjects, saveProjectsToStore } from "@/lib/projects-store";
import { normalizeProject, slugify } from "@/lib/project-utils";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  const projects = await getProjects();
  return NextResponse.json({ projects });
}

export async function POST(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek" }, { status: 400 });
  }

  const project = normalizeProject(body);
  if (!project.title) return NextResponse.json({ error: "Başlık zorunludur" }, { status: 400 });
  if (!project.slug) project.slug = slugify(project.title);

  const all = await getProjects();
  if (all.some((p) => p.slug === project.slug)) {
    return NextResponse.json({ error: "Bu slug zaten kullanılıyor" }, { status: 409 });
  }

  all.push(project);
  await saveProjectsToStore(all);
  return NextResponse.json({ ok: true, project });
}
