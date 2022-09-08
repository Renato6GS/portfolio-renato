import { useI18N } from 'context/i18n';
import Image from 'next/image';

import styles from './styles.module.css';

export default function AboutMe() {
  const { t } = useI18N();

  return (
    <section id='aboutMe' className={styles.aboutContainer}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.imageMe}
            src={'/img/aboutMe.jpg'}
            width='400'
            height='550'
            alt='Renato Granados'
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMZSURBVHgBbVTbbhs3EJ0Z7kUXOxYi1xfBadoUBQoI/ZO+6kf6A5G/pW/Se/sW560o0D4V7kOQFkbsxJZcybotl0tyOKUku0mbEODOLpdzOGfOcAD+N0QEBQD7/T6J9Glr45oAwifGh4trJ/zu+FjZb4vk2XKfXpfX5OyO5CcVX139zHEP93qDgLg+478AOBgMaOfmJqk/4fpuvVEvfVFXnFMZCtHzuVlcT/WquqyuYWWfPz/jBxB1Hza9efEiNXu0wwz7luXIe+xUzh0tlmWr1Ka+DEr9vUrDodrnv25/CMPhH/AvQERTqyxr7iTcdkhPnJOvHMvXlXFPI8hBUfqdUnsMAezNRFu8nPkff3nNp6cAydp/Pp+n7Xa9seK8Lc4/JYRvRPhz9nbXGS4r59/qyipfuZJqqZ6WX1bR2a2D3wAcHaVJTHS90OYxC3RA+Athfuad23Ou0mxd7pm0QD5O0U/MI1n8ed6L+RsCSb8fc/CY9GxZW2izu1iU7dlMH0zulgfTWXE4X5qDVekObBXpWddynNSKwiTdbncjQDI8P0dzcqI4yxIvkjt2De8lTlcL3ucx2SFBqRFBI08oDyJpjUUdv3u3Beh1u/L9fA6yXCJgAhFArGdhzyDBg0IIISFMFSDHr+Re99/uLZ1GCsaMxATjq0pbY2xpKq+t89pzMCzxV2AdQtAxKmO8dqYs+KGQqB8fh9hytELjLS7Y4wQC3gqoOHFERGPE5BaQJgI0jxHFk7TvvHq1KaR1RHKhtc8gK7zAFAXfItEuUoQCfBTfKyG5irJeBpVOfJAVuoY7/6zxHqAoitBqtkqr7MQ4eINIoojuAFxTUNnIfixEl8rJmDBbqaOR67Z/kuFwCwBREn9xcWEy1Z5hFYAaQYOoUWDJMSGvhBaZgkm9lk5tmpa//1ry2Vm8q318f5l6vR41m80UoBUlyxqczOpRMZWmEtBak+d56ZwrI3fbf/lyncQNBXpoA4PBkCMVl2W62Ntzd80kGSXcvM4BbmKpT8bj8bLT6ZgPnT851s1j3UQ2Cm3tOkrcNhX5qKn8AxkkFIUMebLTAAAAAElFTkSuQmCC'
          />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.quotesContainer}>
            <Image src={'/icons/quotes.svg'} width={98} height={98} alt={'Quotes'} />
          </div>
          <p className={styles.description}>{t('DESCRIPTION_PART_1')}</p>
          <p className={styles.description}>{t('DESCRIPTION_PART_2')}</p>
        </div>
      </div>
    </section>
  );
}
