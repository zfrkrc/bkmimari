"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { colors } from "@/lib/admin-styles";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const r = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const d = await r.json();
      if (!r.ok) {
        setError(d.error || "Giriş başarısız");
        return;
      }
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Bağlantı hatası");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: colors.cream, fontFamily: "'Inter', sans-serif" }}>
      <form onSubmit={submit} style={{ background: colors.white, border: `1px solid ${colors.border}`, padding: "40px 36px", width: 360 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <div style={{ width: 40, height: 40, background: colors.gold, color: colors.navy, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 20 }}>BK</div>
          <div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 18, color: colors.navy }}>Admin Girişi</div>
            <div style={{ fontSize: 11, color: colors.soft, letterSpacing: 0.1, textTransform: "uppercase" }}>bkmimari.com</div>
          </div>
        </div>

        <p style={{ color: colors.mid, fontSize: 13, marginBottom: 22 }}>Yönetim paneline erişmek için şifrenizi girin.</p>

        <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: colors.mid, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.6 }}>Şifre</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          required
          style={{ width: "100%", background: colors.white, border: `1px solid ${colors.border}`, padding: "11px 13px", color: colors.ink, fontSize: 14, marginBottom: 12, fontFamily: "'Inter', sans-serif", outline: "none" }}
        />

        {error && <p style={{ color: colors.red, fontSize: 13, marginBottom: 12 }}>{error}</p>}

        <button type="submit" disabled={loading} style={{ width: "100%", background: colors.gold, color: colors.navy, border: "none", padding: "12px 18px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
          {loading ? "Giriliyor…" : "Giriş Yap"}
        </button>

        <a href="/" style={{ display: "block", textAlign: "center", marginTop: 16, color: colors.mid, fontSize: 13, textDecoration: "none" }}>← Siteye Dön</a>
      </form>
    </div>
  );
}
