import React from 'react';

import styles from './MainOffice.module.scss';

const MainOffice = ({ data, labels }) => {
  const renderContacts = (list, label, type) =>
    list.map((curr, index) =>
      <div key={index} className={styles.contactsBlock}>
        { label }:&ensp;
        { type === 'tel' && <a href={`tel:${curr}`} className={styles.contact}>{curr}</a> }
        { type === 'email' && <a href={`mailto:${curr}`} className={styles.contact}>{ curr }</a> }
        { type === 'web' && <a href={curr} className={styles.contact}>{ curr }</a> }
      </div>
    )

  const renderAddress = () =>
    <div className={styles.listItemBlock}>
      <div className={styles.address}>{ data.office.address }</div>
      { data.office.tels && renderContacts(data.office.tels, labels.phone, 'tel') }
      { data.office.emails && renderContacts(data.office.emails, labels.email, 'email') }
      { data.office.webs && renderContacts(data.office.webs, labels.web, 'web') }
    </div>

  return (
    <div className={styles.container}>
      <div className={styles.horizontalDividerWrap}>
        <div className={styles.title}>{ data.title }</div>
        <div className={styles.horizontalDivider}/>
      </div>
      { renderAddress() }
    </div>
  );
};

export default MainOffice;
