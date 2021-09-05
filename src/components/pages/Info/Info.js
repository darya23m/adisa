import React from 'react';
import { Helmet } from 'react-helmet';
import cx from 'classnames';

import InfoList from './InfoList';
import styles from './Info.module.scss';

const Info = ({ data: { meta }, data, isRerouted, isAppFaded }) => {
  const renderLists = lists => lists.map((list, index) => (<InfoList key={index} data={list} listIndex={index} />));

  return (
    <>
      <Helmet>
        <title>{ meta.title }</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <div className={styles.container}>
        <div className={cx(styles.header, {[styles.headerNoDelay]: isRerouted, [styles.headerHidden]: isAppFaded})}>
          { data.title }
        </div>
        <div className={cx(styles.content, {[styles.contentHidden]: isAppFaded})}>
          { renderLists(data.info) }
        </div>
      </div>
    </>
  );
};

export default Info;
