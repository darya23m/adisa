import React from 'react';

import Title from 'components/common/Title/Title';
import styles from './NoiseLvl.module.scss';
import { ReactComponent as NoiseChart } from './img/noiseChart.svg';
import boiler from './img/boiler.png';
import feature1 from './img/feature1.jpg';
import feature2 from './img/feature2.jpg';
import feature3 from './img/feature3.jpg';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';

const NoiseLvl = ({ data: {
  title, description, advantagesListTitle, advantagesList, boilerAlt, featureName1, featureAlt1,
  featureName2, featureAlt2, featureName3, featureAlt3
}}) => {
  const renderAdvantagesList = () =>
    advantagesList.map((curr, index) => <li key={index}>{ parseStrWithBoldElems(curr) }</li>)

  return (
    <div className={styles.container}>
      <Title title={title} number="3" />
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.infoText}>
            <p className={styles.text}>{ parseStrWithBoldElems(description) }</p>
            <div className={styles.listTitle}>{ advantagesListTitle }</div>
            <ul className={styles.list}>
              { renderAdvantagesList() }
            </ul>
          </div>
          <NoiseChart className={styles.chart} />
        </div>
        <div className={styles.example}>
          <div className={styles.boiler}>
            <div className={styles.connector} />
            <img src={boiler} alt={boilerAlt} className={styles.boilerImg} />
          </div>
          <div className={styles.features}>
            <div className={styles.redLine} />
            <div className={styles.feature1}>
              <div className={styles.name1}>{ featureName1 }</div>
              <img src={feature1} alt={featureAlt1} className={styles.imageFeature} />
            </div>
            <div className={styles.feature2}>
              <div className={styles.name2}>{ featureName2 }</div>
              <img src={feature2} alt={featureAlt2} className={styles.imageFeature} />
            </div>
            <div className={styles.feature3}>
              <div className={styles.name3}>{ featureName3 }</div>
              <img src={feature3} alt={featureAlt3} className={styles.imageFeature} />
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default NoiseLvl;
