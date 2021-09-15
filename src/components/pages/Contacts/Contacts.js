import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import cx from 'classnames';

import styles from './Contacts.module.scss';
import Offices from 'components/pages/Contacts/Offices/Offices';
import ContactsForm from './ContactsForm/ContactsForm';

const Contacts = ({ data, isRerouted, isAppFaded }) => {
  const headerBgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = ({ x, y, view }) => {
      window.requestAnimationFrame(() => {
        const midX = view.innerWidth / 2;
        const midY = 150;
        const offsetX = (midX - x) * -0.001;
        const offsetY = (midY - y) * -0.02;

        headerBgRef.current.style.transform = (
          `translate3d(${offsetX > 4 ? 4 : offsetX < -4 ? -4 : offsetX}%, ${offsetY > 8 ? 8 : offsetY < -8 ? -8 : offsetY}%, 0)`
        );
      });
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>{ data.meta.title }</title>
        <meta name="description" content={data.meta.description} />
        <meta name="keywords" content={data.meta.keywords} />
      </Helmet>
      <div className={styles.container}>
        <div className={cx(styles.header, {[styles.headerNoDelay]: isRerouted, [styles.headerHidden]: isAppFaded})}>
          <div className={styles.headerBg} ref={headerBgRef} />
          { data.header }
        </div>
        <div className={cx(styles.content, {[styles.contentHidden]: isAppFaded})}>
          <Offices data={data.offices} labels={data.labels} />
        </div>
        <ContactsForm data={data.form} />
      </div>
    </>
  );
};

export default Contacts;
