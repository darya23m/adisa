import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import cx from 'classnames';

import Office from './Office/Office';
import styles from './Offices.module.scss';

const Offices = ({ data: { meta, title, offices }, isRerouted }) => {
  const { url } = useRouteMatch();

  const renderOffices = () =>
    offices.map((item, index) => (
      <div key={index} className={styles.officeWrap} style={{animationDelay: `${index * 100 + 1000}ms`}}>
        <Office data={item} parentUrl={url} />
      </div>
    ));

  return (
    <>
      <div className={styles.container}>
      <Helmet>
        <title>{ meta.title }</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
        <div className={cx(styles.header, {[styles.headerNoDelay]: isRerouted})}>{ title }</div>
        <div className={styles.content}>
          { renderOffices() }
        </div>
    </div>
    </>
  );
};

export default Offices;
