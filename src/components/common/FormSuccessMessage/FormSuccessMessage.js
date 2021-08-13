import React from 'react';

import styles from './FormSuccessMessage.module.scss';
import { ReactComponent as Check } from './img/check.svg';

const FormSuccessMessage = () => {
  return (
    <div className={styles.container}>
      <Check className={styles.check} />
      <div className={styles.description}>Ваш запрос успешно отправлен. Мы свяжемся с вами в ближайшее время!</div>
    </div>
  );
};

export default FormSuccessMessage;
