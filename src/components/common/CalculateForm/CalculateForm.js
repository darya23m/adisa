import React, { useState } from 'react';
import cx from 'classnames';

import styles from './CalculateForm.module.scss';
import { calculate } from 'features/calculate/utils';

const CalculateForm = ({ data: { title, description, labelName, labelContact, button }, onSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
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
      onSuccess(true);
    } else {
      setErrors([result.message]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

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
      <button type='submit' className={cx(styles.calculate, {[styles.calculateDisabled]: isLoading})}>{ button }</button>
    </form>
  );
}

export default CalculateForm;
