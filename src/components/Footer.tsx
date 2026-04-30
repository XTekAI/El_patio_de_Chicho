'use client';

import Link from 'next/link';
import styles from './Footer.module.css';
import { useLanguage } from '@/context/LanguageContext';

function IconInstagram() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const { language, t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>

        {/* Top row */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <p className={styles.brandName}>
              El Patio de <span className="text-neon">Chicho</span>
            </p>
            <p className={styles.tagline}>{t('footer.tagline')}</p>
            <a href="tel:+16093108842" className={styles.phone}>{t('footer.phone')}</a>
          </div>

          <div className={styles.social}>
            <p className={styles.followLabel}>{t('footer.followUs')}</p>
            <div className={styles.socialLinks}>
              <a
                href="#"
                className={styles.socialBtn}
                aria-label={t('footer.instagram')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconInstagram />
                <span>{t('footer.instagram')}</span>
              </a>
              <a
                href="#"
                className={styles.socialBtn}
                aria-label={t('footer.facebook')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconFacebook />
                <span>{t('footer.facebook')}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className={styles.bottom}>
          <Link href="/terminos" className={styles.termsLink}>
            {language === 'en' ? 'Terms & Conditions' : 'Términos y Condiciones'}
          </Link>
          <p className={styles.copy}>
            &copy; {year} El Patio de Chicho &mdash; {t('footer.rights')}
          </p>
          <a
            href="https://www.xtekai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.watermark}
          >
            Built by <span className={styles.watermarkBrand}>XTekAI</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
