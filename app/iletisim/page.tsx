import { getSiteContent } from '@/lib/site-store';

export const metadata = {
    title: "İletişim",
    description: "Mimari projeleriniz için profesyonel destek almak üzere bizimle iletişime geçin. Acıbadem, Üsküdar ofisimizde sizi bekliyoruz.",
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
                                <div className="contact-item__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="contact-item__meta">Telefon</div>
                                    <div className="contact-item__val"><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-item__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="contact-item__meta">E-posta</div>
                                    <div className="contact-item__val"><a href={`mailto:${site.email}`}>{site.email}</a></div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-item__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="contact-item__meta">Adres</div>
                                    <div className="contact-item__val" style={{ whiteSpace: 'pre-line' }}>{site.address}</div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-item__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
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
