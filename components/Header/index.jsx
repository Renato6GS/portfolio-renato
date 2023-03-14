import { useI18N } from 'context/i18n';
import Image from 'next/image';
import { ChangeLanguageDropDown } from 'components/ChangeLanguageDropDown';

import styles from './styles.module.css';
import Avatar from 'components/Avatar';
import ButtonCTA from 'components/ButtonCTA';

export default function Header() {
  const { t } = useI18N();

  return (
    <header className={styles.header} id="home">
      <header className={styles.headerMenu}>
        <ChangeLanguageDropDown />
      </header>
      <main className={styles.headerMain}>
        <Avatar
          src={'RENATO'}
          width="225"
          height="225"
          alt="Foto de Renato Granados"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALiSURBVHgBdVRbcts6DAUJPqxYjhPPJOk4vvenM/3JJu56u4q7CP/2q64bx61TR7IkUiRYUHE8aZtCA4EDgYd4HArgL5JSEqwyffyIbHFYP/vEW/Hi981HHw663SpAlDDLX2eRX681CSHSH0D5RDZyvV6b+XxuoWkK1/eFLaQeAkj7NiXnvW+m02nHnj4DvoCJV5kgbDYWyrL0mi5NVJdB9hfUU8FhQgrVgJR7wrAzffdjU1N1c3PjXsDEKZvVyh4u7VSDukqAC0lpEWN8x10pKSbGgUoKea9RrWKKKzO+3PDWJ1bHQKSOlSEsFiPtq4vUhX8Jwoc+hvehD/MYw3nOWCrcK1TrpOFMKgXeV96YSX/sl1fHshiwPZMRZj7BgkJ474P70HXdbR/6MiUCVKq2ZlTmU42ABqPYt3FXF8WsyRW9ZMSN9qPY0wWIdO1juG2dmx+awzvnXEEpCmvteJiUxFpKvNfWrqSE0XMS4POkxG63Q18Hwx0dpUgTSnTuez/pele0vrWtd7bzrvAhlEQ0iZQmUaRC9NI8Pj7iMRMYaML1JkQF9PwknhAXLYDYguK1xDy8Yc5S8chzZwyceJTTYmck13UBEVrU+glDfFJaV8YWJQMSMeTI6Aa1qZRR+xSgTlq0Nmm/D218AQK4ugqZgW0V9xLlBpX8YpMdJz7eRlPmgWjFwMasUaqvRpl7FOIHUN1d8d6cjMpkWi6XdHd31xSm+u6cWGmhx7kcRKxC1NOhB6ierGYgEJ+YC18IaQeGSfo8/hOzcaj4cDgHDdcuwW304R+icM1NmOROMrcrmeQWpfgsAJmQ8AAwzoT0nEz89YoAWDg8lDCeXkCgWYjEVySc8cXlGGqJuVNY+x1M/8ggNcd3GeTUo1weCzv+dzD+j2C/960xdSHDAxg0fjjN9iCo5fFyOd/4jo09byR4S07/oOXSsC1S2k7Yng+6HdbsS/rYil9EvAX2t2/w2z/otfwEdCnB3kZE0NsAAAAASUVORK5CYII="
        />
        <h1 className={styles.title}>RENATO GRANADOS</h1>
        <h2 className={styles.profession}>{t('PROFESSION')}</h2>
        <div className={styles.linksContainer}>
          <a
            href="https://github.com/renato6gs"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer">
            <Image src={'/icons/github.svg'} width={'32'} height={'32'} alt="GitHub Renato" />
          </a>
          <a
            href="https://www.linkedin.com/in/renato-granados-636935233/"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer">
            <Image src={'/icons/linkedin.svg'} width={'32'} height={'32'} alt="LinkedIn Renato" />
          </a>
        </div>
        <ButtonCTA>{t('BTN_LABEL')}</ButtonCTA>
      </main>
      <a className={styles.linkAboutMe} href="#aboutMe">
        {t('ABOUT_ME')}
        <Image src="/icons/arrow-down.svg" width={'22'} height={'22'} alt={'Arrow to About me'} />
      </a>
    </header>
  );
}
