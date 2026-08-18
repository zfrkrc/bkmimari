"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { adminStyles, colors } from "@/lib/admin-styles";

export default function SiteSettingsPage() {
  const router = useRouter();
  const [form, setForm] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/settings", { credentials: "include" })
      .then((r) => r.json())
      .then((d) => setForm(d.site))
      .catch(() => {});
  }, []);

  function set(key: string, value: string) {
    setForm((prev: any) => ({ ...prev, [key]: value }));
  }

  async function uploadFile(file: File, key: string) {
    setUploading(key);
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
      setForm((prev: any) => ({ ...prev, [key]: d.url }));
    } catch {
      setError("Yükleme hatası");
    } finally {
      setUploading(null);
    }
  }

  async function save() {
    setSaving(true);
    setError("");
    setSaved(false);
    try {
      const r = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const d = await r.json();
      if (!r.ok) {
        setError(d.error || "Kayıt başarısız");
        return;
      }
      setSaved(true);
      router.refresh();
      setTimeout(() => setSaved(false), 2500);
    } catch {
      setError("Kayıt hatası");
    } finally {
      setSaving(false);
    }
  }

  if (!form) return <div style={adminStyles.page}><div style={adminStyles.spinner} /></div>;

  const field = (label: string, key: string, placeholder?: string) => (
    <div style={{ marginBottom: 12 }}>
      <label style={adminStyles.label}>{label}</label>
      <input style={adminStyles.input} value={form[key] || ""} onChange={(e) => set(key, e.target.value)} placeholder={placeholder} />
    </div>
  );

  const imgUpload = (label: string, key: string, previewH: number) => (
    <div style={{ marginBottom: 16 }}>
      <label style={adminStyles.label}>{label}</label>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {form[key] ? <img src={form[key]} alt="" style={{ height: previewH, width: "auto", maxWidth: 200, objectFit: "contain", background: colors.cream, border: `1px solid ${colors.border}`, padding: 4 }} /> : null}
        <label style={{ ...adminStyles.btnGhost, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
          {uploading === key ? "Yükleniyor…" : "⬆ Yükle"}
          <input type="file" accept="image/*" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadFile(f, key); e.target.value = ""; }} />
        </label>
        <input style={{ ...adminStyles.input, marginBottom: 0, flex: 1 }} value={form[key] || ""} onChange={(e) => set(key, e.target.value)} placeholder="veya URL" />
      </div>
    </div>
  );

  return (
    <>
      <div style={adminStyles.mainHeader}>
        <div>
          <h1 style={adminStyles.h1}>Site Ayarları</h1>
          <p style={{ ...adminStyles.sub, marginBottom: 0 }}>Logo, iletişim bilgileri ve ana sayfa görseli.</p>
        </div>
      </div>

      <div style={{ marginTop: 20, maxWidth: 640 }}>
        {imgUpload("Logo (nav + footer)", "logo", 44)}
        {imgUpload("Ana Sayfa Görseli (hero)", "heroBg", 60)}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
          {field("Telefon (link için)", "phone", "05326959856")}
          {field("Telefon (görünen)", "phoneDisplay", "0 (532) 695 98 56")}
        </div>
        {field("E-posta", "email", "info@bkmimari.com")}
        <div style={{ marginBottom: 12 }}>
          <label style={adminStyles.label}>Adres</label>
          <textarea style={{ ...adminStyles.input, minHeight: 80, resize: "vertical" }} value={form.address || ""} onChange={(e) => set("address", e.target.value)} />
        </div>
        {field("Çalışma Saatleri", "workingHours", "Hafta İçi: 09:00 – 18:00")}
        {field("Rozet (üyelikler)", "badge", "TMMOB Üyesi · İstanbul Ticaret Odası Üyesi")}

        {error && <p style={{ color: colors.red, fontSize: 13, marginBottom: 12 }}>{error}</p>}
        {saved && <p style={{ color: colors.green, fontSize: 13, marginBottom: 12 }}>✓ Kaydedildi. Değişikliklerin sitede görünmesi için sayfayı yenileyin.</p>}

        <button style={adminStyles.btn} onClick={save} disabled={saving}>
          {saving ? "Kaydediliyor…" : "Kaydet"}
        </button>
      </div>
    </>
  );
}
