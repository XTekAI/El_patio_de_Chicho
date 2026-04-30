'use client';

import React from 'react';
import styles from './Pricing.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section className={styles.pricing} id="precios">
      <div className={`container ${styles.content}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t('pricing.title')}<span className="text-neon">{t('pricing.titleHighlight')}</span>
          </h2>
          <p className={styles.subtitle}>{t('pricing.subtitle')}</p>
        </div>

        <div className={styles.scheduleCard}>
          <div className={styles.scheduleLeft}>
            <p className={styles.scheduleLabel}>{t('pricing.hoursTitle')}</p>
            <p className={styles.scheduleDesc}>{t('pricing.hoursDesc')}</p>
          </div>
          <div className={styles.scheduleTag}>{t('pricing.minMax')}</div>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{t('pricing.card1Title')}</h3>
            <div className={styles.price}>
              <span className={styles.priceAmount}>{t('pricing.card1Price')}</span>
              <span className={styles.priceUnit}>{t('pricing.card1Unit')}</span>
            </div>
            <ul className={styles.features}>
              <li>{t('pricing.includesSpace')}</li>
              <li>{t('pricing.includesSetup')}</li>
            </ul>
          </div>

          <div className={`${styles.card} ${styles.cardFeatured}`}>
            <div className={styles.badge}>{t('pricing.popular')}</div>
            <h3 className={styles.cardTitle}>{t('pricing.card2Title')}</h3>
            <div className={styles.price}>
              <span className={styles.priceAmount}>{t('pricing.card2Price')}</span>
              <span className={styles.priceUnit}>{t('pricing.card2Unit')}</span>
            </div>
            <ul className={styles.features}>
              <li>{t('pricing.includesSpace')}</li>
              <li>{t('pricing.includesSetup')}</li>
              <li className={styles.featureHighlight}>{t('pricing.includesSound')}</li>
            </ul>
          </div>
        </div>

        <p className={styles.djNote}>{t('pricing.djNote')}</p>
      </div>
    </section>
  );
}
