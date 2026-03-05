import {Link} from '@/i18n/routing';
import {useTranslations} from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('Navbar');

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/brand/Humam-Logo-Short.svg" alt="Logo" width={100} height={50} />
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="/">{t('home')}</Link></li>
          <li><Link href="/about">{t('about')}</Link></li>
          <li><Link href="/services">{t('services')}</Link></li>
          {/* <li><Link href="/industries">{t('industries')}</Link></li> */}
          <li><Link href="/training-center">{t('training')}</Link></li>
          <li><Link href="/contact">{t('contact')}</Link></li>
        </ul>
        <div className={styles.actions}>
          <LanguageSwitcher />
          {/* <Link href="/dashboard" className={styles.loginBtn}>
            {t('login')}
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
