import React from 'react';

import styles from './NoiseLvl.module.scss';
import noiselvl from './noiselvl.svg';
import kotel from './Kotel.jpg';
import gorelka from './Gorelka.jpg';
import porolon from './Porolon.jpg';
import vibroopory from './vibroopory.jpg';

const NoiseLvl = () => {
  return (
    <div className={styles.noise}>
      <div className={styles.title}>
        <span>3</span>
        <h2>Низкий уровень шума</h2>
      </div>
      <div className={styles.noiseLevel}>
        <div className={styles.noiseText}>
          <p>
            <span>Уровень шума в 18 раз ниже,</span> чем у жаротрубного котла с<br/>
            модулирующей горелкой. Нет необходимости в шумоизоляции<br/>
            котельной, а   также установке дорогостоящих (от<br/>
            шумоглушителей) горелок и дымоходов. 
          </p>
          <h3>Такой выдающийся показатель достигнут благодаря:</h3>
          <ul>
            <li>Уникальной конструкции премиксной горелки котла;</li>
            <li>Шумоподавляющим матам (входят в стоимость котла);</li>
            <li>Виброопорам (входят в стоимость котла).</li>
          </ul>
        </div>
        <div className={styles.noiseGraf}>
          <img src={noiselvl} alt='noise-level' />
        </div>
      </div>
      <div className={styles.example}>
        <img src={kotel} alt='BOILER' width='313' height='561' className={styles.mainImg} />
        <div className={styles.details}>
          <div className={styles.detailNames}>
            <p className={styles.detailNames_p1}>Премиксная горелка</p>
            <p className={styles.detailNames_p2}>Акустический поролон</p>
            <p className={styles.detailNames_p3}>Виброопоры</p>
          </div>
          <div className={styles.detailsImg}>
            <div className={styles.d1}>
              <img src={gorelka} alt='BURNER' width='221' height='221' />
            </div>
            <div className={styles.d2}>
              <img src={porolon} alt='FOAM-RUBBER' width='221' height='221' />
            </div>
            <div className={styles.d3}>
              <img src={vibroopory} alt='MOUNTS' width='221' height='221' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//

export default NoiseLvl;