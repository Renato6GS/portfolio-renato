import ListOfTechnologies from 'components/ListOfTechnologies';
import { PROJECTS } from 'constans/PROJECTS';
import { useI18N } from 'context/i18n';
import Image from 'next/image';

import styles from './styles.module.css';

export default function ListOfProjects() {
  const { t } = useI18N();

  return (
    <div className={styles.listOfProjectsContainer}>
      {PROJECTS.map(({ key, title, description, img, size, urlDemo, urlCode, technologies }) => {
        return (
          <article key={key} className={styles.projectContainer}>
            <div className={styles.projectImageContainer}>
              <Image src={img} alt={title} width={size.width} height={size.height} />
            </div>
            <div className={styles.projectInfoContainer}>
              <div className={styles.firstDescription}>
                <h3 className={styles.projectTitle}>{title}</h3>
                <p className={styles.projectDescription}>
                  {description[t('PROJECT_LANGUAGE')] || 'Description no found'}
                </p>
                <div className={styles.linksContainer}>
                  {urlDemo && (
                    <a className={styles.link} href={urlDemo}>
                      Demo
                      <Image src={'/icons/arrowToRight.svg'} width='24' height='24' alt={'Demo of the project'} />
                    </a>
                  )}
                  {urlCode && (
                    <a className={styles.link} href={urlCode}>
                      GitHub
                      <Image src={'/icons/github.svg'} width='24' height='24' alt={'Link to code source'} />
                    </a>
                  )}
                </div>
              </div>
              <div className={styles.technologiesContainer}>
                <span className={styles.techTitle}>{t('TECHNOLOGIES')}</span>
                <ListOfTechnologies technologies={technologies} />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
