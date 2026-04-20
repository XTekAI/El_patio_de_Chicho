'use client';

import React from 'react';
import styles from './About.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className={styles.about} id="sobre-nosotros">
      <div className={`container ${styles.grid}`}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{t('about.title')}<span className="text-neon">Chicho</span>?</h2>
          <p className={styles.description}>
            {t('about.description')}
          </p>
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>✓</span>
              <span>{t('about.feature1')}</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>✓</span>
              <span>{t('about.feature2')}</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>✓</span>
              <span>{t('about.feature3')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
