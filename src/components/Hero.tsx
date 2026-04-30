'use client';

import Image from 'next/image';
import styles from './Hero.module.css';
import { useLanguage } from '@/context/LanguageContext';
import CybercoreBackground from './CybercoreBackground';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <CybercoreBackground beamCount={70} />
      <div className={`container ${styles.content}`}>
        <Image
          src="/logo.png"
          alt="El Patio de Chicho"
          width={220}
          height={220}
          className={styles.logo}
          priority
        />
        <h1 className={styles.title}>{t('hero.title')}<span className="text-neon">Chicho</span></h1>
        <p className={styles.subtitle}>{t('hero.subtitle')}</p>
        <div className={styles.ctas}>
          <a href="#reservas" className="button">{t('hero.cta')}</a>
          <a href="tel:+16093108842" className="button-solid">{t('hero.callNow')}</a>
        </div>
      </div>
    </section>
  );
}
