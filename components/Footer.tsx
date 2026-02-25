import Link from 'next/link';
import BKImage from './BKImage';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__logo">
                        <BKImage
                            src="https://minio.bkmimari.com/bkmimari/logo.webp"
                            alt="BK MİMARİ"
                            style={{ height: '32px', width: 'auto' }}
                        />
                    </div>
                    <p className="footer__copy">
                        © 2025 BK MİMARİ TASARIM — Acıbadem, Üsküdar / İstanbul | Tasarım:{' '}
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
