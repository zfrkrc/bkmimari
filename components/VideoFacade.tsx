'use client';

import { useState } from 'react';
import BKImage from './BKImage';

interface VideoFacadeProps {
    videoId: string;
    posterSrc: string;
    posterAlt: string;
    title: string;
}

export default function VideoFacade({ videoId, posterSrc, posterAlt, title }: VideoFacadeProps) {
    const [playing, setPlaying] = useState(false);

    if (playing) {
        return (
            <div className="video-facade video-facade--active">
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        );
    }

    return (
        <button
            type="button"
            className="video-facade"
            onClick={() => setPlaying(true)}
            aria-label={`${title} videosunu oynat`}
        >
            <BKImage
                src={posterSrc}
                alt={posterAlt}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <span className="video-facade__play" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                </svg>
            </span>
        </button>
    );
}
