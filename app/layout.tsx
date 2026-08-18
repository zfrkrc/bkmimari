import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Shell from "@/components/Shell";
import { getSiteContent } from "@/lib/site-store";

const siteConfig = {
  name: "BK MİMARİ TASARIM",
  title: "BK MİMARİ TASARIM — Mimarlık & İç Mimarlık | İstanbul",
  description: "Acıbadem-Kadıköy merkezli BK MİMARİ TASARIM; villa tasarımı, ofis dekorasyonu, 3D görselleştirme ve anahtar teslim inşaat hizmetleri. 19 yıl, 500.000 m² deneyim.",
  url: "https://bkmimari.com",
  ogImage: "https://bkmimari.com/og.webp",
  keywords: ["BK MİMARİ", "mimarlık ofisi Acıbadem", "iç mimarlık Kadıköy", "İstanbul mimari tasarım", "villa tasarımı", "anahtar teslim inşaat"],
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
      name: "BK MİMARİ TASARIM",
      url: siteConfig.url,
    },
  ],
  creator: "BK MİMARİ TASARIM",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const site = await getSiteContent();

  return (
    <html lang="tr">
      <head>
        {/* Fontlar: preconnect + preload + swap */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Inter:wght@300;400;500;600&display=swap&subset=latin-ext"
          rel="stylesheet"
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M2S927G');`,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M2S927G"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Shell nav={<Navbar site={site} />} footer={<Footer />}>
          {children}
        </Shell>
      </body>
    </html>
  );
}
