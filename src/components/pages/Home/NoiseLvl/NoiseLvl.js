import React from 'react';

import Title from 'components/common/Title/Title';
import styles from './NoiseLvl.module.scss';
import { ReactComponent as NoiseChart } from './img/noiseChart.svg';
import boiler from './img/Kotel.png';
import gorelka from './img/Gorelka.jpg';
import porolon from './img/Porolon.jpg';
import vibroopory from './img/vibroopory.jpg';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';

const NoiseLvl = ({ data }) => {
  const list = data.list.map((curr, index) => <li key={index}> {curr} </li>);
 
  return (
    <div className={styles.container}>
      <Title title={data.title} number="3" />
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.infoText}>
            <p className={styles.text}>{ parseStrWithBoldElems(data.noiseText) }</p>
            <div className={styles.listTitle}>{data.listTitle}</div>
            <ul className={styles.list}>{list}</ul>
          </div>
          <NoiseChart className={styles.Chart} />
        </div>
        <div className={styles.example}>
          <div className={styles.boiler}>
            <div className={styles.connector}></div>
            <img src={boiler} alt='BOILER' className={styles.boilerImg} />
          </div>
          <div className={styles.features}>
            <div className={styles.redLine}></div>
            <div className={styles.feature1}>
              <div className={styles.name1}>{data.nameOne}</div>
              <img src={gorelka} alt='BURNER' className={styles.imageFeature} />
            </div>
            <div className={styles.feature2}>
              <div className={styles.name2}>{data.nameTwo}</div>
              <img src={porolon} alt='FOAM-RUBBER' className={styles.imageFeature} />
            </div>
            <div className={styles.feature3}>
              <div className={styles.name3}>{data.nameThree}</div>
              <img src={vibroopory} alt='MOUNTS' className={styles.imageFeature} />
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default NoiseLvl;
