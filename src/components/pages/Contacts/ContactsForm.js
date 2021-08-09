import React, { useState } from 'react';
import cx from 'classnames';

import styles from './ContactsForm.module.scss';
import { calculate } from 'features/calculate/utils';

const ContactsForm = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState([]);

  // Form fields
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [messages, setMessages] = useState("");

  // Form handlers
  const validateForm = () => {
    let validationErrors = new Array();

    if (name.length === 0) validationErrors.push("Имя не указано");
    if (contact.length === 0) validationErrors.push("Номер телефона или e-mail не указан");

    return validationErrors;
  };

  const clearForm = () => {
    setName("");
    setContact("");
    setMessages("");
  };

  const handleResult = (result) => {
    if (result === true) {
      clearForm();
      setSuccess(true);
    } else {
      setErrors([result.message]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    setSuccess(false);

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors([]);
      setIsLoading(true);
      const result = await calculate({ name, contact, messages });
      handleResult(result);
      setIsLoading(false);
    }
  };

  // Helpers

  const renderSuccess = () => (
    <div className={styles.success}>
      Запрос отправлен.
      <br />
      Мы свяжемся с вами в ближайшее время.
    </div>
  );

  const renderErrors = () => {
    return (
      <div className={styles.errors}>
        { errors.map((err, index) => <div key={index}>{err}</div>) }
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      { success && renderSuccess() }
      { errors.length > 0 && renderErrors() }
      <div className={styles.inputWraper}>
        <label className={styles.label}>{data.labelName}</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <div className={styles.inputWraper}>
        <label className={styles.label}>{data.labelContact}</label>
        <input 
          className={styles.input}
          type="text"
          name="contact"
          value={contact}
          onChange={e => setContact(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <div className={styles.inputWraper}>
        <label className={styles.label}>{data.labelMessage}</label>
        <textarea
          className={styles.textarea}
          type="text"
          name="message"
          maxlength="300"
          value={messages}
          onChange={e => setMessages(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <button type='submit' className={cx(styles.buttonContact, {[styles.buttonContactDisabled]: isLoading})}>{data.button}</button>
    </form>
  );
}

export default ContactsForm;
