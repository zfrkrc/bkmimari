import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__logo">
                        <img
                            src="/assets/images/whatsapp-grsel-2025-08-25-saat-10.02.35-0e6d48e2-377x126.webp"
                            alt="BK Mimari"
                            style={{ height: '32px', width: 'auto' }}
                        />
                    </div>
                    <p className="footer__copy">
                        © 2025 BK Mimari Tasarım — Acıbadem, Üsküdar / İstanbul | Tasarım:{' '}
                        <a
                            href="https://zaferkaraca.net"
                            target="_blank"
                            rel="noopener"
                            style={{ color: 'var(--gold)', textDecoration: 'none' }}
                        >
                            ZK
                        </a>
                    </p>
                    <nav className="footer__links">
                        <Link href="/hakkimizda">Hakkımızda</Link>
                        <Link href="/hizmetler">Hizmetler</Link>
                        <Link href="/iletisim">İletişim</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
