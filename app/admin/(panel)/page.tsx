import { getProjects } from "@/lib/projects-store";
import { adminStyles, colors } from "@/lib/admin-styles";

export default async function AdminDashboard() {
  const projects = await getProjects();
  const imageCount = projects.reduce((s, p) => s + p.images.length, 0);
  const categories = [...new Set(projects.map((p) => p.category).filter(Boolean))];

  return (
    <>
      <h1 style={adminStyles.h1}>Panel</h1>
      <p style={adminStyles.sub}>Site içeriği özeti.</p>

      <div style={adminStyles.cardGrid}>
        <div style={adminStyles.card}>
          <div style={adminStyles.cardNum}>{projects.length}</div>
          <div style={adminStyles.cardLabel}>Proje</div>
        </div>
        <div style={adminStyles.card}>
          <div style={adminStyles.cardNum}>{imageCount}</div>
          <div style={adminStyles.cardLabel}>Görsel</div>
        </div>
        <div style={adminStyles.card}>
          <div style={adminStyles.cardNum}>{categories.length}</div>
          <div style={adminStyles.cardLabel}>Kategori</div>
        </div>
        <div style={adminStyles.card}>
          <div style={adminStyles.cardNum}>{projects.filter((p) => p.description).length}</div>
          <div style={adminStyles.cardLabel}>Açıklamalı Proje</div>
        </div>
      </div>

      <div style={adminStyles.sectionTitle}>Kategoriler</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {categories.length === 0 ? (
          <span style={{ color: colors.mid, fontSize: 14 }}>Kategori yok.</span>
        ) : (
          categories.map((c) => (
            <span key={c} style={adminStyles.badge("rgba(234,179,8,.15)", colors.navy)}>{c}</span>
          ))
        )}
      </div>
    </>
  );
}
