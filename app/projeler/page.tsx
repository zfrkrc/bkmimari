import ProjectsClient from "@/components/ProjectsClient";
import VideoFacade from "@/components/VideoFacade";
import { getProjects } from "@/lib/projects-store";

export const metadata = {
    title: "Projelerimiz — Tamamlanan Mimari Projeler",
    description: "Konut, eğitim ve kamu yapılarında tamamladığımız 500.000 m²'yi aşkın mimari proje portföyümüzü inceleyin: İzmit Belediyesi, Kıraç Okulları ve daha fazlası.",
    alternates: {
        canonical: "/projeler",
    },
};

export default async function Projects() {
    const projects = await getProjects();
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

            <section className="projects-video">
                <div className="container">
                    <VideoFacade
                        videoId="ZadoWcbo9vs"
                        posterSrc="https://minio.bkmimari.com/bkmimari/izmit1-1600x999.webp"
                        posterAlt="BK MİMARİ TASARIM proje tanıtım videosu"
                        title="BK MİMARİ TASARIM Proje Tanıtım Videosu"
                    />
                </div>
            </section>

            <ProjectsClient projects={projects} />
        </main>
    );
}
