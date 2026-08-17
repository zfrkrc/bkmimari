import type { Project } from "./projects";

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i")
    .replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function normalizeProject(body: any): Project {
  return {
    slug: (body.slug || "").toString().trim(),
    title: (body.title || "").toString().trim(),
    category: body.category ? body.category.toString().trim() : null,
    location: body.location ? body.location.toString().trim() : null,
    year: body.year ? body.year.toString().trim() : null,
    area: body.area ? body.area.toString().trim() : null,
    scope: body.scope ? body.scope.toString().trim() : null,
    client: body.client ? body.client.toString().trim() : null,
    description: body.description ? body.description.toString().trim() : null,
    images: Array.isArray(body.images)
      ? body.images
          .filter((img: any) => img && img.src)
          .map((img: any) => ({ src: img.src.toString().trim(), alt: (img.alt || "").toString().trim() }))
      : [],
  };
}
