import Image from 'next/image';
import styles from './styles.module.css';

import { URL_IMG } from 'constans/URL_IMG';

export default function Avatar({ width, height, alt, src, blurDataURL }) {
  return (
    <div className={styles.avatarContainer} style={{ width, height }}>
      <Image
        className={styles.avatar}
        src={URL_IMG[src]}
        width={width}
        height={height}
        alt={alt}
        placeholder='blur'
        blurDataURL={blurDataURL}
      />
    </div>
  );
}
