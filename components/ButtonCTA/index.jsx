import styles from './styles.module.css';

export default function ButtonCTA({ children }) {
  return (
    <a
      href='https://docs.google.com/document/d/1FtUEsZK2coWCr-Lb0j_dEklNS5yRxAbBVWRcTMVBPfI/edit?usp=sharing'
      className={styles.btn}
      target='_blank'
      rel='noopener noreferrer'>
      {children}
    </a>
  );
}
