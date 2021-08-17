import React, { useState } from 'react';
import cx from 'classnames';

import config from 'config/app';
import styles from './ContactsForm.module.scss';
import { postContact } from 'features/contact/utils';
import Popup from 'components/common/Popup/Popup';
import FormSuccessMessage from 'components/common/FormSuccessMessage/FormSuccessMessage';
import ReCAPTCHA from "react-google-recaptcha";
import { ReactComponent as Error } from './img/error.svg';

const ContactsForm = ({ data, parentRef }) => {
  const recaptchaRef = React.createRef();

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
  const [verificationKey, setVerificationKey] = useState(null);

  // Form handlers
  const validateForm = () => {
    let validationErrors = new Array();

    if (name.length === 0) validationErrors.push(data.nameError);
    if (contact.length === 0) validationErrors.push(data.contactError);
    if (message.length === 0) validationErrors.push(data.messageError);
    if (!verificationKey) validationErrors.push(data.captchaError);

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
      parentRef.current.scrollIntoView();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    recaptchaRef && recaptchaRef.current && recaptchaRef.current.reset();

    const validationErrors = validateForm();

    setSuccess(false);

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      parentRef.current.scrollIntoView();
    } else {
      setErrors([]);
      setIsLoading(true);
      const result = await postContact({ name, contact, message, verificationKey });
      handleResult(result);
      setIsLoading(false);
    }
    setVerificationKey(null);
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
        <div className={styles.errorDescription}><Error className={styles.errorSvg} />{data.titleError}</div>
        { errors.map((err, index) => <div key={index}>{err}</div>) }
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      { success && renderSuccess() }
      { errors.length > 0 && renderErrors() }
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
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={config.RECAPTCHA_PUBLIC_KEY}
        onChange={setVerificationKey}
      />
      <button type='submit' className={cx(styles.submitBtn, {[styles.submitBtnDisabled]: isLoading})}>{data.button}</button>
    </form>
  );
}

export default ContactsForm;
