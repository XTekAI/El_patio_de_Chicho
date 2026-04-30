'use client';

import { useState, useEffect, CSSProperties } from 'react';
import styles from './CybercoreBackground.module.css';

interface Beam {
  id: number;
  type: 'primary' | 'secondary';
  style: CSSProperties;
}

export default function CybercoreBackground({ beamCount = 70 }: { beamCount?: number }) {
  const [beams, setBeams] = useState<Beam[]>([]);

  useEffect(() => {
    const generated: Beam[] = Array.from({ length: beamCount }).map((_, i) => {
      const riseDur = Math.random() * 3 + 5;
      const type = Math.random() < 0.15 ? 'secondary' : 'primary';
      return {
        id: i,
        type,
        style: {
          left: `${Math.random() * 100}%`,
          width: `${Math.floor(Math.random() * 2) + 1}px`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${riseDur}s, ${riseDur}s`,
        },
      };
    });
    setBeams(generated);
  }, [beamCount]);

  return (
    <div className={styles.scene} role="presentation" aria-hidden="true">
      <div className={styles.floor} />
      <div className={styles.mainColumn} />
      <div className={styles.lightStreamContainer}>
        {beams.map((beam) => (
          <div
            key={beam.id}
            className={`${styles.lightBeam} ${beam.type === 'primary' ? styles.primary : styles.secondary}`}
            style={beam.style}
          />
        ))}
      </div>
    </div>
  );
}
