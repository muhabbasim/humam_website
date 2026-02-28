import {useTranslations} from 'next-intl';
import Button from '@/components/ui/Button';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  const t = useTranslations('FinalCTA');

  return (
    <section className={styles.wrapper}>
      <div className={styles.bgPattern}></div>
      <div className={`container ${styles.content}`}>
        <h2>{t('title')}</h2>
        <Button href="/contact" variant="outline">
          {t('cta')}
        </Button>
      </div>
    </section>
  );
}
