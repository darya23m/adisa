import React from 'react';

import factoryPath from './video/factory.mp4';
import Title from 'components/common/Title/Title';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';
import styles from './Training.module.scss';

const Training = ({ data: { title, trainingText, videoUrl, watchButtonText }}) => {
  return (
    <div className={styles.container}>
      <video width="100%" autoPlay controls={false} loop muted={true} className={styles.videoDesc}>
        <source src={factoryPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <div>
          <Title title={title} number="6" isWhite />
          <p className={styles.trainingText}>{ parseStrWithBoldElems(trainingText) }</p>
        </div>
          <a href={videoUrl} className={styles.watchBtn} target="_blank" rel="noreferrer">{ watchButtonText }</a>
        <div />
      </div>
    </div>
  );
};

export default Training;
