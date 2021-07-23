import React, { useState } from 'react';
import cx from 'classnames';

import styles from './Office.module.scss';
import {ReactComponent as ArrowIconClose} from './img/Down.svg';
import {ReactComponent as ArrowIconOpen} from './img/Up.svg';

const Office = ({ data: {city, addresses} }) => {
  const [isOpened, setIsOpened ] = useState(false);

  const renderContactsItem = (list, label, type) => 
  list.map((curr, index) => (
    <div key={index} className={styles.contactsItem}>
      { label }:
      {' '}
      { type === 'tel' && <a href={`tel:${curr}`} className={styles.contact}>{curr}</a> }
      { type === 'email' && <a href={`mailto:${curr}`} className={styles.contact}>{ curr }</a> }
      { type === 'web' && <a href={curr} className={styles.contact}>{ curr }</a> }
    </div>
    ));

  const renderAddresses = () => {
    return (
      <div className={styles.listAddresses}>
        <ul className={styles.list}>
          { addresses.map((curr, index) =>
            <li key={index} className={styles.listItem}>
              <div className={styles.listItemBlock}>
                <div key={index} className={styles.address}>{ curr.address }</div>
                { curr.tels && renderContactsItem(curr.tels, 'Тел.', 'tel') }
                { curr.emails && renderContactsItem(curr.emails, 'E-mail', 'email') }
                { curr.webs && renderContactsItem(curr.webs, 'Web', 'web') }
              </div>
            </li>
          )
        }
        </ul>
      </div>
    );
  }

  return (
    <>
      <div className={!isOpened ? styles.caption : styles.captionOpened}>
        {!isOpened ? 
        <ArrowIconClose className={styles.arrowIcon} onClick={() => setIsOpened(true)}/> 
        : 
        <ArrowIconOpen className={styles.arrowIcon} onClick={() => setIsOpened(false)}/>}
        <div className={styles.city}>{ city }</div>
      </div>
      {isOpened && renderAddresses()}
    </>
  );
};

export default Office;
