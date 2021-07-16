import React from 'react';

import styles from './NoiseLvl.module.scss';
import noiselvl from './noiselvl.svg';
import kotel from './Kotel.png';
import gorelka from './Gorelka.jpg';
import porolon from './Porolon.jpg';
import vibroopory from './vibroopory.jpg';

const NoiseLvl = ({ data }) => {
  const list = data.list.map((curr, index) => <li key={index}> {curr} </li>);

  //const detailNames = data.imgNames.map((curr, index) => <div key={index} className={styles.detailName}> {curr} </div>);
 
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.titleNumber}>{data.title.number}</div>
        <h2 className={styles.titleText}>{data.title.text}</h2>
      </div>
      <div className={styles.content}>
        <img src={noiselvl} alt='noise-level' className={styles.noiseChart} />
        <div className={styles.noiseInfo}>
          <p className={styles.noiseText} dangerouslySetInnerHTML={{__html: data.noiseText}}></p>
          <div className={styles.listTitle}>{data.listTitle}</div>
          <ul className={styles.noiseList}>{list}</ul>
        </div>
      </div>
      <div className={styles.example}>
        <img src={kotel} alt='BOILER' className={styles.mainImg} />
        <div className={styles.detailsImg}>
          <div className={styles.d1}>
            <div className={styles.nameD1}>{data.imgNames[0]}</div>
            <img src={gorelka} alt='BURNER' className={styles.imageD} />
          </div>
          <div className={styles.d2}>
            <div className={styles.nameD2}>{data.imgNames[1]}</div>
            <img src={porolon} alt='FOAM-RUBBER' className={styles.imageD} />
          </div>
          <div className={styles.d3}>
            <div className={styles.nameD3}>{data.imgNames[2]}</div>
            <img src={vibroopory} alt='MOUNTS' className={styles.imageD} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoiseLvl;
