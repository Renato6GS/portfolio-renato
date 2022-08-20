import ListOfProjects from 'components/ListOfProjects';
import { useI18N } from 'context/i18n';
import styles from './styles.module.css';

export default function Projects() {
  const { t } = useI18N();

  return (
    <section className={styles.projectsSection} id='developedProjects'>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('TITLE_PROJECTS') || 'Developed Projects'}</h2>
        <ListOfProjects />
      </div>
    </section>
  );
}
