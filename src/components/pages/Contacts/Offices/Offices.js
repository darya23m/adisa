import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import Office from './Office/Office';
import MainOffice from './MainOffice/MainOffice';
import styles from './Offices.module.scss';

const Offices = ({ data: { mainOffice, listOffices } }) => {
  const { url } = useRouteMatch();

  const renderOffices = () =>
  listOffices.list.map((item, index) => (
      <div key={index} className={styles.officeWrap} style={{animationDelay: `${index * 100 + 1000}ms`}}>
        <Office data={item} parentUrl={url} />
      </div>
    ));

  return (
    <>
      <div className={styles.content}>
        <MainOffice data={mainOffice} />
        <div>
          <div className={styles.horizontalDividerWrap}>
            <div className={styles.title}>{ listOffices.title }</div>
            <div className={styles.horizontalDivider}/>
          </div>
          { renderOffices() }
        </div>
      </div>
    </>
  );
};

export default Offices;
