import React from 'react';

import styles from './Repairs.module.scss';
import service from './Service.svg';

const Repairs = () => {
  return (
    <div className={styles.repairs}>
      <div className={styles.title}>
        <span>7</span>
        <h2>Обслуживание и ремонт</h2>
      </div>
      <div className={styles.repairBlock}>
        <img src={service} alt='SERVICES' width='428' height='372'></img>
        <p className={styles.repairBlockText}>Котлы спроектированы по промышленному стандарту для<br /> простого доступа ко всем элементам котла. Все<br /> необходимые запчасти доступны 24/7 в наших<br />
        <a href='#Services' className={styles.services}>СЕРВИСНЫХ ОРГАНИЗАЦИЯХ.</a>
        </p>
      </div>
      <button className={styles.buttonCalculation}>ПРОСЧИТАТЬ КОТЕЛЬНУЮ</button>
    </div>
  );
};

export default Repairs;
