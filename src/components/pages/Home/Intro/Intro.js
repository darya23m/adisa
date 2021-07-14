import React from 'react';

import styles from './Intro.module.scss';
import logo from './logo.svg';

const Intro = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header><img src={logo} alt={data.logoAlt} /></header>
        <h1>{data.header}</h1>
        <div className={styles.subHeader} dangerouslySetInnerHTML={{__html: data.subHeader}}></div>
      </div>
    </div>
  );
};

export default Intro;