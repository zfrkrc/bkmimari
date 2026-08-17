"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { adminStyles, colors } from "@/lib/admin-styles";

const NAV = [
  { href: "/admin", label: "Panel", icon: "▤" },
  { href: "/admin/projeler", label: "Projeler", icon: "▦" },
  { href: "/admin/projeler/yeni", label: "Yeni Proje", icon: "+" },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div style={adminStyles.page}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <div style={adminStyles.shell}>
        <aside style={adminStyles.sidebar}>
          <div style={adminStyles.logo}>
            <div style={adminStyles.logoMark}>BK</div>
            <div>
              <div style={adminStyles.logoText}>Admin Panel</div>
              <div style={adminStyles.logoSub}>bkmimari.com</div>
            </div>
          </div>

          <nav>
            <div style={adminStyles.navGroup}>Yönetim</div>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  ...adminStyles.navLink,
                  ...(pathname === item.href ? adminStyles.navLinkActive : {}),
                }}
              >
                <span style={{ width: 16, textAlign: "center" }}>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div style={adminStyles.navGroup}>Site</div>
          <a href="/" target="_blank" style={adminStyles.navLink}>
            <span style={{ width: 16, textAlign: "center" }}>↗</span>
            <span>Siteyi Görüntüle</span>
          </a>

          <div style={adminStyles.sidebarFooter}>
            <button style={adminStyles.logoutBtn} onClick={logout}>
              <span>⎋</span> Çıkış Yap
            </button>
          </div>
        </aside>

        <main style={adminStyles.main}>{children}</main>
      </div>
    </div>
  );
}
