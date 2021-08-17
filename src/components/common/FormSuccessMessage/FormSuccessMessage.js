import React from 'react';

import styles from './FormSuccessMessage.module.scss';
import { ReactComponent as Check } from './img/check.svg';

const FormSuccessMessage = ({ data }) => {
  return (
    <div className={styles.container}>
      <Check className={styles.check} />
      <div className={styles.description}>{data.message}</div>
    </div>
  );
};

export default FormSuccessMessage;
