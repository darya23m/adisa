import React, { useState } from 'react';
import cx from 'classnames';

import config from 'config/app';
import styles from './CalculateForm.module.scss';
import { postCalculate } from 'features/calculate/utils';
import ReCAPTCHA from "react-google-recaptcha";
import { ReactComponent as Error } from './img/error.svg';

const CalculateForm = ({ data, onSuccess }) => {
  const recaptchaRef = React.createRef();

  const [isLoading, setIsLoading] = useState(false);
  const [requestErrors, setRequestErrors] = useState([]);

  // Form fields
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [verificationKey, setVerificationKey] = useState(null);

   // Form validations
   const [isNameValid, setIsNameValid] = useState(false);
   const [isContactValid, setIsContactValid] = useState(false);
   const [nameErrors, setNameErrors] = useState([]);
   const [contactErrors, setContactErrors] = useState([]);
   const [captchaErrors, setCaptchaErrors] = useState([]);
 
   const validateName = () => {
     let errors = [];
     if (name.length === 0) errors.push(data.form.errors.fields.name.cantBeBlank);
     if (!errors.length) setIsNameValid(true);
     setNameErrors(errors);
     return errors;
   }
 
   const validateContact = () => {
     let errors = [];
     const emailRegEx = /^[A-Za-z0-9][A-Za-z0-9-+_.]*[A-Za-z0-9]@[A-Za-z0-9][A-Za-z0-9-_.]+[A-Za-z0-9]$/im;
     const phoneRegEx = /^[\+]?[0-9\s]{0,4}[(]?[0-9]{2,3}[)]?[-\s0-9]+$/im;
 
     if (contact.length === 0) errors.push(data.form.errors.fields.contact.cantBeBlank)
     else if (
         !emailRegEx.test(contact) &&
         !(phoneRegEx.test(contact) && contact.length >= 10)
     ) errors.push(data.form.errors.fields.contact.invalidInput);
 
     if (!errors.length) setIsContactValid(true);
     setContactErrors(errors);
     return errors;
   }
 
   const validateCaptcha = () => {
     let errors = [];
     if (!verificationKey) errors.push(data.form.errors.fields.captcha.cantBeBlank);
     setCaptchaErrors(errors);
     return errors;
   }
 
   const validateForm = () => {
     const validations = [
       validateName(),
       validateContact(),
       validateCaptcha()
     ];
     return validations.flat().length === 0;
   };
 
   const clearForm = () => {
     setName("");
     setContact("");
   };
 
   const allErrors = () => [
     requestErrors,
     nameErrors,
     contactErrors,
     captchaErrors
   ];
 
   const resetAllErrors = () => {
     setRequestErrors([]);
     setNameErrors([]);
     setContactErrors([]);
     setCaptchaErrors([]);
 
     setIsNameValid(false);
     setIsContactValid(false);
   }
 
   const hasErrors = () => allErrors().flat().length > 0;

  // Form handlers

  const handleResult = (result) => {
    if (result === true) {
      clearForm();
      onSuccess(true);
    } else {
      setRequestErrors([result.message]);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    recaptchaRef && recaptchaRef.current && recaptchaRef.current.reset();
    const isFormValid = validateForm();

    if (isFormValid) {
      resetAllErrors();
      setIsLoading(true);
      const result = await postCalculate({ name, contact, verificationKey });
      handleResult(result);
      setIsLoading(false);
    }
    setVerificationKey(null);
  };

  // Helpers

  const renderErrors = () => {
    return (
      <div className={styles.errors}>
        <div className={styles.errorDescription}><Error className={styles.errorSvg} />{data.form.errors.title}</div>
        { allErrors().flat().map((err, index) => <div key={index}>{err}</div>) }
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.title}>{ data.title }</div>
      <div className={styles.description}>{ data.description }</div>
      { hasErrors() && renderErrors() }
      <div className={styles.inputWraper}>
        <label className={styles.label}>{ data.form.labels.name }</label>
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
        <label className={styles.label}>{ data.form.labels.contact }</label>
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
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={config.RECAPTCHA_PUBLIC_KEY}
        onChange={setVerificationKey}
      />
      <button type='submit' className={cx(styles.calculate, {[styles.calculateDisabled]: isLoading})}>{ data.form.submitBtn }</button>
    </form>
  );
}

export default CalculateForm;
