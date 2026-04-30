'use client';

import { useState, useEffect } from 'react';
import styles from './Contact.module.css';
import { useLanguage } from '@/context/LanguageContext';

const START_TIMES = [
  { value: 10, label: '10:00 AM' },
  { value: 11, label: '11:00 AM' },
  { value: 12, label: '12:00 PM' },
  { value: 13, label: '1:00 PM' },
  { value: 14, label: '2:00 PM' },
  { value: 15, label: '3:00 PM' },
  { value: 16, label: '4:00 PM' },
  { value: 17, label: '5:00 PM' },
];

const PRICE_NO_SOUND = 50;
const PRICE_WITH_SOUND = 80;
const CLOSE_HOUR = 20;
const MIN_HOURS = 3;

export default function Contact() {
  const { t } = useLanguage();
  const [startTime, setStartTime] = useState(10);
  const [hours, setHours] = useState(3);
  const [sound, setSound] = useState(false);

  const maxHours = CLOSE_HOUR - startTime;

  useEffect(() => {
    if (hours > maxHours) setHours(maxHours);
  }, [maxHours]);

  const hourOptions = Array.from(
    { length: maxHours - MIN_HOURS + 1 },
    (_, i) => MIN_HOURS + i
  );

  const endHour = startTime + hours;
  const endLabel = `${endHour - 12}:00 PM`;
  const pricePerHour = sound ? PRICE_WITH_SOUND : PRICE_NO_SOUND;
  const total = hours * pricePerHour;

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

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="startTime">{t('contact.labelStartTime')}</label>
              <select
                id="startTime"
                className={styles.input}
                value={startTime}
                onChange={(e) => setStartTime(Number(e.target.value))}
              >
                {START_TIMES.map((slot) => (
                  <option key={slot.value} value={slot.value}>{slot.label}</option>
                ))}
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="hours">{t('contact.labelHours')}</label>
              <select
                id="hours"
                className={styles.input}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
              >
                {hourOptions.map((h) => (
                  <option key={h} value={h}>{h} {t('contact.hrs')}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>{t('contact.labelSound')}</label>
            <div className={styles.soundToggle}>
              <button
                type="button"
                className={`${styles.soundBtn} ${!sound ? styles.soundBtnActive : ''}`}
                onClick={() => setSound(false)}
              >
                {t('contact.soundNo')}
              </button>
              <button
                type="button"
                className={`${styles.soundBtn} ${sound ? styles.soundBtnActive : ''}`}
                onClick={() => setSound(true)}
              >
                {t('contact.soundYes')}
              </button>
            </div>
          </div>

          <div className={styles.priceSummary}>
            <div className={styles.priceRow}>
              <span className={styles.priceEndTime}>
                {t('contact.endTime')}: <strong>{endLabel}</strong>
              </span>
              <span className={styles.priceTotal}>${total} USD</span>
            </div>
            <p className={styles.priceDetail}>
              {hours} {t('contact.hrs')} &times; ${pricePerHour}/hr
            </p>
            <p className={styles.djNoteForm}>{t('contact.djNote')}</p>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">{t('contact.labelMessage')}</label>
            <textarea id="message" rows={4} placeholder={t('contact.placeholderMessage')} className={styles.input}></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>{t('contact.submit')}</button>

          <div className={styles.callDivider}>
            <span>{t('contact.orCall')}</span>
          </div>
          <a href="tel:+16093108842" className={`button-solid ${styles.callBtn}`}>
            {t('contact.callBtn')}
          </a>
        </form>
      </div>
    </section>
  );
}
