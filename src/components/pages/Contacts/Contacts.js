import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import styles from './Contacts.module.scss';
import ContactsForm from './ContactsForm';

const Contacts = ({ data: { meta }, data }) => {
  const contactsHeaderRef = useRef(null);

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <div className={styles.container}>
        <div ref={contactsHeaderRef} className={styles.header}>{data.header}</div>
        <div className={styles.content}>
          <div className={styles.description}>
            {data.description[0]}
            <Link to="offices" className={styles.offices}>{data.description[1]}</Link>
            {data.description[2]}
          </div>
          <div className={styles.orText}>{data.orText}</div>
          <div className={styles.contactUs}>{data.contactUs}</div>
          <ContactsForm data={data} parentRef={contactsHeaderRef} />
        </div>
      </div>
    </>
  );
};

export default Contacts;
