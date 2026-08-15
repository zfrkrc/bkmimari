'use client';

import { useState } from 'react';
import Lightbox from '@/components/Lightbox';
import BKImage from '@/components/BKImage';
import type { ProjectImage } from '@/lib/projects';

export default function ProjectGallery({ images }: { images: ProjectImage[] }) {
    const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

    const openLightbox = (index: number) => setLightbox({ isOpen: true, index });
    const closeLightbox = () => setLightbox({ ...lightbox, isOpen: false });
    const nextImage = () => setLightbox({ ...lightbox, index: (lightbox.index + 1) % images.length });
    const prevImage = () => setLightbox({ ...lightbox, index: (lightbox.index - 1 + images.length) % images.length });

    return (
        <>
            <div className="project-detail-grid">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className="project-thumb"
                        style={{ aspectRatio: '4/3', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
                        onClick={() => openLightbox(idx)}
                    >
                        <BKImage
                            src={img.src}
                            alt={img.alt}
                            loading={idx < 3 ? 'eager' : 'lazy'}
                            fetchPriority={idx === 0 ? 'high' : undefined}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            onClick={(e) => {
                                e.stopPropagation();
                                openLightbox(idx);
                            }}
                        />
                    </div>
                ))}
            </div>

            <Lightbox
                isOpen={lightbox.isOpen}
                onClose={closeLightbox}
                images={images.map((i) => i.src)}
                currentIndex={lightbox.index}
                onNext={nextImage}
                onPrev={prevImage}
            />
        </>
    );
}
