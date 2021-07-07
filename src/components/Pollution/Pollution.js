import React from 'react';

import styles from './Pollution.module.scss';
import eco from './eco.jpg';
import good from './Good.svg';
import bad from './Bad.svg';

const Pollution = () => {
  return (
    <div className={styles.pollution}>
      <div className={styles.title}>
        <span>5</span>
        <h2>Низкие выбросы</h2>
      </div>
      <div className={styles.pollutionSubtitle}>
        <img src={eco} alt='ECO' width='192' height='94' />
        <p className={styles.pollutionSubtitle_p}>
        Конденсационные котлы ADISA бережно относятся к окружающей среде.
        </p>
      </div>
      <div className={styles.pollutionIll}>
        <div>
          <img src={good} alt='GOOD' width='520' height='352' />
          <img src={bad} alt='BAD' width='520' height='352' />
        </div>
        <div className={styles.illNames}>
          <p className={styles.illNameOne}>Котел ADISA</p>
          <p className={styles.illNameTwo}>Обычный котел</p>
        </div>
      </div>
      <div className={styles.pollutionDescr}>
        NOx: менее 10ppm. CO: менее 50ppm. Высота и затраты на дымоход в разы меньше.
      </div>
      <button className={styles.buttonCalculation}>ПРОСЧИТАТЬ КОТЕЛЬНУЮ</button>
    </div>
  );
};

export default Pollution;
