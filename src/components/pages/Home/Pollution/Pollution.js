import React from 'react';
import { ReactSVG } from 'react-svg';

import styles from './Pollution.module.scss';
import eco from './eco.jpg';
import good from './Good.svg';
import bad from './Bad.svg';

const Pollution = ({ data }) => {
  return (
     <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.titleNumber}>{data.title.number}</div>
        <h2 className={styles.titleText}>{data.title.text}</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.pollutionSubtitle}>
           <img src={eco} alt='ECO' className={styles.eco} />
           <div className={styles.pollutionSubtitleText}>
           {data.pollutionSubtitleText}
           </div>
        </div>
        <div className={styles.pollutionChart}>
          <div className={styles.goodCgart}>
            <ReactSVG src={good} className={styles.good} />
            <div className={styles.chartNameOne}>{data.chartNames[0]}</div>
          </div>
          <div className={styles.badChart}>
            <ReactSVG src={bad} className={styles.bad} />
            <div className={styles.chartNameTwo}>{data.chartNames[1]}</div>
          </div>
        </div>
        <div className={styles.pollutionDescr} dangerouslySetInnerHTML={{__html: data.pollutionDescr}}></div>
      </div>
     </div>
   );
 };

 export default Pollution;
