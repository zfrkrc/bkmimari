import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";
import AdminShell from "@/components/admin/AdminShell";

export const metadata = {
  title: "Admin Panel — BK MİMARİ TASARIM",
  robots: { index: false, follow: false },
};

export default async function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  if (!(await isAdmin())) {
    redirect("/admin/login");
  }

  return <AdminShell>{children}</AdminShell>;
}
