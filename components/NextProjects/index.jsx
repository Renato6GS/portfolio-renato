import { useI18N } from 'context/i18n';
import Image from 'next/image';
import styles from './styles.module.css';

export default function NextProjects() {
  const { t } = useI18N();

  return (
    <section id='nextProjects' className={styles.nextProjectsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('NEXT_PROJECT')}</h2>
        <div className={styles.arrowsContainer}>
          <Image src={'/icons/arrows.svg'} width='400' height='100' alt='Arrows pointing to projects' />
        </div>
        <div className={styles.projects}>
          <div className={styles.project}>
            <Image src={'/icons/star.svg'} width='64' height='64' alt='Shining star' />
            <h4 className={styles.titleProject}>{t('NEXT_PROJECT_1_TITLE')}</h4>
            <p className={styles.descriptionProject}>
              {t('NEXT_PROJECT_1_DESC_1')}
              <span className={styles.descriptionBold}>{t('NEXT_PROJECT_1_DESC_EMPHASIS')}</span>
              {t('NEXT_PROJECT_1_DESC_2')}
            </p>
          </div>
          <div className={styles.project}>
            <Image src={'/icons/briefcase.svg'} width='64' height='64' alt='Briefcase with reports' />
            <h4 className={styles.titleProject}>{t('NEXT_PROJECT_2_TITLE')}</h4>
            <p className={styles.descriptionProject}>
              {t('NEXT_PROJECT_2_DESC_1')}
              <span className={styles.descriptionBold}>{t('NEXT_PROJECT_2_DESC_EMPHASIS')}</span>
              {t('NEXT_PROJECT_2_DESC_2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
