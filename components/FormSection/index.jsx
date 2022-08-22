import Form from 'components/Form';
import styles from './styles.module.css';

export default function FormSection() {
  return (
    <section className={styles.formSection}>
      <div className={styles.container}>
        <div className={styles.instructionsContainer}>
          <h2 className={styles.title}>Contact with Me</h2>
          <p className={styles.instructions}>
            If you have any questions about me or there is simply something you want to tell me, you can contact me
            through this form or on{' '}
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
