import React from 'react';

import Title from 'components/common/Title/Title';
import styles from './Power.module.scss';
import plans from './img/Plans.jpg';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';

const Power = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title title={data.title} number="2" />
        <p className={styles.textFirst}>{data.textFirst}</p>
        <p className={styles.textSecond}>{ parseStrWithBoldElems(data.textSecond) }</p>
        <div className={styles.plan}>
          <div className={styles.subTitle}>{data.subTitle}</div>
          <div className={styles.planNames}>
            <div className={styles.picNameFirst}>{data.picNameFirst}</div>
            <div className={styles.picNameSecond}>{data.picNameSecond}</div>
          </div>
          <div className={styles.plansImg}>
            <img src={plans} alt="PLANS" className={styles.plans}/>
            <div className={styles.blueRect} dangerouslySetInnerHTML={{__html: data.blueRect}}></div>
          </div>
          <i className={styles.info}>{data.info}</i>
        </div>
      </div>
    </div>
  );
};

export default Power;
