"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Shell({
  nav,
  footer,
  children,
}: {
  nav: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isAdmin = mounted && pathname?.startsWith("/admin");
  if (isAdmin) return <>{children}</>;

  return (
    <>
      {nav}
      {children}
      {footer}
    </>
  );
}
