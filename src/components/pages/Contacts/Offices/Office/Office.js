import React from 'react';

import styles from './Office.module.scss';
import cx from 'classnames';

const Office = ({ data: { city, addresses }, labels, active, onClick }) => {
  const externalUrl = (url) => (/^http?/im).test(url) ? url : `https://${url}`;

  const renderContactsItem = (list, label, type) => 
    list.map((curr, index) =>
      <div key={index} className={styles.contactsItem}>
        { label }:&ensp;
        { type === 'tel' && <a href={`tel:${curr}`} className={styles.contact}>{ curr }</a> }
        { type === 'email' && <a href={`mailto:${curr}`} className={styles.contact}>{ curr }</a> }
        { type === 'web' &&
          <a href={ externalUrl(curr) } className={styles.contact} target="_blank" rel="noreferrer">
            { curr }
          </a>
        }
      </div>
    )

  const renderAddresses = () =>
    addresses.map((curr, index) =>
      <li key={index} className={styles.listItem}>
        <div className={styles.listItemBlock}>
          <div className={styles.officeName}>{ curr.officeName }</div>
          { curr.address && <div key={index} className={styles.address}>{labels.address}: { curr.address }</div>}
          { curr.tels && renderContactsItem(curr.tels, labels.phone, 'tel') }
          { curr.emails && renderContactsItem(curr.emails, labels.email, 'email') }
          { curr.webs && renderContactsItem(curr.webs, labels.web, 'web') }
        </div>
      </li>
    )

  const renderCurrOffice = () =>
    <div className={cx(styles.element, {[styles.elementActive]: active})}>
      <div className={styles.item} onClick={onClick}>
        <div className={styles.city}>{ city }</div>
      </div>
      <ul className={styles.list}>
        { renderAddresses() }
      </ul>
    </div>

  return renderCurrOffice();
};

export default Office;
