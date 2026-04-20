'use client';

import React from 'react';
import styles from './PhotoGallery.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function PhotoGallery() {
  const { t } = useLanguage();

  return (
    <section className={styles.gallery} id="galeria">
      <div className="container">
        <h2 className={styles.title}>{t('gallery.title')}<span className="text-neon">{t('gallery.facilities')}</span></h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src="/patio-event-space.png" alt="El Patio de Chicho instalaciones" className={styles.image} />
            </div>
            <div className={styles.cardContent}>
              <h3>{t('gallery.locationTitle')}</h3>
              <p>{t('gallery.locationDesc')}</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src="/patio-party.png" alt="Fiesta en El Patio de Chicho" className={styles.image} />
            </div>
            <div className={styles.cardContent}>
              <h3>{t('gallery.eventsTitle')}</h3>
              <p>{t('gallery.eventsDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
