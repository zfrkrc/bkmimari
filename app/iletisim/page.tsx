import { getSiteContent } from '@/lib/site-store';

export const metadata = {
    title: "İletişim — Teklif Alın",
    description: "Mimari projeleriniz için profesyonel destek alın. Acıbadem, Üsküdar ofisimizde sizi bekliyoruz. Telefon: 0 (532) 695 98 56 — info@bkmimari.com.",
    alternates: {
        canonical: "/iletisim",
    },
};

export default async function Contact() {
    const site = await getSiteContent();

    return (
        <main className="fade-in">
            <div style={{ paddingTop: '72px' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', padding: '5rem 0 0' }}>
                        <span className="label">Bize Ulaşın</span>
                        <h1 className="h2">İletişim</h1>
                        <span className="gold-line gold-line--center"></span>
                        <p className="body-text" style={{ maxWidth: '480px', margin: '0 auto' }}>Projenizi konuşmak için bize ulaşın. En kısa sürede geri döneceğiz.</p>
                    </div>

                    <div className="contact-wrap">
                        <div className="contact-card animate-in">
                            <h2 className="contact-card__title">BK MİMARİ<br />TASARIM</h2>

                            <div className="contact-item">
                                <div className="contact-item__icon">📞</div>
                                <div>
                                    <div className="contact-item__meta">Telefon</div>
                                    <div className="contact-item__val"><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-item__icon">✉</div>
                                <div>
                                    <div className="contact-item__meta">E-posta</div>
                                    <div className="contact-item__val"><a href={`mailto:${site.email}`}>{site.email}</a></div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-item__icon">📍</div>
                                <div>
                                    <div className="contact-item__meta">Adres</div>
                                    <div className="contact-item__val" style={{ whiteSpace: 'pre-line' }}>{site.address}</div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-item__icon">🕐</div>
                                <div>
                                    <div className="contact-item__meta">Çalışma Saatleri</div>
                                    <div className="contact-item__val">{site.workingHours}</div>
                                </div>
                            </div>

                            <div className="contact-badge">
                                {site.badge}
                            </div>

                            <div style={{ marginTop: '2rem' }}>
                                <a href={`tel:${site.phone}`} className="btn btn--gold" style={{ width: '100%', textAlign: 'center' }}>Hemen Ara</a>
                            </div>
                        </div>

                        <div className="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.925487351331!2d29.054032811397857!3d41.00500407123149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac62960dc703d%3A0xc3f012b61581918a!2sBK%20Mimari%20Tasar%C4%B1m!5e0!3m2!1str!2sus!4v1756136849995!5m2!1str!2sus"
                                className="w-full h-full min-h-[520px] border-none block"
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="BK MİMARİ TASARIM Ofisi Konumu">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
