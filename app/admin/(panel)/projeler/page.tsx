import Link from "next/link";
import { getProjects } from "@/lib/projects-store";
import { adminStyles, colors } from "@/lib/admin-styles";
import DeleteProjectButton from "@/components/admin/DeleteProjectButton";

export const dynamic = "force-dynamic";

export default async function AdminProjectsList() {
  const projects = await getProjects();

  return (
    <>
      <div style={adminStyles.mainHeader}>
        <div>
          <h1 style={adminStyles.h1}>Projeler</h1>
          <p style={{ ...adminStyles.sub, marginBottom: 0 }}>{projects.length} proje</p>
        </div>
        <Link href="/admin/projeler/yeni" style={{ ...adminStyles.btn, textDecoration: "none", display: "inline-block" }}>
          + Yeni Proje
        </Link>
      </div>

      <div style={{ overflowX: "auto", marginTop: 20 }}>
        <table style={adminStyles.table}>
          <thead>
            <tr>
              <th style={adminStyles.th}>Proje</th>
              <th style={adminStyles.th}>Kategori</th>
              <th style={adminStyles.th}>Konum</th>
              <th style={adminStyles.th}>Görsel</th>
              <th style={adminStyles.th}></th>
            </tr>
          </thead>
          <tbody>
            {projects.length === 0 && (
              <tr><td style={adminStyles.td} colSpan={5}>Henüz proje yok.</td></tr>
            )}
            {projects.map((p) => (
              <tr key={p.slug}>
                <td style={adminStyles.td}>
                  <div style={{ fontWeight: 600 }}>{p.title}</div>
                  <div style={{ color: colors.soft, fontSize: 12 }}>/{p.slug}</div>
                </td>
                <td style={adminStyles.td}>{p.category || "—"}</td>
                <td style={adminStyles.td}>{p.location || "—"}</td>
                <td style={adminStyles.td}>{p.images.length}</td>
                <td style={{ ...adminStyles.td, textAlign: "right", whiteSpace: "nowrap" }}>
                  <Link href={`/admin/projeler/${p.slug}`} style={{ ...adminStyles.btnGhost, textDecoration: "none", display: "inline-block", marginRight: 8 }}>
                    Düzenle
                  </Link>
                  <DeleteProjectButton slug={p.slug} title={p.title} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
