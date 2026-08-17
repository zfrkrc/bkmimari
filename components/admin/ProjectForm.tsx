"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { adminStyles, colors } from "@/lib/admin-styles";
import type { Project } from "@/lib/projects";

type ImageItem = { src: string; alt: string };

export default function ProjectForm({ initial }: { initial?: Project }) {
  const router = useRouter();
  const editing = !!initial;

  const [title, setTitle] = useState(initial?.title || "");
  const [slug, setSlug] = useState(initial?.slug || "");
  const [category, setCategory] = useState(initial?.category || "");
  const [location, setLocation] = useState(initial?.location || "");
  const [year, setYear] = useState(initial?.year || "");
  const [area, setArea] = useState(initial?.area || "");
  const [scope, setScope] = useState(initial?.scope || "");
  const [client, setClient] = useState(initial?.client || "");
  const [description, setDescription] = useState(initial?.description || "");
  const [images, setImages] = useState<ImageItem[]>(initial?.images || []);

  const [newUrl, setNewUrl] = useState("");
  const [newAlt, setNewAlt] = useState("");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

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
      setImages((prev) => [...prev, { src: d.url, alt: file.name.replace(/\.[^.]+$/, "") }]);
    } catch {
      setError("Yükleme hatası");
    } finally {
      setUploading(false);
    }
  }

  function addByUrl() {
    if (!newUrl.trim()) return;
    setImages((prev) => [...prev, { src: newUrl.trim(), alt: newAlt.trim() }]);
    setNewUrl("");
    setNewAlt("");
  }

  function removeImage(i: number) {
    setImages((prev) => prev.filter((_, idx) => idx !== i));
  }

  function moveImage(i: number, dir: -1 | 1) {
    setImages((prev) => {
      const next = [...prev];
      const j = i + dir;
      if (j < 0 || j >= next.length) return prev;
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
  }

  async function save() {
    setSaving(true);
    setError("");
    try {
      const payload = {
        title, slug, category, location, year, area, scope, client, description, images,
      };
      const url = editing ? `/api/admin/projects/${encodeURIComponent(slug)}` : "/api/admin/projects";
      const method = editing ? "PUT" : "POST";
      const r = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const d = await r.json();
      if (!r.ok) {
        setError(d.error || "Kayıt başarısız");
        return;
      }
      router.push("/admin/projeler");
      router.refresh();
    } catch {
      setError("Kayıt hatası");
    } finally {
      setSaving(false);
    }
  }

  const field = (label: string, value: string, onChange: (v: string) => void, placeholder?: string, full?: boolean) => (
    <div style={{ marginBottom: 12 }}>
      <label style={adminStyles.label}>{label}</label>
      <input
        style={adminStyles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <>
      <div style={adminStyles.mainHeader}>
        <div>
          <h1 style={adminStyles.h1}>{editing ? "Projeyi Düzenle" : "Yeni Proje"}</h1>
          <p style={{ ...adminStyles.sub, marginBottom: 0 }}>{editing ? `/${slug}` : "Yeni proje ekle"}</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px", marginTop: 20 }}>
        {field("Başlık *", title, setTitle, "Örn: İzmit Belediyesi")}
        {field("Slug", slug, setSlug, "otomatik (başlıktan)")}
        {field("Kategori", category, setCategory, "Örn: Kamu Yapısı, Konut, Ticari")}
        {field("Konum", location, setLocation, "Örn: İzmit, Kocaeli")}
        {field("Yıl", year, setYear, "Örn: 2024")}
        {field("Alan (m²)", area, setArea, "Örn: 12.500")}
        {field("Kapsam", scope, setScope, "Örn: Uygulama projesi, iç mimari")}
        {field("İşveren", client, setClient, "Örn: İzmit Belediyesi")}
      </div>

      <div style={{ marginBottom: 12 }}>
        <label style={adminStyles.label}>Açıklama</label>
        <textarea
          style={{ ...adminStyles.input, minHeight: 90, resize: "vertical" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Proje açıklaması…"
        />
      </div>

      {/* Görseller */}
      <div style={{ marginBottom: 20 }}>
        <div style={adminStyles.sectionTitle}>Görseller ({images.length})</div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
          <label style={{ ...adminStyles.btnGhost, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
            {uploading ? "Yükleniyor…" : "⬆ Görsel Yükle"}
            <input type="file" accept="image/*" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadFile(f); e.target.value = ""; }} />
          </label>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          <input style={{ ...adminStyles.input, marginBottom: 0, flex: 1 }} placeholder="veya görsel URL yapıştır" value={newUrl} onChange={(e) => setNewUrl(e.target.value)} />
          <input style={{ ...adminStyles.input, marginBottom: 0, width: 200 }} placeholder="Alt metin" value={newAlt} onChange={(e) => setNewAlt(e.target.value)} />
          <button style={adminStyles.btnGhost} onClick={addByUrl}>Ekle</button>
        </div>

        {images.length === 0 ? (
          <p style={{ color: colors.mid, fontSize: 14 }}>Henüz görsel yok.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {images.map((img, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, background: colors.white, border: `1px solid ${colors.border}`, padding: 8 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} style={adminStyles.thumb} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, color: colors.mid, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{img.src}</div>
                  <input
                    style={{ ...adminStyles.input, marginBottom: 0, marginTop: 6, fontSize: 12, padding: "6px 10px" }}
                    value={img.alt}
                    onChange={(e) => setImages((prev) => prev.map((x, idx) => idx === i ? { ...x, alt: e.target.value } : x))}
                    placeholder="Alt metin"
                  />
                </div>
                <button style={adminStyles.btnGhost} onClick={() => moveImage(i, -1)}>↑</button>
                <button style={adminStyles.btnGhost} onClick={() => moveImage(i, 1)}>↓</button>
                <button style={adminStyles.btnDanger} onClick={() => removeImage(i)}>✕</button>
              </div>
            ))}
          </div>
        )}
      </div>

      {error && <p style={{ color: colors.red, fontSize: 13, marginBottom: 14 }}>{error}</p>}

      <div style={{ display: "flex", gap: 10 }}>
        <button style={adminStyles.btn} onClick={save} disabled={saving || !title.trim()}>
          {saving ? "Kaydediliyor…" : editing ? "Güncelle" : "Kaydet"}
        </button>
        <a href="/admin/projeler" style={{ ...adminStyles.btnGhost, textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
          Vazgeç
        </a>
      </div>
    </>
  );
}
