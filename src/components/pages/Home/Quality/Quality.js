import React from 'react';

 import styles from './Quality.module.scss';
 import siemens from './Siemens.jpg';

 const Quality = ({ data }) => {
   return (
     <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.titleNumber}>{data.title.number}</div>
        <h2 className={styles.titleText}>{data.title.text}</h2>
      </div>
      <div className={styles.content}>
        <img src={siemens} alt='Siemens' width='408' height='269' className={styles.siemens} />
        <div className={styles.qualityText}>
          <p className={styles.qualityTextP1} dangerouslySetInnerHTML={{__html: data.qualityTextP1}}></p>
          <p className={styles.qualityTextP2} dangerouslySetInnerHTML={{__html: data.qualityTextP2}}></p>
          <p className={styles.qualityTextP3} dangerouslySetInnerHTML={{__html: data.qualityTextP3}}></p>
        </div>
      </div>
     </div>
   );
 };

 export default Quality;
