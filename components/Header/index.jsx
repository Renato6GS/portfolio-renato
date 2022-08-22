import { useI18N } from 'context/i18n';
import Image from 'next/image';
import { ChangeLanguageDropDown } from 'components/ChangeLanguageDropDown';

import styles from './styles.module.css';
import Avatar from 'components/Avatar';
import ButtonCTA from 'components/ButtonCTA';

export default function Header() {
  const { t } = useI18N();

  return (
    <header className={styles.header} id='home'>
      <header className={styles.headerMenu}>
        <ChangeLanguageDropDown />
      </header>
      <main className={styles.headerMain}>
        <Avatar src={'RENATO'} width='225' height='225' alt='Foto de Renato Granados' />
        <h1 className={styles.title}>LUIS RENATO GRANADOS OGALDEZ</h1>
        <h2 className={styles.profession}>{t('PROFESSION')}</h2>
        <div className={styles.linksContainer}>
          <a href='https://github.com/renato6gs' className={styles.socialLink}>
            <Image src={'/icons/github.svg'} width={'32'} height={'32'} alt='GitHub Renato' />
          </a>
          <a href='https://www.linkedin.com/in/renato-granados-636935233/' className={styles.socialLink}>
            <Image src={'/icons/linkedin.svg'} width={'32'} height={'32'} alt='LinkedIn Renato' />
          </a>
        </div>
        {/* <a
          href='https://docs.google.com/document/d/1FtUEsZK2coWCr-Lb0j_dEklNS5yRxAbBVWRcTMVBPfI/edit?usp=sharing'
          className={styles.btnCV}>
          {t('BTN_LABEL')}
        </a> */}
        <ButtonCTA>{t('BTN_LABEL')}</ButtonCTA>
      </main>
      <a className={styles.linkAboutMe} href='#aboutMe'>
        {t('ABOUT_ME')}
        <Image src='/icons/arrow-down.svg' width={'22'} height={'22'} alt={'Arrow to About me'} />
      </a>
    </header>
  );
}
