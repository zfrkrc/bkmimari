'use client';

import { useState } from 'react';
import BKImage from './BKImage';
import Lightbox from './Lightbox';

const homeImages = [
    "https://minio.bkmimari.com/bkmimari/kirac-838x629.webp",
    "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.37-4d0eb087-838x629.webp",
    "https://minio.bkmimari.com/bkmimari/izmit-838x523.webp",
    "https://minio.bkmimari.com/bkmimari/dnerci-838x629.webp"
];

export default function HomeGallery() {
    const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

    const openLightbox = (index: number) => {
        setLightbox({ isOpen: true, index });
    };

    const closeLightbox = () => setLightbox({ ...lightbox, isOpen: false });
    const nextImage = () => setLightbox({ ...lightbox, index: (lightbox.index + 1) % homeImages.length });
    const prevImage = () => setLightbox({ ...lightbox, index: (lightbox.index - 1 + homeImages.length) % homeImages.length });

    return (
        <>
            <div className="gallery-grid">
                {homeImages.map((src, idx) => (
                    <div key={idx} className="gallery-item" onClick={() => openLightbox(idx)}>
                        <BKImage
                            src={src}
                            alt="BK Mimari Proje"
                            onClick={(e) => {
                                e.stopPropagation();
                                openLightbox(idx);
                            }}
                        />
                        <div className="gallery-item__overlay">
                            <div className="gallery-item__icon">+</div>
                        </div>
                    </div>
                ))}
            </div>

            <Lightbox
                isOpen={lightbox.isOpen}
                onClose={closeLightbox}
                images={homeImages}
                currentIndex={lightbox.index}
                onNext={nextImage}
                onPrev={prevImage}
            />
        </>
    );
}
