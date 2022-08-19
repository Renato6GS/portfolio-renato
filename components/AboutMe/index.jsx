import { useI18N } from 'context/i18n';
import Image from 'next/image';

import styles from './styles.module.css';

export default function AboutMe() {
  const { t } = useI18N();

  return (
    <section id='aboutMe' className={styles.aboutContainer}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image className={styles.imageMe} src={'/img/aboutMe.jpg'} width='400' height='550' alt='Renato Granados' />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.quotesContainer}>
            <Image src={'/icons/quotes.svg'} width={98} height={98} alt={'Quotes'} />
          </div>
          <p className={styles.description}>{t('DESCRIPTION_PART_1')}</p>
          <p className={styles.description}>{t('DESCRIPTION_PART_2')}</p>
        </div>
      </div>
    </section>
  );
}
