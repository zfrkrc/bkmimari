'use client';

import Link from 'next/link';
import BKImage from '@/components/BKImage';
import type { Project } from '@/lib/projects';

export default function ProjectsClient({ projects }: { projects: Project[] }) {
    return (
        <section className="projects-grid-wrap fade-in">
            <div className="container">
                <div className="projects-cards">
                    {projects.map((p) => (
                        <Link key={p.slug} href={`/projeler/${p.slug}`} className="project-card">
                            <div className="project-card__media">
                                <BKImage
                                    src={p.images[0].src}
                                    alt={p.images[0].alt}
                                    loading="eager"
                                    fetchPriority="high"
                                />
                            </div>
                            <div className="project-card__info">
                                <h2 className="project-card__title">{p.title}</h2>
                                <p className="project-card__meta">
                                    {[p.category, p.location].filter(Boolean).join(' · ')}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
