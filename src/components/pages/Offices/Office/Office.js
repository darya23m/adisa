import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Office.module.scss';
import { ReactComponent as ArrowDownIcon } from './img/Down.svg';
import { ReactComponent as ArrowUpIcon } from './img/Up.svg';

const Office = ({ data: { city, addresses, path }, parentUrl }) => {
  const location = useLocation();
  const currOfficePath = `${parentUrl}/${path}`;

  const renderContactsItem = (list, label, type) => 
    list.map((curr, index) => (
      <div key={index} className={styles.contactsItem}>
        { label }:&ensp;
        { type === 'tel' && <a href={`tel:${curr}`} className={styles.contact}>{curr}</a> }
        { type === 'email' && <a href={`mailto:${curr}`} className={styles.contact}>{ curr }</a> }
        { type === 'web' && <a href={curr} className={styles.contact}>{ curr }</a> }
      </div>
      ));

  const renderAddresses = () => addresses.map((curr, index) => (
      <li key={index} className={styles.listItem}>
        <div className={styles.listItemBlock}>
          <div key={index} className={styles.address}>{ curr.address }</div>
          { curr.tels && renderContactsItem(curr.tels, 'Тел.', 'tel') }
          { curr.emails && renderContactsItem(curr.emails, 'E-mail', 'email') }
          { curr.webs && renderContactsItem(curr.webs, 'Web', 'web') }
        </div>
      </li>
    ));

  const renderCurrOffice = () =>
    <div className={styles.element}>
      <Link className={styles.caption} to={parentUrl}>
        <ArrowUpIcon className={styles.arrowIcon} />
        <div className={styles.city}>{ city }</div>
      </Link>
      <ul className={styles.list}>
        { renderAddresses() }
      </ul>
    </div>

  const renderCurrOfficeLink = () =>
    <Link to={{ pathname: currOfficePath, state: { prevLocation: 'offices' }}} className={styles.item}>
      <ArrowDownIcon />
      <div>{ city }</div>
    </Link>

  return (
    location.pathname === currOfficePath
      ? renderCurrOffice()
      : renderCurrOfficeLink()
  );
};

export default Office;
