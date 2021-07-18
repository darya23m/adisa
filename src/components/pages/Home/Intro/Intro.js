import React from 'react';

import logo from './img/logo.svg';
import { ReactComponent as Eclipse } from './img/eclipse.svg';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';
import styles from './Intro.module.scss';

const Intro = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className="commonContentContainer">
        <img className={styles.logo} src={logo} alt={data.logoAlt} />
        <h1 className={styles.title}>{ data.title }</h1>
        <div className={styles.description}>
          { parseStrWithBoldElems(data.description) }
        </div>
      </div>
      <Eclipse className={styles.eclipse} />
    </div>
  );
};

export default Intro;
