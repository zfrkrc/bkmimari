export const metadata = {
    title: "İletişim",
    description: "Mimari projeleriniz için profesyonel destek almak üzere bizimle iletişime geçin. Acıbadem, Üsküdar ofisimizde sizi bekliyoruz.",
    alternates: {
        canonical: "/iletisim",
    },
};

export default function Contact() {
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
                            <h2 className="contact-card__title">BK Mimari<br />Tasarım</h2>

                            <div className="contact-item">
                                <div className="contact-item__icon">📞</div>
                                <div>
                                    <div className="contact-item__meta">Telefon</div>
                                    <div className="contact-item__val"><a href="tel:05326959856">0 (532) 695 98 56</a></div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-item__icon">✉</div>
                                <div>
                                    <div className="contact-item__meta">E-posta</div>
                                    <div className="contact-item__val"><a href="mailto:info@bkmimari.com">info@bkmimari.com</a></div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-item__icon">📍</div>
                                <div>
                                    <div className="contact-item__meta">Adres</div>
                                    <div className="contact-item__val">
                                        Acıbadem Mahallesi, Derin Sokak<br />
                                        Almondhill Sitesi D No:5 Z İç Kapı No:2<br />
                                        Üsküdar / İstanbul
                                    </div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-item__icon">🕐</div>
                                <div>
                                    <div className="contact-item__meta">Çalışma Saatleri</div>
                                    <div className="contact-item__val">Hafta İçi: 09:00 – 18:00</div>
                                </div>
                            </div>

                            <div className="contact-badge">
                                TMMOB Üyesi · İstanbul Ticaret Odası Üyesi
                            </div>

                            <div style={{ marginTop: '2rem' }}>
                                <a href="tel:05326959856" className="btn btn--gold" style={{ width: '100%', textAlign: 'center' }}>Hemen Ara</a>
                            </div>
                        </div>

                        <div className="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.925487351331!2d29.054032811397857!3d41.00500407123149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac62960dc703d%3A0xc3f012b61581918a!2sBK%20Mimari%20Tasar%C4%B1m!5e0!3m2!1str!2sus!4v1756136849995!5m2!1str!2sus"
                                className="w-full h-full min-h-[520px] border-none block"
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="BK Mimari Tasarım Ofisi Konumu">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
