import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import cx from 'classnames';

import styles from './Contacts.module.scss';
import Offices from 'components/pages/Contacts/Offices/Offices';
import ContactsForm from './ContactsForm/ContactsForm';

const Contacts = ({ data, isRerouted }) => {
  const contactsHeaderRef = useRef(null);

  return (
    <>
      <Helmet>
        <title>{ data.meta.title }</title>
        <meta name="description" content={data.meta.description} />
        <meta name="keywords" content={data.meta.keywords} />
      </Helmet>
      <div className={styles.container}>
        <div ref={contactsHeaderRef} className={cx(styles.header, {[styles.headerNoDelay]: isRerouted})}>
          { data.header }
        </div>
        <div className={styles.content}>
          <Offices data={data.offices} />
          <ContactsForm data={data.form} parentRef={contactsHeaderRef} />
        </div>
      </div>
    </>
  );
};

export default Contacts;
