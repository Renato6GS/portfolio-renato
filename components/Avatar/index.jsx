import Image from 'next/image';
import styles from './styles.module.css';

import { URL_IMG } from 'constans/URL_IMG';

export default function Avatar({ width, height, alt, src }) {
  return (
    <div className={styles.avatarContainer}>
      <Image className={styles.avatar} src={URL_IMG[src]} width={width} height={height} alt={alt} />
    </div>
  );
}
