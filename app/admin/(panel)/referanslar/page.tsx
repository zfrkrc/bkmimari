"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { adminStyles, colors } from "@/lib/admin-styles";

type Ref = { name: string; url: string; img: string };

export default function ReferencesAdminPage() {
  const router = useRouter();
  const [refs, setRefs] = useState<Ref[] | null>(null);
  const [editingIdx, setEditingIdx] = useState<number | null>(null);
  const [form, setForm] = useState<Ref>({ name: "", url: "", img: "" });
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  function load() {
    fetch("/api/admin/references", { credentials: "include" })
      .then((r) => r.json())
      .then((d) => setRefs(d.references))
      .catch(() => {});
  }

  useEffect(() => { load(); }, []);

  async function uploadFile(file: File) {
    setUploading(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      const r = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const d = await r.json();
      if (!r.ok) {
        setError(d.error || "Yükleme başarısız");
        return;
      }
      setForm((prev) => ({ ...prev, img: d.url }));
    } catch {
      setError("Yükleme hatası");
    } finally {
      setUploading(false);
    }
  }

  function startEdit(idx: number) {
    setEditingIdx(idx);
    setForm({ ...refs![idx] });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetForm() {
    setEditingIdx(null);
    setForm({ name: "", url: "", img: "" });
  }

  async function submit() {
    setError("");
    if (!form.name.trim() || !form.img.trim()) {
      setError("Ad ve görsel zorunludur.");
      return;
    }
    const url = editingIdx === null
      ? "/api/admin/references"
      : `/api/admin/references/${editingIdx}`;
    const method = editingIdx === null ? "POST" : "PUT";
    const r = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const d = await r.json();
    if (!r.ok) {
      setError(d.error || "Kayıt başarısız");
      return;
    }
    setRefs(d.references);
    resetForm();
    router.refresh();
  }

  async function remove(idx: number) {
    if (!confirm(`"${refs![idx].name}" silinecek. Emin misiniz?`)) return;
    const r = await fetch(`/api/admin/references/${idx}`, { method: "DELETE" });
    const d = await r.json();
    if (r.ok) {
      setRefs(d.references);
      if (editingIdx === idx) resetForm();
      router.refresh();
    }
  }

  return (
    <>
      <div style={adminStyles.mainHeader}>
        <div>
          <h1 style={adminStyles.h1}>Referanslar</h1>
          <p style={{ ...adminStyles.sub, marginBottom: 0 }}>{refs ? refs.length : 0} kurumsal referans</p>
        </div>
      </div>

      <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        {/* Form */}
        <div>
          <div style={adminStyles.sectionTitle}>{editingIdx === null ? "Yeni Referans" : "Referansı Düzenle"}</div>
          <div style={{ marginBottom: 12 }}>
            <label style={adminStyles.label}>Kurum Adı</label>
            <input style={adminStyles.input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Örn: İzmit Belediyesi" />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label style={adminStyles.label}>Web Sitesi</label>
            <input style={adminStyles.input} value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} placeholder="https://…" />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={adminStyles.label}>Logo Görseli</label>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              {form.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={form.img} alt="" style={{ height: 40, maxWidth: 160, objectFit: "contain", background: colors.white, border: `1px solid ${colors.border}`, padding: 4 }} />
              ) : null}
              <label style={{ ...adminStyles.btnGhost, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
                {uploading ? "Yükleniyor…" : "⬆ Yükle"}
                <input type="file" accept="image/*" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadFile(f); e.target.value = ""; }} />
              </label>
            </div>
            <input style={adminStyles.input} value={form.img} onChange={(e) => setForm({ ...form, img: e.target.value })} placeholder="veya görsel URL" />
          </div>

          {error && <p style={{ color: colors.red, fontSize: 13, marginBottom: 12 }}>{error}</p>}

          <div style={{ display: "flex", gap: 10 }}>
            <button style={adminStyles.btn} onClick={submit}>{editingIdx === null ? "Ekle" : "Güncelle"}</button>
            {editingIdx !== null && <button style={adminStyles.btnGhost} onClick={resetForm}>Vazgeç</button>}
          </div>
        </div>

        {/* Liste */}
        <div>
          <div style={adminStyles.sectionTitle}>Mevcut Referanslar</div>
          {!refs ? (
            <div style={adminStyles.spinner} />
          ) : refs.length === 0 ? (
            <p style={{ color: colors.mid, fontSize: 14 }}>Henüz referans yok.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {refs.map((r, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, background: colors.white, border: `1px solid ${colors.border}`, padding: 10 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.img} alt={r.name} style={{ height: 32, maxWidth: 120, objectFit: "contain" }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{r.name}</div>
                    <div style={{ fontSize: 12, color: colors.soft, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.url}</div>
                  </div>
                  <button style={adminStyles.btnGhost} onClick={() => startEdit(i)}>Düzenle</button>
                  <button style={adminStyles.btnDanger} onClick={() => remove(i)}>Sil</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
