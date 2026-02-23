'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BKImage from './BKImage';

const Navbar = () => {
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
            src="https://minio.bkmimari.com/bkmimari/logo.webp"
            alt="BK Mimari Tasarım"
            style={{ height: '44px', width: 'auto' }}
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
          <a href="tel:05326959856" className="nav__icon" aria-label="Telefon">📞</a>
          <a href="mailto:info@bkmimari.com" className="nav__icon" aria-label="E-posta">✉</a>
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
