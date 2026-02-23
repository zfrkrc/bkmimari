'use client';

import { useState } from 'react';
import Lightbox from '@/components/Lightbox';
import BKImage from '@/components/BKImage';

interface ProjectGroup {
    title: string;
    images: string[];
}

interface ProjectsClientProps {
    projects: ProjectGroup[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
    const allImages = projects.flatMap(p => p.images);
    const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

    const openLightbox = (imgSrc: string) => {
        const index = allImages.indexOf(imgSrc);
        setLightbox({ isOpen: true, index });
    };

    const closeLightbox = () => setLightbox({ ...lightbox, isOpen: false });

    const nextImage = () => setLightbox({ ...lightbox, index: (lightbox.index + 1) % allImages.length });
    const prevImage = () => setLightbox({ ...lightbox, index: (lightbox.index - 1 + allImages.length) % allImages.length });

    return (
        <>
            <section className="projects-grid-wrap fade-in">
                <div className="container">
                    {projects.map((group, groupIdx) => (
                        <div key={groupIdx} className="project-group animate-in">
                            <div className="project-group__head">
                                <h2 className="project-group__title">{group.title}</h2>
                                <span className="project-group__count">{group.images.length} Görsel</span>
                            </div>
                            {/* Standardized 4-column sharp grid for all projects */}
                            <div className="project-masonry" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                                {group.images.map((img, imgIdx) => (
                                    <div
                                        key={imgIdx}
                                        className="project-thumb"
                                        style={{ aspectRatio: '1/1', cursor: 'pointer' }}
                                        onClick={() => openLightbox(img)}
                                    >
                                        <BKImage src={img} alt={group.title} />
                                        <div className="project-thumb__overlay">
                                            <span className="project-thumb__label">{group.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Lightbox
                isOpen={lightbox.isOpen}
                onClose={closeLightbox}
                images={allImages}
                currentIndex={lightbox.index}
                onNext={nextImage}
                onPrev={prevImage}
            />
        </>
    );
}
