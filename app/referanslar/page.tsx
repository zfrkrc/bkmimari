import BKImage from '@/components/BKImage';
import { getSiteContent } from '@/lib/site-store';

export const metadata = {
    title: "Referanslarımız",
    description: "Çevre ve Şehircilik Bakanlığı, İzmit Belediyesi ve Luxera GYO gibi lider kurumsal ortaklarımızla gerçekleştirdiğimiz başarılı projeler.",
    alternates: {
        canonical: "/referanslar",
    },
};

export default async function References() {
    const site = await getSiteContent();
    const references = site.references;

    return (
        <main className="fade-in">
            <section className="section section--cream" style={{ paddingTop: 'calc(7rem + 72px)' }}>
                <div className="container">
                    <div className="refs-header animate-in">
                        <span className="label">Güvenilir Ortaklarımız</span>
                        <h1 className="h2">Referanslarımız</h1>
                        <span className="gold-line gold-line--center"></span>
                        <p className="body-text" style={{ textAlign: 'center' }}>Yıllar içinde birlikte çalışmaktan gurur duyduğumuz kurumsal ve özel sektör referanslarımız.</p>
                    </div>

                    <div className="refs-grid">
                        {references.map((ref, index) => (
                            <a
                                key={index}
                                className="ref-card animate-in"
                                href={ref.url}
                                target="_blank"
                                rel="noopener"
                                aria-label={ref.name}
                            >
                                <BKImage src={ref.img} alt={ref.name} />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
