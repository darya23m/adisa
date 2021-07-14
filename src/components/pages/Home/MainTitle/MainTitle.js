import React from 'react';

import styles from './MainTitle.module.scss';
import divider from './divider.svg'

const MainTitle = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.mainTitle}>Котлы ADISA - это</h1>
      <img src={divider} alt='divider' className={styles.divider} />
    </div>
  );
};

export default MainTitle;
