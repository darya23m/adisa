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
  const [requestErrors, setRequestErrors] = useState([]);

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

  // Form validations
  const [isNameValid, setIsNameValid] = useState(false);
  const [isContactValid, setIsContactValid] = useState(false);
  const [isMessageValid, setIsMessageValid] = useState(false);
  const [nameErrors, setNameErrors] = useState([]);
  const [contactErrors, setContactErrors] = useState([]);
  const [messageErrors, setMessageErrors] = useState([]);
  const [captchaErrors, setCaptchaErrors] = useState([]);

  const validateName = () => {
    let errors = [];
    if (name.length === 0) errors.push(data.errors.fields.name.cantBeBlank);

    if (!errors.length) setIsNameValid(true);
    setNameErrors(errors);
    return errors;
  }

  const validateContact = () => {
    let errors = [];
    const emailRegEx = /^[A-Za-z0-9][A-Za-z0-9-+_.]*[A-Za-z0-9]@[A-Za-z0-9][A-Za-z0-9-_.]+[A-Za-z0-9]$/im;
    const phoneRegEx = /^[\+]?[0-9\s]{0,4}[(]?[0-9]{2,3}[)]?[-\s0-9]+$/im;

    if (contact.length === 0) errors.push(data.errors.fields.contact.cantBeBlank)
    else if (
        !emailRegEx.test(contact) &&
        !(phoneRegEx.test(contact) && contact.length >= 10)
    ) errors.push(data.errors.fields.contact.invalidInput);

    if (!errors.length) setIsContactValid(true);
    setContactErrors(errors);
    return errors;
  }

  const validateMessage = () => {
    let errors = [];
    if (message.length === 0) errors.push(data.errors.fields.message.cantBeBlank);

    if (!errors.length) setIsMessageValid(true);
    setMessageErrors(errors);
    return errors;
  }

  const validateCaptcha = () => {
    let errors = [];
    if (!verificationKey) errors.push(data.errors.fields.captcha.cantBeBlank);
    setCaptchaErrors(errors);
    return errors;
  }

  const validateForm = () => {
    const validations = [
      validateName(),
      validateContact(),
      validateMessage(),
      validateCaptcha()
    ];
    return validations.flat().length === 0;
  };

  const clearForm = () => {
    setName("");
    setContact("");
    setMessage("");
  };

  const allErrors = () => [
    requestErrors,
    nameErrors,
    contactErrors,
    messageErrors,
    captchaErrors
  ];

  const resetAllErrors = () => {
    setRequestErrors([]);
    setNameErrors([]);
    setContactErrors([]);
    setMessageErrors([]);
    setCaptchaErrors([]);

    setIsNameValid(false);
    setIsContactValid(false);
    setIsMessageValid(false);
  }

  const hasErrors = () => allErrors().flat().length > 0;

  // Form handlers
  
  const handleResult = (result) => {
    if (result === true) {
      clearForm();
      setSuccess(true);
    } else {
      setRequestErrors([result.message]);
      parentRef.current.scrollIntoView();
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    recaptchaRef && recaptchaRef.current && recaptchaRef.current.reset();
    setSuccess(false);
    const isFormValid = validateForm();

    if (!isFormValid) {
      parentRef.current.scrollIntoView();
    } else {
      resetAllErrors();
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
        <FormSuccessMessage data={data.success} />
      </Popup>
    );
  };

  const renderErrors = () => {
    return (
      <div className={styles.errors}>
        <div className={styles.errorDescription}><Error className={styles.errorSvg} />{data.errors.title}</div>
        { allErrors().flat().map((err, index) => <div key={index}>{err}</div>) }
      </div>
    );
  }

  return (
    <div className={styles.content}>
      <div className={styles.title}>{data.title}</div>
      { success && renderSuccess() }
      <form onSubmit={handleSubmit} className={styles.form}>
        { hasErrors() && renderErrors() }
        <div className={styles.inputWraper}>
          <label className={styles.label}>{data.labels.name}</label>
          <input
            className={
              cx(styles.input, 
              {[styles.inputError]: !!nameErrors.length}, 
              {[styles.inputSuccess]: isNameValid})
            }
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            onBlur={validateName}
            disabled={isLoading}
          />
        </div>
        <div className={styles.inputWraper}>
          <label className={styles.label}>{data.labels.contact}</label>
          <input 
            className={
              cx(styles.input, 
              {[styles.inputError]: !!contactErrors.length}, 
              {[styles.inputSuccess]: isContactValid})
            }
            type="text"
            name="contact"
            value={contact}
            onChange={e => setContact(e.target.value)}
            onBlur={validateContact}
            disabled={isLoading}
          />
        </div>
        <div className={styles.inputWraper}>
          <label className={styles.label}>{data.labels.message}</label>
          <textarea
            className={
              cx(styles.textarea, 
              {[styles.textareaError]: !!messageErrors.length},
              {[styles.textareaSuccess]: isMessageValid})
            }
            name="message"
            maxLength="1000"
            value={message}
            onChange={e => setMessage(e.target.value)}
            onBlur={validateMessage}
            disabled={isLoading}
          />
        </div>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={config.RECAPTCHA_PUBLIC_KEY}
          onChange={setVerificationKey}
        />
        <button type='submit' className={cx(styles.submitBtn, {[styles.submitBtnDisabled]: isLoading})}>{data.submitBtn}</button>
      </form>
    </div>
  );
}

export default ContactsForm;
