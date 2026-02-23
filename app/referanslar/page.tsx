export const metadata = {
    title: "Referanslarımız",
    description: "Çevre ve Şehircilik Bakanlığı, İzmit Belediyesi ve Luxera GYO gibi lider kurumsal ortaklarımızla gerçekleştirdiğimiz başarılı projeler.",
    alternates: {
        canonical: "/referanslar",
    },
};

const references = [
    { name: "Çevre ve Şehircilik Bakanlığı", url: "https://www.csb.gov.tr/", img: "/assets/images/cevre-318x100.webp" },
    { name: "EPP", url: "https://epp.com.tr/", img: "/assets/images/epp-2441x1006.webp" },
    { name: "EPAS Grup", url: "https://epasgrup.com/", img: "/assets/images/epas-grup-2021-logo-300x67-1-300x94.webp" },
    { name: "İzmit Belediyesi", url: "https://izmit.bel.tr/", img: "/assets/images/izmit-600x213.webp" },
    { name: "Luxera GYO", url: "https://luxera.com.tr/", img: "/assets/images/luxera-gyo-logo-lacivertt.pdf-315x146.webp" },
    { name: "Halil Avcı", url: "https://www.halilavci.com/tr/", img: "/assets/images/halil-avci-logo-267x110.webp" },
    { name: "Yeni Koza", url: "https://www.yenikoza.com/", img: "/assets/images/yenikoza-178x84.webp" },
    { name: "Aramis Yapı", url: "https://aramisyapi.com.tr/", img: "/assets/images/aramis-yapilogo-1-282x87.webp" },
    { name: "Zeytin Arası", url: "https://www.zeytinarasi.com/", img: "/assets/images/logo-beya-yesil-217x105.webp" },
    { name: "Hasan Usta Kebap", url: "https://hasanustakebap.com/", img: "/assets/images/kirmizi-logo-1024x538.png.webp" },
    { name: "Oto İsmail", url: "https://www.otoismail.com.tr/", img: "/assets/images/images-1-396x127.webp" },
    { name: "Berko İlaç", url: "https://berkoilac.com.tr/", img: "/assets/images/berkoilac-sy-rgb-1-3508x1331.webp" },
    { name: "Kıraç Okulları", url: "https://www.kirac.k12.tr/", img: "/assets/images/images-225x225.webp" },
    { name: "Dönerci Celal Usta", url: "https://www.donercicelalusta.com/kosuyolu-acibadem-subesi/", img: "/assets/images/donerci-celal-usta-logo-480x98.webp" },
];

export default function References() {
    return (
        <main>
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
                                className="ref-card"
                                href={ref.url}
                                target="_blank"
                                rel="noopener"
                                aria-label={ref.name}
                            >
                                <img src={ref.img} alt={ref.name} loading="lazy" />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
