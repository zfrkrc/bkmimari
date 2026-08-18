'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BKImage from './BKImage';
import type { SiteContent } from '@/lib/site-store';

const Navbar = ({ site }: { site: SiteContent }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`} id="nav">
      <div className="nav__inner">
        <Link href="/" className="nav__logo" onClick={closeMenu}>
          <BKImage
            src={site.logo}
            alt="BK MİMARİ TASARIM"
            style={{ height: '44px', width: 'auto' }}
            loading="eager"
            fetchPriority="high"
          />
        </Link>
        <ul className={`nav__links ${isOpen ? 'open' : ''}`} id="navLinks">
          <li><Link href="/hakkimizda" className="nav__link" onClick={closeMenu}>Hakkımızda </Link></li>
          <li><Link href="/hizmetler" className="nav__link" onClick={closeMenu}>Hizmetlerimiz</Link></li>
          <li><Link href="/projeler" className="nav__link" onClick={closeMenu}>Projeler</Link></li>
          <li><Link href="/referanslar" className="nav__link" onClick={closeMenu}>Referanslar</Link></li>
          <li><Link href="/iletisim" className="nav__link" onClick={closeMenu}>İletişim</Link></li>
        </ul>
        <div className="nav__actions">
          <a href={`tel:${site.phone}`} className="nav__icon" aria-label="Telefon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <a href={`mailto:${site.email}`} className="nav__icon" aria-label="E-posta">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
          <button
            className="nav__toggle"
            id="navToggle"
            aria-label="Menü"
            onClick={toggleMenu}
          >
            <span style={{ transform: isOpen ? 'translateY(6.5px) rotate(45deg)' : '' }}></span>
            <span style={{ opacity: isOpen ? '0' : '1' }}></span>
            <span style={{ transform: isOpen ? 'translateY(-6.5px) rotate(-45deg)' : '' }}></span>
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'transparent',
            zIndex: 998
          }}
          onClick={closeMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
