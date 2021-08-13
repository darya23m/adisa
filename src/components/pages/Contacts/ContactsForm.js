import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import styles from './ContactsForm.module.scss';
import { postContact } from 'features/contact/utils';
import Popup from 'components/common/Popup/Popup';
import FormSuccessMessage from 'components/common/FormSuccessMessage/FormSuccessMessage';

const ContactsForm = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState([]);

  const [isPopupFadeOutActive, setIsPopupFadeOutActive] = useState(false);

  const handleClosePopup = (e) => {
    if(e && e.target.id !== "popup-wrapper" && e.target.id !== "popup-close") return;
    setIsPopupFadeOutActive(true);

    setTimeout(() => {
      setSuccess(false);
      setIsPopupFadeOutActive(false);
    }, 400)
  }

  // Form fields
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  // Form handlers
  const validateForm = () => {
    let validationErrors = new Array();

    if (name.length === 0) validationErrors.push("Имя не указано");
    if (contact.length === 0) validationErrors.push("Номер телефона или e-mail не указан");
    if (message.length === 0) validationErrors.push("Сообщение не может быть пустым");

    return validationErrors;
  };

  const clearForm = () => {
    setName("");
    setContact("");
    setMessage("");
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
      const result = await postContact({ name, contact, message });
      handleResult(result);
      setIsLoading(false);
    }
  };

  // Helpers

  const renderSuccess = () => {
    setTimeout(handleClosePopup, 5000);
    return (
      <Popup closePopup={handleClosePopup} isPopupFadeOutActive={isPopupFadeOutActive}>
        <FormSuccessMessage />
      </Popup>
    );
  };

  const renderErrors = () => {
    return (
      <div className={styles.errors}>
        { errors.map((err, index) => <div key={index}>{err}</div>) }
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputWraper}>
        <label className={styles.label}>{data.labelName}</label>
        <input
          className={
            cx(styles.input, 
            {[styles.inputError]: errors.length > 0}, 
            {[styles.inputSuccess]: name.length > 0 })
          }
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
          className={
            cx(styles.input, 
            {[styles.inputError]: errors.length > 0}, 
            {[styles.inputSuccess]: contact.length > 0 })
          }
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
          className={
            cx(styles.textarea, 
            {[styles.textareaError]: errors.length > 0}, 
            {[styles.textareaSuccess]: message.length > 0 })
          }
          type="text"
          name="message"
          maxLength="1000"
          value={message}
          onChange={e => setMessage(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <button type='submit' className={cx(styles.buttonContact, {[styles.buttonContactDisabled]: isLoading})}>{data.button}</button>
      { success && renderSuccess() }
      { errors.length > 0 && renderErrors() }
    </form>
  );
}

export default ContactsForm;
