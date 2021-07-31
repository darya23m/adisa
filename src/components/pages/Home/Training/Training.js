import React from 'react';

import Title from 'components/common/Title/Title';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';
import styles from './Training.module.scss';

const Training = ({ data: { title, trainingText, watchButtonText }}) => {
  return (
    <div className={styles.container}>
      <Title title={title} number="6" isWhite />
      <div className={styles.content}>
        <p className={styles.trainingText}>{ parseStrWithBoldElems(trainingText) }</p>
        <button type="button" className={styles.watchBtn}>{ watchButtonText }</button>
      </div>
    </div>
  );
};

export default Training;
 