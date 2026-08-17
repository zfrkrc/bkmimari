import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import minioClient from "@/lib/minio";

export const dynamic = "force-dynamic";

const BUCKET = process.env.MINIO_BUCKET || "bkmimari";
const PUBLIC_URL = (process.env.MINIO_PUBLIC_URL || "https://minio.bkmimari.com").replace(/\/$/, "");

function safeName(name: string): string {
  return name
    .toLowerCase()
    .replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i")
    .replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u")
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function POST(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Dosya bekleniyor" }, { status: 400 });
  }

  const file = form.get("file") as File | null;
  if (!file) return NextResponse.json({ error: "Dosya bulunamadı" }, { status: 400 });

  const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
  const allowed = ["jpg", "jpeg", "png", "webp", "gif"];
  if (!allowed.includes(ext)) {
    return NextResponse.json({ error: "Sadece jpg, png, webp, gif yüklenebilir" }, { status: 400 });
  }

  const buf = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}-${safeName(file.name.replace(/\.[^.]+$/, "")).slice(0, 60)}.${ext}`;

  await minioClient.putObject(BUCKET, filename, buf, buf.length, {
    "Content-Type": file.type || "application/octet-stream",
  });

  return NextResponse.json({ ok: true, url: `${PUBLIC_URL}/${BUCKET}/${filename}` });
}
