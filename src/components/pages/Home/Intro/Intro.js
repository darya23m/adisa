import React from 'react';

import styles from './Intro.module.scss';
import logo from './logo.svg';

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.intro__info}>
        <header><img src={logo} alt='ADISA' /></header>
        <h1>Официальный<br /> 
        предствитель ADISA<br />  
        в Украине</h1>
        <p>самые компактные <span>котлы</span></p>
      </div>
    </div>
  );
};

export default Intro;