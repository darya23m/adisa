import React from 'react';

import Title from 'components/common/Title/Title';
import styles from './Training.module.scss';

const Training = ({ data }) => {
  return (
    <div className={styles.container}>
      <Title title={data.title} number="6" isWhite />
      <div className={styles.content}>
        <div className={styles.trainingText}>{data.trainingText}</div>
        <button className={styles.buttonVideo}>{data.buttonText}</button>
      </div>
    </div>
  );
};

export default Training;
 