import React, { useState } from 'react';

import Office from './Office/Office';
import MainOffice from './MainOffice/MainOffice';
import styles from './Offices.module.scss';

const Offices = ({ data: { mainOffice, listOffices }, labels }) => {
  const [active, setActive] = useState();

  const renderOffices = () =>
    listOffices.list.map((item, index) => (
      <div key={index} className={styles.officeWrap} style={{animationDelay: `${index * 100 + 900}ms`}}>
        <Office data={item} labels={labels} onClick={() => setActive(active === index ? false : index)} active={active === index} />
      </div>
    ));

  return (
    <>
      <div className={styles.content}>
        <MainOffice data={mainOffice} labels={labels} />
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
