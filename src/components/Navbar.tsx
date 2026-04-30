'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { useLanguage } from '@/context/LanguageContext';

const NAV_LINKS = [
  { key: 'nav.about',   href: '#sobre-nosotros' },
  { key: 'nav.gallery', href: '#galeria' },
  { key: 'nav.pricing', href: '#precios' },
  { key: 'nav.dj',      href: '#dj' },
  { key: 'nav.rules',   href: '#politicas' },
];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>

        {/* Brand */}
        <a href="#" className={styles.brand} onClick={closeMenu}>
          El Patio de <span className="text-neon">Chicho</span>
        </a>

        {/* Desktop links */}
        <nav className={styles.desktopNav}>
          {NAV_LINKS.map((link) => (
            <a key={link.key} href={link.href} className={styles.navLink}>
              {t(link.key)}
            </a>
          ))}
        </nav>

        {/* Desktop right side */}
        <div className={styles.desktopRight}>
          <button
            className={styles.langBtn}
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
          >
            {t('toggle')}
          </button>
          <a href="#reservas" className={styles.ctaBtn}>{t('nav.contact')}</a>
        </div>

        {/* Mobile controls */}
        <div className={styles.mobileControls}>
          <button
            className={styles.langBtn}
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
          >
            {t('toggle')}
          </button>
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.key} href={link.href} className={styles.mobileLink} onClick={closeMenu}>
            {t(link.key)}
          </a>
        ))}
        <a href="#reservas" className={styles.mobileCta} onClick={closeMenu}>
          {t('nav.contact')}
        </a>
      </div>
    </header>
  );
}
