import { useState } from 'react';
import { useI18N } from 'context/i18n';
import styles from './styles.module.css';

import { RadioGroup } from '@headlessui/react';
import Image from 'next/image';
import { NAVBAR } from 'constans/NAVBAR';

export default function StickyNav() {
  const { t } = useI18N();

  let [element, setElement] = useState('startup');

  return (
    <nav className={styles.stickyContainer}>
      <ul className={styles.ulDesktop}>
        <li className={styles.li}>
          <a className={styles.anchor} href='#home'>
            {t('NAV_HOME')}
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.anchor} href='#aboutMe'>
            {t('NAV_ABOUT')}
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.anchor} href='#projects'>
            {t('NAV_PROJECTS')}
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.anchor} href='#nextProjects'>
            {t('NAV_NEXT_PROJECTS')}
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.anchor} href='#inspirations'>
            {t('NAV_NEXT_INSPIRATION')}
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.anchor} href='#contact'>
            {t('NAV_CONTACT')}
          </a>
        </li>
      </ul>

      {/* TODO: CREAR UN OBJETO PARA ESTO Y LUEGO HACERLE UN .MAP */}
      <ul className={styles.ulMobile}>
        <RadioGroup value={element} onChange={setElement} className={styles.radioGroup}>
          {NAVBAR.map(({ key, name, href, icon }) => {
            return (
              <RadioGroup.Option key={key} value={key} className={styles.radioOption}>
                {({ checked }) => {
                  return (
                    <li className={`${styles.liMobile} ${checked && styles.activeMenu}`}>
                      <a className={styles.anchorMobile} href={href}>
                        <Image
                          className={checked ? styles.activeIcon : styles.iconNav}
                          src={icon}
                          width='24'
                          height='24'
                          alt='Me'
                        />
                        {name[t('PROJECT_LANGUAGE')]}
                      </a>
                    </li>
                  );
                }}
              </RadioGroup.Option>
            );
          })}
        </RadioGroup>
      </ul>
    </nav>
  );
}
