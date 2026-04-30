'use client';

import styles from './DjCallout.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function DjCallout() {
  const { t } = useLanguage();

  return (
    <section className={styles.dj} id="dj">
      <div className={`container ${styles.content}`}>
        <div className={styles.card}>
          <div className={styles.text}>
            <h2 className={styles.title}>
              {t('dj.title')}<span className="text-neon">{t('dj.titleHighlight')}</span>
            </h2>
            <p className={styles.description}>{t('dj.description')}</p>
            <p className={styles.note}>{t('dj.note')}</p>
          </div>
          <div className={styles.cta}>
            <p className={styles.callLabel}>{t('dj.callLabel')}</p>
            <a href="tel:+16093108842" className={`button-solid ${styles.callBtn}`}>
              {t('dj.callBtn')}
            </a>
            <a href="tel:+16093108842" className={styles.phone}>
              {t('dj.phone')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
