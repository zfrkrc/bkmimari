import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProjectGallery from '@/components/ProjectGallery';
import { projects, getProject } from '@/lib/projects';

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProject(slug);
    if (!project) return {};
    const loc = project.location ? `${project.location} ` : '';
    return {
        title: `${project.title} — Proje`,
        description: `${project.title} mimari projesi${loc ? `, ${project.location}` : ''}. BK MİMARİ TASARIM tarafından tasarlandı.`,
        alternates: { canonical: `/projeler/${slug}` },
    };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProject(slug);
    if (!project) notFound();

    const facts: { label: string; value: string | null }[] = [
        { label: "Konum", value: project.location },
        { label: "Yıl", value: project.year },
        { label: "Alan", value: project.area },
        { label: "Kapsam", value: project.scope },
        { label: "İşveren", value: project.client },
    ];
    const knownFacts = facts.filter((f) => f.value);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": project.title,
        "creator": { "@type": "Organization", "name": "BK MİMARİ TASARIM" },
        "url": `https://bkmimari.com/projeler/${project.slug}`,
        ...(project.location ? { "contentLocation": project.location } : {}),
        ...(project.year ? { "dateCreated": project.year } : {}),
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="projects-hero projects-hero--detail">
                <div className="container animate-in">
                    <Link href="/projeler" className="detail-back">← Tüm Projeler</Link>
                    <h1 className="h1" style={{ color: 'var(--white)', fontWeight: 300 }}>{project.title}</h1>
                    {project.category && <span className="label" style={{ color: 'var(--gold)' }}>{project.category}</span>}
                </div>
            </div>

            <section className="section">
                <div className="container">
                    {knownFacts.length > 0 && (
                        <div className="project-facts">
                            {knownFacts.map((f) => (
                                <div key={f.label} className="project-fact">
                                    <span className="project-fact__label">{f.label}</span>
                                    <span className="project-fact__value">{f.value}</span>
                                </div>
                            ))}
                            {/* BİLGİ GEREKLİ: yıl, m² ve kapsam bilgileri */}
                        </div>
                    )}

                    {project.description ? (
                        <p className="body-text" style={{ maxWidth: '65ch' }}>{project.description}</p>
                    ) : (
                        <p className="body-text" style={{ maxWidth: '65ch' }}>
                            {/* BİLGİ GEREKLİ: proje açıklaması */}
                        </p>
                    )}
                </div>
            </section>

            <section className="projects-grid-wrap" style={{ paddingTop: 0 }}>
                <div className="container">
                    <ProjectGallery images={project.images} />
                </div>
            </section>
        </main>
    );
}
