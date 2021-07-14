import React from 'react';

import styles from './Power.module.scss';
import plans from './Plans.jpg';

const Power = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>{data.title.number}</span>
        <h2>{data.title.text}</h2>
      </div>
      <p className={styles.textFirst}>{data.textFirst}</p>
      <p className={styles.textSecond} dangerouslySetInnerHTML={{__html: data.textSecond}}></p>
      <div className={styles.poverPlan}>
        <h3 className={styles.subTitle}>{data.subTitle}</h3>
        <div className={styles.planNames}>
          <p className={styles.picNameFirst}>{data.picNameFirst}</p>
          <p className={styles.picNameSecond}>{data.picNameSecond}</p>
        </div>
        <img src={plans} alt="PLANS"/>
        <div className={styles.blueRect}></div>
        <i className={styles.info}>{data.info}</i>
      </div>
    </div>
  );
};

export default Power;
