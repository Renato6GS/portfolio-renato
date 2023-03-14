import { useI18N } from 'context/i18n';
import styles from './styles.module.css';

export default function ButtonCTA({ children }) {
  const { t } = useI18N();

  return (
    <a href={t('CV_URL')} className={styles.btn} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
