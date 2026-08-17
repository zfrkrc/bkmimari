"use client";

import { useRouter } from "next/navigation";
import { adminStyles } from "@/lib/admin-styles";

export default function DeleteProjectButton({ slug, title }: { slug: string; title: string }) {
  const router = useRouter();

  async function del() {
    if (!confirm(`"${title}" projesi silinecek. Emin misiniz?`)) return;
    const r = await fetch(`/api/admin/projects/${encodeURIComponent(slug)}`, { method: "DELETE" });
    if (r.ok) router.refresh();
    else alert("Silme başarısız.");
  }

  return (
    <button style={adminStyles.btnDanger} onClick={del}>
      Sil
    </button>
  );
}
