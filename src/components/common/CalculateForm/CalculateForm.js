import React, { useState } from 'react';
import cx from 'classnames';

import config from 'config/app';
import styles from './CalculateForm.module.scss';
import { calculate } from 'features/calculate/utils';
import ReCAPTCHA from "react-google-recaptcha";
import { ReactComponent as Error } from './img/error.svg';

const CalculateForm = ({ data: { title, description, labelName, labelContact, button, titleError, nameError, contactError, captchaError }, onSuccess }) => {
  const recaptchaRef = React.createRef();

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  // Form fields
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [verificationKey, setVerificationKey] = useState(null);

  // Form handlers
  const validateForm = () => {
    let validationErrors = new Array();

    if (name.length === 0) validationErrors.push(nameError);
    if (contact.length === 0) validationErrors.push(contactError);
    if (!verificationKey) validationErrors.push(captchaError);

    return validationErrors;
  };

  const clearForm = () => {
    setName("");
    setContact("");
  };

  const handleResult = (result) => {
    if (result === true) {
      clearForm();
      onSuccess(true);
    } else {
      setErrors([result.message]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    recaptchaRef && recaptchaRef.current && recaptchaRef.current.reset();

    const validationErrors = validateForm();

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors([]);
      setIsLoading(true);
      const result = await calculate({ name, contact, verificationKey });
      handleResult(result);
      setIsLoading(false);
    }
    setVerificationKey(null);
  };

  // Helpers

  const renderErrors = () => {
    return (
      <div className={styles.errors}>
        <div className={styles.errorDescription}><Error className={styles.errorSvg} />{titleError}</div>
        { errors.map((err, index) => <div key={index}>{err}</div>) }
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.title}>{ title }</div>
      <div className={styles.description}>{ description }</div>
      { errors.length > 0 && renderErrors() }
      <div className={styles.inputWraper}>
        <label className={styles.label}>{ labelName }</label>
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
        <label className={styles.label}>{ labelContact }</label>
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
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={config.RECAPTCHA_PUBLIC_KEY}
        onChange={setVerificationKey}
      />
      <button type='submit' className={cx(styles.calculate, {[styles.calculateDisabled]: isLoading})}>{ button }</button>
    </form>
  );
}

export default CalculateForm;
