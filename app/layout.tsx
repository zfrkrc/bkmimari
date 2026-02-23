import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteConfig = {
  name: "BK Mimari Tasarım",
  title: "BK Mimari Tasarım — Mimarlık & İç Mimarlık | İstanbul",
  description: "Acıbadem-Kadıköy merkezli BK Mimari Tasarım; villa tasarımı, ofis dekorasyonu, 3D görselleştirme ve anahtar teslim inşaat hizmetleri. 18 yıl, 500.000 m² deneyim.",
  url: "https://bkmimari.com",
  ogImage: "/assets/images/whatsapp-grsel-2025-08-25-saat-10.02.35-0e6d48e2-377x126.webp",
  keywords: ["BK Mimari", "mimarlık ofisi Acıbadem", "iç mimarlık Kadıköy", "İstanbul mimari tasarım", "villa tasarımı", "anahtar teslim inşaat"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "BK Mimari Tasarım",
      url: siteConfig.url,
    },
  ],
  creator: "BK Mimari Tasarım",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@bkmimari",
  },
  icons: {
    icon: siteConfig.ogImage,
    shortcut: siteConfig.ogImage,
    apple: siteConfig.ogImage,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
