import React from 'react';

import styles from './InfoList.module.scss';
import { ReactComponent as IconDownload } from './img/Download.svg';
import { ReactComponent as IconLink } from './img/Link.svg';

const InfoList = ({ data: { list, caption } }) => {
  const listItems = (list) => list.map(listItem);
  const listItem = ({ type, text, link }, index) => {
    switch (type) {
      case "doc": 
        return (
          <div key={index} className={styles.download}>
            <IconDownload className={styles.icon} /> 
            <a href={link} download className={styles.downloadLink} target="_blank">{text}</a>
          </div>
        );
      case "link":
        return (
          <div key={index} className={styles.link}>
            <IconLink className={styles.icon} />  
            <a href={link} className={styles.commonLink} target="_blank">{text}</a>
          </div>
        )
    }
  }

  return (
    <div className={styles.content}>
      <h3 className={styles.caption}>{caption}</h3>
      <div className={styles.list}>
        {listItems(list)}
        <div className={styles.horizontalDividerWrap}>
          <div className={styles.horizontalDivider}/>
        </div>
      </div>
    </div>
  );
};

export default InfoList;
