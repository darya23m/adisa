import React from 'react';

import styles from './InfoList.module.scss';
import { ReactComponent as IconDownload } from './img/Download.svg';
import { ReactComponent as IconLink } from './img/Link.svg';

const InfoList = ({ data: { list, caption } }) => {
  const list1 = list.length > 4 ? list.slice(0, Math.ceil(list.length / 2)) : list.slice(0, 3);
  const list2 = list.length > 4 ? list.slice(Math.ceil(list.length / 2)) : list.slice(3);

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
      <div className={styles.horizontalDividerWrap}>
        <h3 className={styles.caption}>{caption}</h3>
        <div className={styles.horizontalDivider}/>
      </div>
      <div className={styles.list}>
        <div className={styles.listItems}>{listItems(list1)}</div>
        <div className={styles.listItems}>{listItems(list2)}</div>
      </div>
    </div>
  );
};

export default InfoList;
