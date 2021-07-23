import React from 'react';

import styles from './Offices.module.scss';
import Office from './Office';

const Offices = ({ data }) => {
  const renderLists = (offices) => offices.map((office, index) => (<Office key={index} data={office} />));

  return (
    <div className={styles.container}>
      <div className={styles.header}>{data.title}</div>
        <div className={styles.content}>
          { renderLists(data.offices) }
        </div>
    </div>
  );
};

export default Offices;
