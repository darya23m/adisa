import React from 'react';

import styles from './Repairs.module.scss';
import service from './Service.svg';

const Repairs = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.titleNumber}>{data.title.number}</div>
        <h2 className={styles.titleText}>{data.title.text}</h2>
      </div>
      <div className={styles.content}>
        {/* <ReactSVG src={service} alt='SERVICES' width='428' height='372' /> */}
        <p className={styles.repairBlockText}>{data.repairBlockText}
        <a href='#Services' className={styles.services}>{data.services}</a>
        </p>
      </div>
    </div>
  );
};

export default Repairs;
