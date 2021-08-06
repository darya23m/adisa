import React from 'react';
import styles from './CalculateForm.module.scss';

const CalculateForm = () => {
  return (
    <>
      <div className={styles.title}>Просчитать котельную</div>
      <div className={styles.description}>
        Введите е-мейл или номер телефона, и мы свяжемся с вами удобным для вас способом
      </div>
      <div className={styles.inputWraper}>
        <label className={styles.label}>Введите ваше имя</label>
        <input className={styles.input} type="text" name="name" />
      </div>
      <div className={styles.inputWraper}>
        <label className={styles.label}>Введите ваш e-mail или номер телефона</label>
        <input className={styles.input} type="text" name="contact" />
      </div>
      <button type='submit' className={styles.calculate}>Просчитать котельную</button>
    </>
  );
}

export default CalculateForm;
