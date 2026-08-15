import Link from 'next/link';
import BKImage from '@/components/BKImage';
import HomeGallery from '@/components/HomeGallery';

export const metadata = {
  title: "BK Mimarı Tasarım — Mimarlık & İç Mimarlık | Acıbadem, İstanbul",
  description: "Acıbadem-Kadıköy merkezli BK MİMARİ TASARIM; mimari proje, iç mimarlık, 3D görselleştirme ve anahtar teslim inşaat hizmetleri. 19 yıl, 500.000 m² deneyim.",
};

const services = [
  { icon: "🏛", title: "Mimari Proje", text: "Konut, ofis ve ticari yapılarda estetik ve işlevsel tasarım çözümleri.", href: "/hizmetler" },
  { icon: "🛋", title: "İç Mimarlık", text: "Mekânın kimliğini belirleyen, kullanıcı odaklı iç mekân tasarımları.", href: "/hizmetler" },
  { icon: "🏗", title: "Anahtar Teslim İnşaat", text: "Projeden teslime kadar tüm süreçlerin tek elden yürütülmesi.", href: "/hizmetler" },
  { icon: "🎨", title: "3D Görselleştirme", text: "Projelerinizi gerçekçi görsellerle yatırımcıya net biçimde sunma.", href: "/hizmetler" },
];

const steps = [
  { num: "01", title: "Danışma & Keşif", text: "İhtiyaçlarınızı dinler, arsa ve proje potansiyelini birlikte değerlendiririz." },
  { num: "02", title: "Tasarım / Proje", text: "Mimari proje, ruhsatlandırma ve uygulama projelerini hazırlarız." },
  { num: "03", title: "Uygulama", text: "Şantiye sürecini planlar, malzeme ve işçilik kalitesini yakından takip ederiz." },
  { num: "04", title: "Teslim", text: "Projeyi sözleşmeye uygun biçimde, anahtar teslim olarak size sunarız." },
];

const stats = [
  { num: "19", label: "Yıl Deneyim" },
  { num: "500K+", label: "m² Ruhsat Projesi" },
  { num: "14+", label: "Kurumsal Referans" },
];

const refs = [
  { name: "Çevre ve Şehircilik Bakanlığı", img: "https://minio.bkmimari.com/bkmimari/cevre-318x100.webp" },
  { name: "İzmit Belediyesi", img: "https://minio.bkmimari.com/bkmimari/izmit-600x213.webp" },
  { name: "Luxera GYO", img: "https://minio.bkmimari.com/bkmimari/luxera-gyo-logo-lacivertt.pdf-315x146.webp" },
  { name: "Kıraç Okulları", img: "https://minio.bkmimari.com/bkmimari/images-225x225.webp" },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BK MİMARİ TASARIM",
    "description": "Mimarlık, İç Mimarlık ve Anahtar Teslim İnşaat Hizmetleri",
    "url": "https://bkmimari.com",
    "logo": "https://bkmimari.com/assets/images/logo.webp",
    "image": "https://bkmimari.com/og.webp",
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
    <main className="fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="hero">
        <div className="hero__bg">
          <BKImage
            src="https://minio.bkmimari.com/bkmimari/izmit1-1600x999.webp"
            alt="BK MİMARİ TASARIM mimari proje görselleştirmesi"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <p className="hero__eyebrow">Acıbadem · Kadıköy · İstanbul</p>
          <h1 className="hero__title">BK MİMARİ<br /><em>TASARIM</em></h1>
          <p className="hero__sub">Mimarlık, İç Mimarlık ve Anahtar Teslim İnşaat Hizmetleri<br />19 Yıllık Deneyim</p>
          <div className="hero__btns">
            <Link href="/projeler" className="btn btn--gold">Projelerimiz</Link>
            <Link href="/iletisim" className="btn btn--outline">İletişim</Link>
          </div>
        </div>
        <div className="hero__scroll">AŞAĞI KAYDIRIN</div>
      </section>

      {/* HİZMETLER */}
      <section className="section home-services">
        <div className="container">
          <div className="services-header">
            <span className="label">Hizmetlerimiz</span>
            <h2 className="h2">Ne Yapıyoruz</h2>
            <span className="gold-line gold-line--center"></span>
            <p className="body-text" style={{ textAlign: 'center' }}>Tasarımdan teslime, dört ana başlıkta eksiksiz hizmet.</p>
          </div>
          <div className="home-services-grid">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="home-service-card">
                <span className="home-service-card__icon" aria-hidden="true">{s.icon}</span>
                <h3 className="home-service-card__title">{s.title}</h3>
                <p className="home-service-card__text">{s.text}</p>
                <span className="home-service-card__link">Detay →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇİLİ PROJELER */}
      <section className="gallery-section">
        <div className="container">
          <span className="label" style={{ display: 'block', textAlign: 'center' }}>Seçkin Çalışmalar</span>
          <h2 className="h2 h2--light" style={{ textAlign: 'center', marginTop: '.5rem' }}>Seçili Projeler</h2>
          <span className="gold-line gold-line--center"></span>
        </div>
        <div className="container-wide" style={{ marginTop: '3rem' }}>
          <HomeGallery />
        </div>
        <div className="container" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/projeler" className="btn btn--gold">Tüm Projeleri Gör</Link>
        </div>
      </section>

      {/* SÜREÇ */}
      <section className="section section--cream home-process">
        <div className="container">
          <div className="services-header">
            <span className="label">Süreç</span>
            <h2 className="h2">Nasıl Çalışıyoruz</h2>
            <span className="gold-line gold-line--center"></span>
          </div>
          <div className="process-grid">
            {steps.map((st) => (
              <div key={st.num} className="process-card">
                <div className="process-card__num">{st.num}</div>
                <h3 className="process-card__title">{st.title}</h3>
                <p className="process-card__text">{st.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GÜVEN BANDI */}
      <section className="home-stats">
        <div className="container">
          {stats.map((s) => (
            <div key={s.label} className="home-stat">
              <div className="home-stat__num">{s.num}</div>
              <div className="home-stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* REFERANSLAR */}
      <section className="section home-refs">
        <div className="container">
          <div className="services-header">
            <span className="label">Referanslarımız</span>
            <h2 className="h2">Birlikte Çalıştığımız Kurumlar</h2>
            <span className="gold-line gold-line--center"></span>
          </div>
          <div className="home-refs-grid">
            {refs.map((r) => (
              <div key={r.name} className="home-ref">
                <BKImage src={r.img} alt={r.name} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="container" style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/referanslar" className="btn btn--primary">Tüm Referanslar</Link>
          </div>
        </div>
      </section>

      {/* KAPANIŞ CTA */}
      <section className="home-cta">
        <div className="container home-cta__inner">
          <h2 className="home-cta__title">Projenizi birlikte hayata geçirelim</h2>
          <p className="home-cta__sub">İlk görüşme için bizi arayın veya teklif formunu doldurun.</p>
          <div className="home-cta__actions">
            <a href="tel:05326959856" className="btn btn--gold">Hemen Ara: 0 (532) 695 98 56</a>
            <Link href="/iletisim" className="btn btn--outline">Teklif Alın</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
