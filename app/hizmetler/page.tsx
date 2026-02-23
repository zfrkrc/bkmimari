import Link from 'next/link';

export const metadata = {
    title: "Hizmetlerimiz",
    description: "Mimari proje tasarımı, 3D görselleştirme, ruhsatlandırma, kentsel dönüşüm ve iç mimarlık gibi geniş bir yelpazede profesyonel mimarlık hizmetleri sunuyoruz.",
    alternates: {
        canonical: "/hizmetler",
    },
};

const services = [
    { num: "01", title: "Konsept Tasarımı", text: "Projenin ilk aşamasında mekânın kimliğini belirleyen yaratıcı ve özgün tasarım fikirleri geliştiriyoruz." },
    { num: "02", title: "Mimari Proje Tasarımı", text: "Konut, ofis, ticari ve karma projelerde estetik, işlevsel ve özgün çözümler üretiyoruz." },
    { num: "03", title: "3D Görselleştirme & Sunum", text: "Proje fikirlerinizi gerçekçi görsellerle hayata geçiriyor, yatırımcı ve kullanıcıya en net şekilde sunuyoruz." },
    { num: "04", title: "İnşaat Ruhsatlandırma", text: "Belediye ve resmi kurum süreçlerini profesyonelce yönetiyor, ruhsat aşamalarında tüm teknik desteği sağlıyoruz." },
    { num: "05", title: "Uygulama Projeleri", text: "Statik, mekanik ve elektrik disiplinleriyle uyumlu, sahada uygulanabilir detaylı projeler hazırlıyoruz." },
    { num: "06", title: "Kat Karşılığı İnşaat", text: "Arsa sahipleriyle yapılan anlaşmalar kapsamında projelerinizi baştan sona anahtar teslim hayata geçiriyoruz." },
    { num: "07", title: "Taahhüt İnşaat", text: "Planlanan projelerinizi sözleşmeye uygun şekilde, kaliteli malzeme ve titiz işçilikle inşa ediyoruz." },
    { num: "08", title: "Kentsel Dönüşüm", text: "Deprem yönetmeliğine uygun, güvenli ve modern yaşam alanları için dönüşüm projeleri tasarlıyor ve uyguluyoruz." },
    { num: "09", title: "Proje Yönetimi", text: "Tasarım sürecinden malzeme seçimine, bütçelendirmeden şantiye takibine kadar tüm aşamalarda yanınızdayız." },
];

export default function Services() {
    return (
        <main>
            <section className="section section--cream" style={{ paddingTop: 'calc(7rem + 72px)' }}>
                <div className="container">
                    <div className="services-header animate-in">
                        <span className="label">Ne Yapıyoruz</span>
                        <h1 className="h2">Hizmetlerimiz</h1>
                        <span className="gold-line gold-line--center"></span>
                        <p className="body-text" style={{ textAlign: 'center' }}>Tasarımdan uygulamaya, ruhsatlandırmadan proje yönetimine kadar eksiksiz mimarlık hizmetleri.</p>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card animate-in">
                                <div className="service-card__num">{service.num}</div>
                                <h3 className="service-card__title">{service.title}</h3>
                                <p className="service-card__text">{service.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="services-cta animate-in">
                        <div className="services-cta__text">
                            <h3 className="services-cta__title">Projenizi Birlikte Hayata Geçirelim</h3>
                            <p className="services-cta__sub">18 yıllık deneyimimiz ve 500.000 m²'yi aşan ruhsat projesi birikimimizle hizmetinizdeyiz.</p>
                        </div>
                        <Link href="/iletisim" className="btn btn--gold">İletişime Geç</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
