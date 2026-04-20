'use client';

import React from 'react';
import styles from './Contact.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className={styles.contact} id="reservas">
      <div className={`container ${styles.content}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('contact.title')}<span className="text-neon">{t('contact.reservation')}</span></h2>
          <p className={styles.subtitle}>{t('contact.subtitle')}</p>
        </div>
        
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">{t('contact.labelName')}</label>
            <input type="text" id="name" placeholder={t('contact.placeholderName')} className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phone">{t('contact.labelPhone')}</label>
            <input type="tel" id="phone" placeholder={t('contact.placeholderPhone')} className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="date">{t('contact.labelDate')}</label>
            <input type="date" id="date" className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">{t('contact.labelMessage')}</label>
            <textarea id="message" rows={4} placeholder={t('contact.placeholderMessage')} className={styles.input}></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>{t('contact.submit')}</button>
        </form>
      </div>
    </section>
  );
}
