'use client';

import styles from './Rules.module.css';
import { useLanguage } from '@/context/LanguageContext';

const RULE_NUMBERS = ['01', '02', '03', '04', '05'];

export default function Rules() {
  const { t } = useLanguage();

  const rules = [
    { num: RULE_NUMBERS[0], title: t('rules.rule1Title'), desc: t('rules.rule1Desc'), highlight: false },
    { num: RULE_NUMBERS[1], title: t('rules.rule2Title'), desc: t('rules.rule2Desc'), highlight: false },
    { num: RULE_NUMBERS[2], title: t('rules.rule3Title'), desc: t('rules.rule3Desc'), highlight: true },
    { num: RULE_NUMBERS[3], title: t('rules.rule4Title'), desc: t('rules.rule4Desc'), highlight: false },
    { num: RULE_NUMBERS[4], title: t('rules.rule5Title'), desc: t('rules.rule5Desc'), highlight: true },
  ];

  return (
    <section className={styles.rules} id="politicas">
      <div className={`container ${styles.content}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t('rules.title')}<span className="text-neon">{t('rules.titleHighlight')}</span>
          </h2>
          <p className={styles.subtitle}>{t('rules.subtitle')}</p>
        </div>

        <div className={styles.list}>
          {rules.map((rule) => (
            <div key={rule.num} className={`${styles.item} ${rule.highlight ? styles.itemHighlight : ''}`}>
              <span className={styles.number}>{rule.num}</span>
              <div className={styles.itemBody}>
                <h3 className={styles.itemTitle}>{rule.title}</h3>
                <p className={styles.itemDesc}>{rule.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.note}>{t('rules.note')}</p>
      </div>
    </section>
  );
}
