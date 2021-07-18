import React from 'react';

import { ReactComponent as Divider } from './img/divider.svg';
import styles from './Tagline.module.scss';

const Tagline = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>{ data }</div>
      <Divider className={styles.divider} />
    </div>
  );
};

export default Tagline;
