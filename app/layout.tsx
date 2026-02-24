import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const siteConfig = {
  name: "BK Mimari Tasarım",
  title: "BK Mimari Tasarım — Mimarlık & İç Mimarlık | İstanbul",
  description: "Acıbadem-Kadıköy merkezli BK Mimari Tasarım; villa tasarımı, ofis dekorasyonu, 3D görselleştirme ve anahtar teslim inşaat hizmetleri. 18 yıl, 500.000 m² deneyim.",
  url: "https://bkmimari.com",
  ogImage: "https://minio.bkmimari.com/bkmimari/logo.webp",
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
    icon: "/assets/images/logo.webp",
    shortcut: "/assets/images/logo.webp",
    apple: "/assets/images/logo.webp",
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
      <head>
        {/* Google Tag Manager - First-Party Proxy via Cloudflare Gateway */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'/sbgc?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M2S927G');`,
          }}
        />
        {/* Cookiebot */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="479f7920-750f-4420-a46a-d1915ac07132"
          strategy="beforeInteractive"
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) - Proxy via Cloudflare Gateway */}
        <noscript>
          <iframe
            src="/ns.html?id=GTM-M2S927G"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
