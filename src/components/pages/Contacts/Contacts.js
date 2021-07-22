import React from 'react';

import styles from './Contacts.module.scss';

const Contacts = ({ data }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>{data.header}</div>
        <div className={styles.content}>
          <div className={styles.description}>
            {data.description}
            <a href='#Offices' className={styles.offices}>{data.offices}</a>
          </div>
          <div className={styles.orText}>{data.orText}</div>
          <div className={styles.contactUs}>{data.contactUs}</div>
          <form className={styles.form}>
            <div className={styles.name}>
              <label for="name" className={styles.label}>{data.labelName}</label>
              <input className={styles.input} type="text" name="name" id="name" />
            </div>
            <div className={styles.contact}>
              <label for="contact" className={styles.label}>{data.labelContact}</label>
              <input className={styles.input} type="text" name="contact" id="contact" />
            </div>
            <div className={styles.message}>
              <label for="message" className={styles.label}>{data.labelMessage}</label>
              <textarea className={styles.textarea} name="message" id="message"></textarea>
            </div>
            <button className={styles.buttonContact}>{data.button}</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacts;
