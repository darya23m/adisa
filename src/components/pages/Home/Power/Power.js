import React from 'react';

import styles from './Power.module.scss';
import power_disp from './power_disp.svg';

const Power = () => {
  return (
      <div className={styles.power}>
        <div className={styles.title}>
          <span>2</span>
          <h2>Огромная мощность при компактных <br />размерах и низком весе</h2>
        </div>
      <p>
        Широкий диапазон мощностей в линейке котлов от 104 до 1800 кВт позволяет подобрать наиболее оптимальное решение для каждого    случая.
        <br />
        <br />
        Занимаемая <b>площадь конденсационными котлами ADISA в 2,5 раза меньше, а вес котла с водой и горелкой в 4 раза меньше</b>    жаротрубных котлов аналогичной мощности. Это позволит застройщику значительно сэкономить на возведении помещения котельной,  а   также при необходимости поднять котел при помощи автокрана или грузового лифта. 
      </p>
      <div className={styles.power_disp}>
        <h3>Котельная на 1000 кВт</h3>
        <div className={styles.power_disp_descr}>
          <p>Обычнй котел</p>
          <p>Котел ADISA (ADI LT 450)</p>
        </div>
        <img src={power_disp} alt="power"/>
        <i>*Вес указан с водой</i>
      </div>
    </div>
  );
};

export default Power;
