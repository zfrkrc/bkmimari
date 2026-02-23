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

export default function BKImage({ src, alt, className, style, loading = 'lazy', onClick }: BKImageProps) {
    // Determine the source - be very aggressive about proxying anything related to minio
    const isMinio = typeof src === 'string' && (
        src.includes('minio') ||
        src.includes('bkmimari.com')
    ) && !src.startsWith('/api/');

    const filename = isMinio ? src.split('/').pop() : null;
    const proxySrc = isMinio ? `/api/image/${filename}` : src;
    const fallbackSrc = isMinio ? `/assets/images/${filename}` : src;

    const [imgSrc, setImgSrc] = useState(proxySrc);

    useEffect(() => {
        setImgSrc(proxySrc);
    }, [proxySrc]);

    const handleError = () => {
        if (isMinio && imgSrc !== fallbackSrc) {
            console.warn(`BKImage: Switching to local fallback for ${filename}`);
            setImgSrc(fallbackSrc);
        } else {
            console.error(`BKImage: Permanent failure for ${src}`);
        }
    };

    return (
        <img
            src={imgSrc}
            alt={alt}
            className={className}
            style={style}
            loading={loading}
            onError={handleError}
            onClick={onClick}
        />
    );
}
