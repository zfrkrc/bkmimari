import Link from 'next/link';

export const metadata = {
    title: "Hakkımızda",
    description: "2007 yılında mimar Barçın Karaca tarafından kurulan BK Mimari Tasarım, 18 yıllık tecrübesi ve 500.000 m²'yi aşan proje deneyimi ile İstanbul'da hizmet vermektedir.",
    alternates: {
        canonical: "/hakkimizda",
    },
};

export default function About() {
    return (
        <main>
            <div className="about-split">
                <div className="about-split__img">
                    <img src="https://minio.bkmimari.com/bkmimari/8-1200x1599.webp" alt="BK Mimari — Barçın Karaca" />
                </div>
                <div className="about-split__content animate-in">
                    <span className="label">18 Yıllık Tecrübe</span>
                    <h1 className="h1">Geleceği<br />İnşa Ediyoruz</h1>
                    <span className="gold-line"></span>
                    <p className="body-text" style={{ marginBottom: '1.5rem' }}>
                        2007 yılında kurulan, TMMOB ve İstanbul Ticaret Odası üyesi olan <strong style={{ color: 'var(--navy)' }}>BK Mimari Tasarım</strong>, mimari proje tasarımı, inşaat ruhsatlandırma süreçleri ve uygulama alanlarında uzmanlaşmış bir mimarlık firmasıdır.
                    </p>
                    <p className="body-text" style={{ marginBottom: '1.5rem' }}>
                        Kurucumuz <strong style={{ color: 'var(--navy)' }}>Barçın KARACA</strong>, Yıldız Teknik Üniversitesi Mimarlık Fakültesi mezunu olup 18 yılı aşkın süredir sektörde aktif olarak hizmet vermektedir.
                    </p>
                    <p className="body-text" style={{ marginBottom: '2.5rem' }}>
                        Bugüne kadar 500.000 m²'nin üzerinde ruhsat projesi hazırlayan BK Mimari Tasarım, her projede işlevselliği, estetiği ve mevzuata uygunluğu dengeli biçimde bir araya getirmeyi ilke edinmektedir. Amacımız; bulunduğu çevreye değer katan, kullanıcı odaklı ve sürdürülebilir yapılar tasarlamaktır.
                    </p>
                    <Link href="/iletisim" className="btn btn--primary">Bize Ulaşın</Link>
                </div>
            </div>

            <div className="about-stats">
                <div className="about-stat">
                    <div className="about-stat__num">18</div>
                    <div className="about-stat__label">Yıl Deneyim</div>
                </div>
                <div className="about-stat">
                    <div className="about-stat__num">500K+</div>
                    <div className="about-stat__label">m² Ruhsat Projesi</div>
                </div>
                <div className="about-stat">
                    <div className="about-stat__num">14+</div>
                    <div className="about-stat__label">Kurumsal Referans</div>
                </div>
                <div className="about-stat">
                    <div className="about-stat__num">2007</div>
                    <div className="about-stat__label">Kuruluş Yılı</div>
                </div>
            </div>
        </main>
    );
}
