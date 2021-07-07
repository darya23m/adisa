import React from 'react';

import styles from './Training.module.scss';

const Training = () => {
  return (
    <div className={styles.training}>
      <div className={styles.title}>
        <span>6</span>
        <h2>Бесплатное обучение новому на заводе</h2>
      </div>
      <p className={styles.trainingText}>Обслуживающий персонал наших постоянных клиентов проходит бесплатное<br /> обучение на заводе-изготовителе в Барселоне.</p>
      <button className={styles.buttonVideo}>ПОСМОТРЕТЬ ПОЛНОЕ ВИДЕО</button>
    </div>
  );
};

export default Training;