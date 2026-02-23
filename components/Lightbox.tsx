'use client';

import { useEffect } from 'react';
import BKImage from './BKImage';

interface LightboxProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    currentIndex: number;
    onPrev: () => void;
    onNext: () => void;
}

const Lightbox = ({ isOpen, onClose, images, currentIndex, onPrev, onNext }: LightboxProps) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, onPrev, onNext]);

    if (!isOpen) return null;

    return (
        <div className="lb-overlay open" onClick={onClose}>
            <button className="lb-close" onClick={onClose}>&times;</button>
            <button className="lb-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>&#8249;</button>
            <BKImage
                src={images[currentIndex]}
                alt=""
                style={{ cursor: 'pointer' }}
                onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    onNext();
                }}
            />
            <button className="lb-next" onClick={(e) => { e.stopPropagation(); onNext(); }}>&#8250;</button>
            <div className="lb-counter">{currentIndex + 1} / {images.length}</div>
        </div>
    );
};

export default Lightbox;
