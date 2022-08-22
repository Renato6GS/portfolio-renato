import { useI18N } from 'context/i18n';
import styles from './styles.module.css';

export default function StickyNav() {
  const { t } = useI18N();

  return (
    <nav className={styles.stickyContainer}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a className={styles.anchor} href='#home'>
            {t('NAV_HOME')}
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.anchor} href='#aboutMe'>
            {t('NAV_ABOUT')}
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.anchor} href='#projects'>
            {t('NAV_PROJECTS')}
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.anchor} href='#nextProjects'>
            {t('NAV_NEXT_PROJECTS')}
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.anchor} href='#inspirations'>
            {t('NAV_NEXT_INSPIRATION')}
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.anchor} href='#contact'>
            {t('NAV_CONTACT')}
          </a>
        </li>
      </ul>
    </nav>
  );
}
