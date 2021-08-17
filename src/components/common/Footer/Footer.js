import React from 'react';

import styles from './Footer.module.scss';
import { ReactComponent as Eclipse } from './img/eclipse.svg';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';

const Footer = ({ data: { title, leftDescriptions, rightDescriptions }}) => {
  const renderDescriptions = (descriptionsList) =>
    descriptionsList.map((curr, index) =>
      <p key={index} className={styles.paragraph}>{ parseStrWithBoldElems(curr) }</p>
    )

  return (
    <div className={styles.container}>
      <Eclipse className={styles.eclipse} />
      <div className={styles.content}>
        <h2 className={styles.header}>{ title }</h2>
        <div className={styles.text}>
          <div className={styles.textFirst}>
            { renderDescriptions(leftDescriptions) }
          </div>
          <div className={styles.textSecond}>
            { renderDescriptions(rightDescriptions) }
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.madeBy}>
          Made by&ensp;
          <a href="https://logge.company" className={styles.linkLogge}>
            Logge.company
          </a>
        </div>
      </div>
    </div>
  );
};

 export default Footer;
