import ListOfTechnologies from 'components/ListOfTechnologies';
import { PROJECTS } from 'constans/PROJECTS';
import { useI18N } from 'context/i18n';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import styles from './styles.module.css';

export default function ListOfProjects() {
  const { t } = useI18N();
  const [showProjects, setShowProjects] = useState([]);

  useEffect(() => {
    setShowProjects(PROJECTS.slice(0, 3));
  }, []);

  const handleShowProjectsClick = () => {
    if (showProjects.length === PROJECTS.length) setShowProjects(PROJECTS.slice(0, 3));
    else setShowProjects(PROJECTS);
  };

  return (
    <div className={styles.listOfProjectsContainer}>
      {showProjects.map(
        ({
          key,
          title,
          description,
          img,
          imgBlur,
          size,
          urlDemo,
          urlCode,
          technologies,
          download,
          downloadTranslate,
        }) => {
          return (
            <article key={key} className={styles.projectContainer}>
              <div className={styles.projectImageContainer}>
                <a href={urlDemo} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={img}
                    alt={title}
                    width={size.width}
                    height={size.height}
                    placeholder="blur"
                    blurDataURL={imgBlur}
                  />
                </a>
              </div>
              <div className={styles.projectInfoContainer}>
                <div className={styles.firstDescription}>
                  <h3 className={styles.projectTitle}>{title}</h3>
                  <p className={styles.projectDescription}>
                    {description[t('PROJECT_LANGUAGE')] || 'Description no found'}
                  </p>
                  <div className={styles.linksContainer}>
                    {urlDemo && (
                      <a className={styles.link} href={urlDemo} target="_blank" rel="noopener noreferrer">
                        {download ? downloadTranslate[t('PROJECT_LANGUAGE')] : 'Demo'}
                        <Image src={'/icons/arrowToRight.svg'} width="24" height="24" alt={'Demo of the project'} />
                      </a>
                    )}
                    {urlCode && (
                      <a className={styles.link} href={urlCode} target="_blank" rel="noopener noreferrer">
                        GitHub
                        <Image src={'/icons/github.svg'} width="24" height="24" alt={'Link to code source'} />
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
        }
      )}
      <button className={styles.bthShowProjects} onClick={handleShowProjectsClick}>
        {showProjects.length === PROJECTS.length ? t('HIDE_PROJECTS') : t('SHOW_PROJECTS')}
      </button>
    </div>
  );
}
