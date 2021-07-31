import React from 'react';
import cx from 'classnames';

import Title from 'components/common/Title/Title';
import styles from './Pollution.module.scss';
import eco from './img/eco.jpg';
import { ReactComponent as LessPollutionIcon } from './img/less-pollution.svg';
import { ReactComponent as MorePollutionIcon } from './img/more-pollution.svg';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';

const Pollution = ({ data: { title, ecoAlt, ecoDescription, chartNameAdisa, chartNameCommon, pollutionDescription }}) => {
  return (
     <div className={styles.container}>
      <Title title={title} number="5" />
      <div className={styles.content}>
        <div className={styles.eco}>
           <div className={styles.ecoImgWrap}>
             <img src={eco} alt={ecoAlt} className={styles.ecoImg} />
           </div>
           <div className={styles.ecoDescription}>{ parseStrWithBoldElems(ecoDescription) }</div>
        </div>
        <div className={styles.pollutionCharts}>
          <div className={styles.chartWrap}>
            <LessPollutionIcon className={styles.chart} />
            <div className={cx(styles.chartName, styles.chartNameBlue)}>{ chartNameAdisa }</div>
          </div>
          <div className={styles.chartWrap}>
            <MorePollutionIcon className={styles.chart} />
            <div className={styles.chartName}>{ chartNameCommon }</div>
          </div>
        </div>
        <div className={styles.pollutionDescription}>{ parseStrWithBoldElems(pollutionDescription) }</div>
      </div>
     </div>
   );
 };

 export default Pollution;
