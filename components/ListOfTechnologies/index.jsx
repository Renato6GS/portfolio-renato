import Image from 'next/image';

import styles from './styles.module.css';

export default function ListOfTechnologies({ technologies }) {
  return (
    <div className={styles.listOfTechnologiesContainer}>
      {technologies.map(({ key, name, logo, url }) => {
        return (
          <a key={key} className={styles.link} href={url} target='_blank' rel='noopener noreferrer'>
            <Image src={logo} width='24' height='24' alt={name} />
            {name}
          </a>
        );
      })}
    </div>
  );
}
