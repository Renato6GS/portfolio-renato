import { useState } from 'react';

import Loader from 'components/Loader';
import { getDataForm } from 'utils/getDataForm';
import { sendEmail } from 'utils/sendEmail';
import styles from './styles.module.css';
import { notifyError, notifySuccess } from 'utils/typeOfToast';
import Toast from 'components/Toast';

export default function Form() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const { userObj } = getDataForm({ form: e.target });
    try {
      const { name, email, message } = userObj;
      sendEmail({ name, email, message }).then((res) => {
        return res ? notifySuccess() : notifyError();
      });
    } catch (error) {
      notifyError();
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
              Your name (required)
            </label>
            <input
              className={styles.inputText}
              type='text'
              name='user[name]'
              id='nameUser'
              placeholder='E.g.: John Doe'
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor='emailUser'>
              Your email (required)
            </label>
            <input
              className={styles.inputText}
              type='email'
              name='user[email]'
              id='emailUser'
              placeholder='E.g.: John@gmail.com'
              required
            />
          </div>
        </div>
        <div className={styles.formGroupAria}>
          <label className={styles.label} htmlFor='messageUser'>
            Your message (required)
          </label>
          <textarea
            className={`${styles.inputText} ${styles.textarea}`}
            name='user[message]'
            id='messageUser'
            cols='30'
            rows='10'
            placeholder='When you graduate...'
            required></textarea>
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.btnSubmit} type='submit'>
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}
