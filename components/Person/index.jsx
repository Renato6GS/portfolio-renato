import Avatar from 'components/Avatar';
import { useI18N } from 'context/i18n';
import Image from 'next/image';

import styles from './styles.module.css';

export default function Person({ person = {} }) {
  const { t } = useI18N();
  const { name = '', description = {}, socialMedia = [], image = '' } = person;

  return (
    <div className={styles.person}>
      <Avatar width='150' height='150' alt='' src={image} />
      <h4 className={styles.title}>{name}</h4>
      <div className={styles.socialMedia}>
        {socialMedia.map(({ key, url, logo }) => {
          return (
            <a href={url} key={key} target='_blank' rel='noopener noreferrer'>
              <Image className={styles.logo} src={logo} width='24' height='24' alt='' />
            </a>
          );
        })}
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>{description[t('PROJECT_LANGUAGE')]}</p>
      </div>
    </div>
  );
}
