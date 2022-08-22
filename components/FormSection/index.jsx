import Form from 'components/Form';
import { useI18N } from 'context/i18n';
import styles from './styles.module.css';

export default function FormSection() {
  const { t } = useI18N();

  return (
    <section className={styles.formSection}>
      <div className={styles.container}>
        <div className={styles.instructionsContainer}>
          <h2 className={styles.title}>{t('CONTACT_ME')}</h2>
          <p className={styles.instructions}>
            {t('CONTACT_DESC')}{' '}
            <a className={styles.linkedIn} href='https://www.linkedin.com/in/renato-granados-636935233/'>
              LinkedIn
            </a>
            .
          </p>
        </div>
        <div className={styles.formContainer}>
          <Form />
        </div>
      </div>
    </section>
  );
}
