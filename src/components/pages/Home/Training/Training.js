import React from 'react';

import factoryPath from './video/factory.mp4';
import Title from 'components/common/Title/Title';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';
import styles from './Training.module.scss';

const Training = ({ data: { title, trainingText, watchButtonText }}) => {
  return (
    <div className={styles.container}>
      <video width="100%" height="100%" autoPlay controls={false} loop muted={true}>
        <source src={factoryPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <Title title={title} number="6" isWhite />
        <p className={styles.trainingText}>{ parseStrWithBoldElems(trainingText) }</p>
        <button type="button" className={styles.watchBtn}>{ watchButtonText }</button>
      </div>
    </div>
  );
};

export default Training;
 