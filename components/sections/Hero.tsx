'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import styles from './Hero.module.css';
import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

export default function Hero() {
  const t = useTranslations('HomePage');
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1] as const, // Custom ease mirroring CSS cubic-bezier
      },
    },
  };

  return (
    <section className={styles.hero}>
      {/* Background Masked Area */}
      <div className={styles.background}>
        <div className={styles.overlay}></div>
      </div>

      <div className={`container ${styles.content}`}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={styles.motionWrapper}
        >
          <motion.h1 variants={itemVariants} className={styles.title}>
            {t('title')}
          </motion.h1>
          <motion.p variants={itemVariants} className={styles.subtitle}>
            {t('subtitle')}
          </motion.p>
          <motion.p variants={itemVariants} className={styles.description}>
            {t('description')}
          </motion.p>

          <motion.div variants={itemVariants} className={styles.actions}>
            <Button href="/contact" variant="primary">
              {t('ctaPrimary', {default: 'Discuss Your Project'})}
            </Button>
            <Button href="/services" variant="outline">
              {t('ctaSecondary', {default: 'Explore Our Services'})}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
