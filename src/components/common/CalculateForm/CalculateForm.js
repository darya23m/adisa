import React, { useState } from 'react';
import cx from 'classnames';

import styles from './CalculateForm.module.scss';
import { calculate } from 'features/calculate/utils';

const CalculateForm = ({ data: { title, description, labelName, labelContact, button } }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState([]);

  // Form fields
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

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
      const result = await calculate({ name, contact });
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
      <div className={styles.title}>{ title }</div>
      <div className={styles.description}>{ description }</div>
      { success && renderSuccess() }
      { errors.length > 0 && renderErrors() }
      <div className={styles.inputWraper}>
        <label className={styles.label}>{ labelName }</label>
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
        <label className={styles.label}>{ labelContact }</label>
        <input 
          className={styles.input}
          type="text"
          name="contact"
          value={contact}
          onChange={e => setContact(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <button type='submit' className={cx(styles.calculate, {[styles.calculateDisabled]: isLoading})}>{ button }</button>
    </form>
  );
}

export default CalculateForm;
