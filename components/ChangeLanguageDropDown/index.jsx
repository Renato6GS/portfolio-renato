import { useI18N } from 'context/i18n';
import { Menu } from '@headlessui/react';

import styles from './styles.module.css';
import Image from 'next/image';
import { forwardRef } from 'react';
import Link from 'next/link';

const MyLinkMenu = forwardRef((props, ref) => {
  let { href, children, locale, ...rest } = props;
  return (
    <Link href={href} locale={locale}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});

export function ChangeLanguageDropDown() {
  const { t } = useI18N();

  return (
    <Menu>
      <Menu.Button className={styles.btnMenu}>
        <Image src={t('IDIOM_ICON')} width='19' height={'19'} alt={'Icon language'} />
        {t('IDIOM')}
        <Image className={styles.caretDown} src={'/icons/caret-down.svg'} width='19' height={'19'} alt={'Caret down'} />
      </Menu.Button>
      <Menu.Items className={styles.menuItems}>
        <Menu.Item className={styles.menuItem}>
          {() => (
            <MyLinkMenu href='/' locale='en'>
              <span>{t('ENGLISH')}</span>
            </MyLinkMenu>
          )}
        </Menu.Item>
        <Menu.Item className={styles.menuItem}>
          {() => (
            <MyLinkMenu href='/es' locale='es'>
              <span>{t('SPANISH')}</span>
            </MyLinkMenu>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
