'use client';

import { useState } from 'react';
import BKImage from './BKImage';
import Lightbox from './Lightbox';

type Project = {
    title: string;
    location: string;
    category: string;
    year: string | null;
    image: string;
    alt: string;
};

const projects: Project[] = [
    {
        title: "İzmit Belediyesi",
        location: "İzmit, Kocaeli",
        category: "Kamu Yapısı",
        year: null,
        image: "https://minio.bkmimari.com/bkmimari/izmit-838x523.webp",
        alt: "İzmit Belediyesi hizmet binası mimari proje görselleştirmesi",
    },
    {
        title: "Kartal",
        location: "Kartal, İstanbul",
        category: "Konut",
        year: null,
        image: "https://minio.bkmimari.com/bkmimari/kartal-838x775.webp",
        alt: "Kartal'da konut projesi mimari görselleştirme",
    },
    {
        title: "Kıraç Okulları",
        location: "İstanbul",
        category: "Eğitim Yapısı",
        year: null,
        image: "https://minio.bkmimari.com/bkmimari/kirac-838x629.webp",
        alt: "Kıraç Okulları eğitim binası iç mimari uygulaması",
    },
];

export default function HomeGallery() {
    const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

    const openLightbox = (index: number) => setLightbox({ isOpen: true, index });
    const closeLightbox = () => setLightbox({ ...lightbox, isOpen: false });
    const nextImage = () => setLightbox({ ...lightbox, index: (lightbox.index + 1) % projects.length });
    const prevImage = () => setLightbox({ ...lightbox, index: (lightbox.index - 1 + projects.length) % projects.length });

    return (
        <>
            <div className="projects-showcase">
                {projects.map((p, idx) => (
                    <article key={idx} className="showcase-card">
                        <div className="showcase-card__media" onClick={() => openLightbox(idx)}>
                            <BKImage
                                src={p.image}
                                alt={p.alt}
                                loading={idx < 2 ? 'eager' : 'lazy'}
                                fetchPriority={idx === 0 ? 'high' : undefined}
                            />
                            <div className="showcase-card__overlay">
                                <span className="showcase-card__view">Projeyi gör →</span>
                            </div>
                        </div>
                        <div className="showcase-card__info">
                            <h3 className="showcase-card__title">{p.title}</h3>
                            <p className="showcase-card__meta">
                                {p.category} · {p.location}
                                {/* BİLGİ GEREKLİ: proje tamamlanma yılı ve m² bilgisi */}
                            </p>
                        </div>
                    </article>
                ))}
            </div>

            <Lightbox
                isOpen={lightbox.isOpen}
                onClose={closeLightbox}
                images={projects.map((p) => p.image)}
                currentIndex={lightbox.index}
                onNext={nextImage}
                onPrev={prevImage}
            />
        </>
    );
}
