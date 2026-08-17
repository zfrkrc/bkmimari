import minioClient from "./minio";
import { defaultProjects, type Project } from "./projects";

const BUCKET = process.env.MINIO_BUCKET || "bkmimari";
const KEY = "projects.json";

/** MinIO'dan proje verisini okur. Yoksa null döner. */
export async function getProjectsFromStore(): Promise<Project[] | null> {
  try {
    const stream = await minioClient.getObject(BUCKET, KEY);
    const chunks: Buffer[] = [];
    for await (const chunk of stream) chunks.push(chunk as Buffer);
    const parsed = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!Array.isArray(parsed)) return null;
    return parsed as Project[];
  } catch {
    return null;
  }
}

/** Projeleri MinIO'ya JSON olarak yazar. */
export async function saveProjectsToStore(projects: Project[]): Promise<void> {
  await minioClient.putObject(BUCKET, KEY, JSON.stringify(projects, null, 2), {
    "Content-Type": "application/json",
  });
}

/** Canlı proje listesi — MinIO'dan okur, yoksa varsayılan (seed) listeye düşer. */
export async function getProjects(): Promise<Project[]> {
  const stored = await getProjectsFromStore();
  return stored ?? defaultProjects;
}

/** Tek projeyi slug ile getirir. */
export async function getProject(slug: string): Promise<Project | undefined> {
  const all = await getProjects();
  return all.find((p) => p.slug === slug);
}

/** Mevcut varsayılan veriyi MinIO'ya tohum olarak yazar (ilk kurulum). */
export async function seedProjects(): Promise<void> {
  await saveProjectsToStore(defaultProjects);
}
