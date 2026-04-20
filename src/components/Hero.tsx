'use client';

import React from 'react';
import styles from './Hero.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>{t('hero.title')}<span className="text-neon">Chicho</span></h1>
        <p className={styles.subtitle}>{t('hero.subtitle')}</p>
        <a href="#reservas" className="button">{t('hero.cta')}</a>
      </div>
    </section>
  );
}
