import Link from 'next/link';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BK Mimari Tasarım",
    "description": "Mimarlık, İç Mimarlık ve Anahtar Teslim İnşaat Hizmetleri",
    "url": "https://bkmimari.com",
    "logo": "https://bkmimari.com/assets/images/whatsapp-grsel-2025-08-25-saat-10.02.35-0e6d48e2-377x126.webp",
    "image": "https://bkmimari.com/assets/images/whatsapp-grsel-2025-08-25-saat-10.02.35-0e6d48e2-377x126.webp",
    "telephone": "+905326959856",
    "email": "info@bkmimari.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Acıbadem, Üsküdar",
      "addressRegion": "İstanbul",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0082",
      "longitude": "29.0285"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "₺₺₺",
    "foundingDate": "2007",
    "areaServed": "İstanbul, Türkiye"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HERO */}
      <section className="hero">
        <div className="hero__video-wrap">
          <iframe
            src="https://www.youtube.com/embed/ZadoWcbo9vs?autoplay=1&mute=1&loop=1&playlist=ZadoWcbo9vs&controls=0&showinfo=0&rel=0&iv_load_policy=3"
            allowFullScreen
            title="BK Mimari Tasarım Tanıtım Videosu"
          />
        </div>
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <p className="hero__eyebrow">Acıbadem · Kadıköy · İstanbul</p>
          <h1 className="hero__title">BK Mimari<br /><em>Tasarım</em></h1>
          <p className="hero__sub">Mimarlık, İç Mimarlık ve Anahtar Teslim İnşaat Hizmetleri — 18 Yıllık Deneyim</p>
          <div className="hero__btns">
            <Link href="/projeler" className="btn btn--gold">Projelerimiz</Link>
            <Link href="/iletisim" className="btn btn--outline">İletişim</Link>
          </div>
        </div>
        <div className="hero__scroll">AŞAĞI KAYDIRIN</div>
      </section>

      {/* GALERİ */}
      <section className="gallery-section">
        <div className="container">
          <span className="label" style={{ display: 'block', textAlign: 'center' }}>Seçkin Çalışmalar</span>
          <h2 className="h2 h2--light" style={{ textAlign: 'center', fontWeight: 300, marginTop: '.5rem' }}>Projelerimizden Kareler</h2>
          <span className="gold-line gold-line--center"></span>
        </div>
        <div className="container-wide" style={{ marginTop: '3rem' }}>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/assets/images/kirac-838x629.webp" alt="BK Mimari Proje" loading="lazy" />
              <div className="gallery-item__overlay"><div className="gallery-item__icon">+</div></div>
            </div>
            <div className="gallery-item">
              <img src="/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.37-4d0eb087-838x629.webp" alt="BK Mimari Proje" loading="lazy" />
              <div className="gallery-item__overlay"><div className="gallery-item__icon">+</div></div>
            </div>
            <div className="gallery-item">
              <img src="/assets/images/izmit-838x523.webp" alt="BK Mimari Proje" loading="lazy" />
              <div className="gallery-item__overlay"><div className="gallery-item__icon">+</div></div>
            </div>
            <div className="gallery-item">
              <img src="/assets/images/dnerci-838x629.webp" alt="BK Mimari Proje" loading="lazy" />
              <div className="gallery-item__overlay"><div className="gallery-item__icon">+</div></div>
            </div>
          </div>
        </div>
        <div className="container" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/projeler" className="btn btn--gold">Tüm Projeleri Gör</Link>
        </div>
      </section>
    </main>
  );
}
