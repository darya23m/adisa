import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import cx from 'classnames';

import styles from './Contacts.module.scss';
import ContactsForm from './ContactsForm/ContactsForm';

const Contacts = ({ data, isRerouted }) => {
  const { meta, header, description, descriptionLinkText, orText, contactUs } = data;
  const contactsHeaderRef = useRef(null);

  return (
    <>
      <Helmet>
        <title>{ meta.title }</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <div className={styles.container}>
        <div ref={contactsHeaderRef} className={cx(styles.header, {[styles.headerNoDelay]: isRerouted})}>
          { header }
        </div>
        <div className={styles.content}>
          <div className={styles.description}>
            { description }&ensp;
            <Link to="offices" className={styles.offices}>{ descriptionLinkText }</Link>.
          </div>
          <div className={styles.orText}>{ orText }</div>
          <div className={styles.contactUs}>{ contactUs }</div>
          <ContactsForm data={data.form} parentRef={contactsHeaderRef} />
        </div>
      </div>
    </>
  );
};

export default Contacts;
