'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './LanguageToggle.module.css';

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <button 
      className={styles.toggle} 
      onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
    >
      {t('toggle')}
    </button>
  );
}
