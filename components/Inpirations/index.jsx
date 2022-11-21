import Person from 'components/Person';
import styles from './styles.module.css';

import { SOCIAL_MEDIA_PERSON } from 'constans/SOCIAL_MEDIA';
import { useI18N } from 'context/i18n';

export default function Inpirations() {
  const { t } = useI18N();


  return (
    <section className={styles.inpirationsSection} id='inspirations'>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('TITLE_INPIRATIONS')}</h2>
        <div className={styles.listOfPeople}>
          <Person person={SOCIAL_MEDIA_PERSON.midudev} />
          <Person person={SOCIAL_MEDIA_PERSON.cristina} />
          <Person person={SOCIAL_MEDIA_PERSON.bernardo} />
        </div>
      </div>
    </section>
  );
}
