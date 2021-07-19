import React from 'react';

import Title from 'components/common/Title/Title';
import styles from './Pollution.module.scss';
import eco from './img/eco.jpg';
import { ReactComponent as Good } from './img/Good.svg';
import { ReactComponent as Bad } from './img/Bad.svg';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';

const Pollution = ({ data }) => {
  return (
     <div className={styles.container}>
      <Title title={data.title} number="5" />
      <div className={styles.content}>
        <div className={styles.pollutionSubtitle}>
           <div className={styles.ecoImg}><img src={eco} alt={data.ecoAlt} className={styles.eco} /></div>
           <div className={styles.pollutionSubtitleText}>
           {data.pollutionSubtitleText}
           </div>
        </div>
        <div className={styles.pollutionChart}>
          <div className={styles.goodChart}>
            <Good className={styles.good} />
            <div className={styles.chartNameOne}>{data.chartNameAdisa}</div>
          </div>
          <div className={styles.badChart}>
            <Bad className={styles.bad} />
            <div className={styles.chartNameTwo}>{data.chartNameCommon}</div>
          </div>
        </div>
        <div className={styles.pollutionDescr}>{ parseStrWithBoldElems(data.pollutionDescr) }</div>
      </div>
     </div>
   );
 };

 export default Pollution;
