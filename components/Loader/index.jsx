import styles from './styles.module.css';

export default function Loader() {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
      <span className={styles.label}>Enviando correo...</span>
    </div>
  );
}
