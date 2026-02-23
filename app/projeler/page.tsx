import ProjectsClient from "@/components/ProjectsClient";

export const metadata = {
    title: "Projelerimiz",
    description: "Konut, ticari ve kurumsal alanlarda tamamladığımız 500.000 m²'yi aşkın mimari proje portföyümüzü inceleyin.",
    alternates: {
        canonical: "/projeler",
    },
};

const projectsData = [
    {
        title: "İzmit Belediyesi",
        images: [
            "/assets/images/izmit-838x523.webp",
            "/assets/images/izmit1-1600x999.webp",
            "/assets/images/izmit2-1600x1028.webp",
            "/assets/images/izmit3-1600x1032.webp",
            "/assets/images/izmit4-1600x991.webp",
            "/assets/images/izmit5-1600x999.webp",
        ]
    },
    {
        title: "Kartal",
        images: [
            "/assets/images/kartal-838x775.webp",
            "/assets/images/kartal1-1179x1123.webp",
            "/assets/images/kartal2-1176x1322.webp",
            "/assets/images/kartal3-1179x1004.webp",
            "/assets/images/kartal6-1179x1157.webp",
            "/assets/images/kartal7-1179x1075.webp",
            "/assets/images/kartal454-1172x1195.webp",
            "/assets/images/kartal8-1179x1336.webp",
        ]
    },
    {
        title: "Kıraç Okulları",
        images: [
            "/assets/images/kirac-838x629.webp",
            "/assets/images/kirac1-1600x1200.webp",
            "/assets/images/kirac2-1600x1200.webp",
            "/assets/images/kirac3-1600x1200.webp",
            "/assets/images/kirac5-1600x1200.webp",
            "/assets/images/kirac6-1600x1200.webp",
        ]
    },
    {
        title: "Dönerci Celal Usta",
        images: [
            "/assets/images/dnerci-838x629.webp",
            "/assets/images/donerci-celal-usta-kosuyolu-acibadem-sube-galeri-2-1200x900.webp",
            "/assets/images/donerci-celal-usta-kosuyolu-acibadem-sube-galeri-4-1200x900.webp",
            "/assets/images/donerci-celal-usta-kosuyolu-acibadem-sube-galeri-5-1200x900.webp",
            "/assets/images/hasan-838x629.webp",
        ]
    },
    {
        title: "Şile Karakiraz",
        images: [
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.41-7b90ec2a-838x1117.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.41-15eec005-838x629.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.41-1209d1ef-838x1117.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.41-56252480-838x1117.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.41-aaea2b0d-838x1117.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.41-ecd34e17-838x627.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.40-1b51bc6b-1600x1200.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.40-63b2600b-1600x1200.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.40-3313cb24-1600x1200.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.40-a6f98745-1600x1200.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.41-21cfa545-1600x1200.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.41-61588d64-1600x1200.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.41-f4af0e00-1600x1200.webp",
        ]
    },
    {
        title: "Zeytin Arası",
        images: [
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.37-4d0eb087-838x629.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.38-cd9a6687-838x556.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.38-9590cf15-838x556.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.38-5344d35b-838x629.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.38-14a55cb9-838x629.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.38-4b4979c2-838x629.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.39-c5273d8a-838x592.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.39-70005475-838x629.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.38-89874fd8-838x430.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.38-166b2ed9-1170x600.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.38-6bf1f4b6-1170x600.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.37-4d0eb087-960x720.webp",
        ]
    },
    {
        title: "Luxera Nevbahar",
        images: [
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.40-7c2bb330-838x629.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.39-2aa94073-838x1117.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.39-7b8f9f3e-838x1522.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.39-7bedae74-838x1117.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.39-39ba8d29-838x1117.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.39-85fe6c19-838x1117.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.40-78420fd9-838x1117.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.39-1112f2ec-838x1117.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.39-69418c5e-1200x1600.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.39-e061c7e8-1536x2048.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.40-8f5e11d3-1600x1200.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.40-80ddefc8-900x1600.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.40-b96d68d0-1600x1200.webp",
            "/assets/images/whatsapp-grsel-2025-09-15-saat-20.06.39-39ba8d29-1200x1600.webp",
            "/assets/images/8-e1711205513319-500x300.webp",
        ]
    }
];

export default function Projects() {
    return (
        <main>
            <div className="projects-hero">
                <div className="container animate-in">
                    <span className="label" style={{ color: 'var(--gold)', display: 'block', textAlign: 'center' }}>Tamamlanan & Devam Eden Çalışmalar</span>
                    <h1 className="h1" style={{ color: 'var(--white)', fontWeight: 300, textAlign: 'center' }}>Projelerimiz</h1>
                    <span className="gold-line gold-line--center"></span>
                    <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.95rem', textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>500.000 m²'yi aşan ruhsat projesi portföyümüzden seçkiler.</p>
                </div>
            </div>

            <ProjectsClient projects={projectsData} />
        </main>
    );
}
