'use client';

import { useState, useEffect } from 'react';

interface BKImageProps {
    src: string;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
    loading?: 'lazy' | 'eager';
    onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}

/**
 * BKImage handles private MinIO URLs by routing them through an internal API
 * and provides a fallback to local assets if the fetch fails.
 */
export default function BKImage({ src, alt, className, style, loading = 'lazy', onClick }: BKImageProps) {
    // If src starts with minio URL, we prepare a local proxy URL and a static fallback
    const isMinio = src.includes('minio.bkmimari.com');
    const filename = isMinio ? src.split('/').pop() : null;

    // The internal API route that handles auth
    const proxySrc = isMinio ? `/api/image/${filename}` : src;
    // The static fallback in public/assets/images
    const fallbackSrc = isMinio ? `/assets/images/${filename}` : src;

    const [currentSrc, setCurrentSrc] = useState(proxySrc);
    const [hasError, setHasError] = useState(false);

    // Sync internal state with external prop change
    useEffect(() => {
        const isMinioNew = src.includes('minio.bkmimari.com');
        const filenameNew = isMinioNew ? src.split('/').pop() : null;
        setCurrentSrc(isMinioNew ? `/api/image/${filenameNew}` : src);
        setHasError(false);
    }, [src]);

    const handleError = () => {
        // If the proxy fails, we try the local static assets
        if (!hasError && isMinio) {
            console.warn(`MinIO proxy failed for ${filename}, trying local fallback: ${fallbackSrc}`);
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
