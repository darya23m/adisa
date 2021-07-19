import React from 'react';

import Title from 'components/common/Title/Title';
import styles from './Repairs.module.scss';
import { ReactComponent as Service } from './img/Service.svg';

const Repairs = ({ data }) => {
  return (
    <div className={styles.container}>
      <Title title={data.title} number="7" />
      <div className={styles.content}>
        <div className={styles.serviseImg}><Service className={styles.service} /></div>
        <div className={styles.text}>{data.repairBlockText}
          <a href='#Services' className={styles.services}>{data.services}</a>
        </div>
      </div>
    </div>
  );
};

export default Repairs;
