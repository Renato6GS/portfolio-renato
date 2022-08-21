import Person from 'components/Person';
import styles from './styles.module.css';

import { SOCIAL_MEDIA_PERSON } from 'constans/SOCIAL_MEDIA';

export default function Inpirations() {
  return (
    <section className={styles.inpirationsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>INSPIRATIONS</h2>
        <div className={styles.listOfPeople}>
          <Person person={SOCIAL_MEDIA_PERSON.midudev} />
          <Person person={SOCIAL_MEDIA_PERSON.cristina} />
          <Person person={SOCIAL_MEDIA_PERSON.bernardo} />
        </div>
      </div>
    </section>
  );
}
