import React from 'react';

 import styles from './Training.module.scss';

 const Training = ({ data }) => {
   return (
     <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.titleNumber}>{data.title.number}</div>
        <h2 className={styles.titleText}>{data.title.text}</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.trainingText}>{data.trainingText}</div>
        <button className={styles.buttonVideo}>{data.buttonText}</button>
      </div>
     </div>
   );
 };

 export default Training;
 