'use client';

import { useState } from 'react';

interface BKImageProps {
    src: string;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
    loading?: 'lazy' | 'eager';
    onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}

/**
 * BKImage handles MinIO URLs with a transparent fallback to local assets
 * if the external URL fails to load.
 */
export default function BKImage({ src, alt, className, style, loading = 'lazy', onClick }: BKImageProps) {
    // If src starts with minio URL, we prepare a fallback
    const isMinio = src.includes('minio.bkmimari.com');
    const filename = isMinio ? src.split('/').pop() : null;
    const fallbackSrc = filename ? `/assets/images/${filename}` : src;

    const [currentSrc, setCurrentSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        if (!hasError && isMinio) {
            console.warn(`MinIO image failed to load, falling back to local: ${fallbackSrc}`);
            setCurrentSrc(fallbackSrc);
            setHasError(true);
        }
    };

    return (
        <img
            src={currentSrc}
            alt={alt}
            className={className}
            style={style}
            loading={loading}
            onError={handleError}
            onClick={onClick}
        />
    );
}
