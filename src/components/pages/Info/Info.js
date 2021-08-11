import React from 'react';
import { Helmet } from 'react-helmet';

import InfoList from './InfoList';
import styles from './Info.module.scss';

const Info = ({ data: { meta }, data }) => {
  const renderLists = (lists) => lists.map((list, index) => (<InfoList key={index} data={list} />));

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <div className={styles.container}>
        <div className={styles.header}>{data.title}</div>
        <div className={styles.content}>
          {renderLists(data.info)}
        </div>
      </div>
    </>
  );
};

export default Info;