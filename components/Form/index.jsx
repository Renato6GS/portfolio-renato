import { useState } from 'react';

import Loader from 'components/Loader';
import { getDataForm } from 'utils/getDataForm';
import { sendEmail } from 'utils/sendEmail';
import styles from './styles.module.css';
import { notifyError, notifySuccess } from 'utils/typeOfToast';
import Toast from 'components/Toast';
import { useI18N } from 'context/i18n';

export default function Form() {
  const [loading, setLoading] = useState(false);
  const { t } = useI18N();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const { userObj } = getDataForm({ form: e.target });
    try {
      const { name, email, message } = userObj;
      sendEmail({ name, email, message }).then((res) => {
        return res ? notifySuccess({ message: t('SEND_SUCCESS') }) : notifyError({ message: t('SEND_ERROR') });
      });
    } catch (error) {
      notifyError({ message: t('SEND_ERROR') });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <Toast />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.nameEmailContainer}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor='nameUser'>
              {t('FIELD_NAME')}
            </label>
            <input
              className={styles.inputText}
              type='text'
              name='user[name]'
              id='nameUser'
              placeholder={t('FIELD_NAME_PLACEHOLDER')}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor='emailUser'>
              {t('FIELD_EMAIL')}
            </label>
            <input
              className={styles.inputText}
              type='email'
              name='user[email]'
              id='emailUser'
              placeholder={t('FIELD_EMAIL_PLACEHOLDER')}
              required
            />
          </div>
        </div>
        <div className={styles.formGroupAria}>
          <label className={styles.label} htmlFor='messageUser'>
            {t('FIELD_MESSAGE')}
          </label>
          <textarea
            className={`${styles.inputText} ${styles.textarea}`}
            name='user[message]'
            id='messageUser'
            cols='30'
            rows='10'
            placeholder={t('FIELD_MESSAGE_PLACEHOLDER')}
            required></textarea>
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.btnSubmit} type='submit'>
            {t('SEND_BTN')}
          </button>
        </div>
      </form>
    </>
  );
}
