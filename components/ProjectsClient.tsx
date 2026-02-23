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
    // Current group of images being viewed
    const [activeImages, setActiveImages] = useState<string[]>([]);
    const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

    const openLightbox = (groupImages: string[], index: number) => {
        setActiveImages(groupImages);
        setLightbox({ isOpen: true, index });
    };

    const closeLightbox = () => setLightbox({ ...lightbox, isOpen: false });

    const nextImage = () => setLightbox({ ...lightbox, index: (lightbox.index + 1) % activeImages.length });
    const prevImage = () => setLightbox({ ...lightbox, index: (lightbox.index - 1 + activeImages.length) % activeImages.length });

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
                            <div className="project-masonry" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                                {group.images.map((img, imgIdx) => (
                                    <div
                                        key={imgIdx}
                                        className="project-thumb"
                                        style={{ aspectRatio: '1/1', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
                                        onClick={() => openLightbox(group.images, imgIdx)}
                                    >
                                        <BKImage
                                            src={img}
                                            alt={group.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openLightbox(group.images, imgIdx);
                                            }}
                                        />
                                        <div className="project-thumb__overlay" style={{ pointerEvents: 'none' }}>
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
                images={activeImages}
                currentIndex={lightbox.index}
                onNext={nextImage}
                onPrev={prevImage}
            />
        </>
    );
}
