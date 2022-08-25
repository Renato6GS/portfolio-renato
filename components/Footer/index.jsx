import ButtonCTA from 'components/ButtonCTA';
import { useI18N } from 'context/i18n';
import Image from 'next/image';
import styles from './styles.module.css';

export default function Footer() {
  const { t } = useI18N();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linksContainer}>
          <ButtonCTA>{t('BTN_LABEL')}</ButtonCTA>
          <div className={styles.socialContainer}>
            <a
              href='https://github.com/renato6gs'
              className={styles.socialLink}
              target='_blank'
              rel='noopener noreferrer'>
              <Image src={'/icons/github.svg'} width={'32'} height={'32'} alt='GitHub Renato' />
            </a>
            <a
              href='https://www.linkedin.com/in/renato-granados-636935233/'
              className={styles.socialLink}
              target='_blank'
              rel='noopener noreferrer'>
              <Image src={'/icons/linkedin.svg'} width={'32'} height={'32'} alt='LinkedIn Renato' />
            </a>
          </div>
        </div>
        <span className={styles.desc}>{t('AUTHOR')}</span>
        <span className={styles.desc}>
          {t('COPYRIGHT')}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/renato6gs/portfolio-renato'
            className={styles.sourceCode}>
            {t('COPYRIGHT_LINK')}
          </a>
        </span>
      </div>
    </footer>
  );
}
