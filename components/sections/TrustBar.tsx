import React from 'react';
import styles from './TrustBar.module.css';

const CLIENTS = [
  'Ministry of Tourism',
  'Saudi Airlines Catering',
  'McDonald\'s',
  'Sunbulah Group',
  'Al Kabeer',
  'Lulu\'s',
  'Taifah Catering',
  'Anjum'
];

export default function TrustBar() {
  return (
    <section className={styles.trustBar}>
      <div className={styles.scrollContainer}>
        <div className={styles.marquee}>
          {CLIENTS.map((client, idx) => (
            <React.Fragment key={idx}>
              <span className={styles.client}>{client}</span>
              <span className={styles.separator}>✦</span>
            </React.Fragment>
          ))}
          {/* Duplicate for seamless scrolling loop */}
          {CLIENTS.map((client, idx) => (
            <React.Fragment key={`copy-${idx}`}>
              <span className={styles.client}>{client}</span>
              <span className={styles.separator}>✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
