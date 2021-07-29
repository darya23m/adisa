import React from 'react';

import Title from 'components/common/Title/Title';
import styles from './Power.module.scss';
import planFirst from './img/Plans1.jpg';
import planSecond from './img/Plans2.jpg';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';

const Power = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title title={data.title} number="2" isWide />
        <div className={styles.textFirst}>{data.textFirst}</div>
        <div className={styles.textSecond}>{ parseStrWithBoldElems(data.textSecond) }</div>
        <div className={styles.subTitle}>{data.subTitle}</div>
        <div className={styles.plan}>
          <div className={styles.planItemFirst}>
            <div className={styles.picNameFirst}>{data.picNameFirst}</div>
            <div className={styles.planFirst}><img src={planFirst} alt="PLANS" className={styles.planImg}/></div>
          </div>
          <div className={styles.planItemSecond}>
            <div className={styles.picNameSecond}>{data.picNameSecond}</div>
            <div className={styles.planSecond}><img src={planSecond} alt="PLANS" className={styles.planImg}/></div>
            <div className={styles.blueRect} dangerouslySetInnerHTML={{__html: data.blueRect}}></div>
          </div>
        </div>
        <i className={styles.info}>{data.info}</i>
      </div>
    </div>
  );
};

export default Power;
