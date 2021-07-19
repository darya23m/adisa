import React from 'react';

import Title from 'components/common/Title/Title';
import styles from './Quality.module.scss';
import siemens from './img/Siemens.jpg';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';

const Quality = ({ data }) => {
  return (
    <div className={styles.container}>
      <Title title={data.title} number="4" isWhite />
      <div className={styles.content}> 
        <div className={styles.description}>
          <div className={styles.qualityText}>
            <p className={styles.qualityTextP1}>{ parseStrWithBoldElems(data.qualityTextP1) }</p>
            <p className={styles.qualityTextP2}>{ parseStrWithBoldElems(data.qualityTextP2) }</p>
            <p className={styles.qualityTextP3}>{ parseStrWithBoldElems(data.qualityTextP3) }</p>
          </div>
          <div className={styles.siemensImg}><img src={siemens} alt={data.siemensAlt} className={styles.siemens} /></div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
