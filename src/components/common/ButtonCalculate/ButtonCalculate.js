import React from 'react';

import styles from './ButtonCalculate.module.scss';

const ButtonCalculate = (props) => {
  return (
    <>
      <button className={styles.calculate} onClick={props.onClick}>
        ПРОСЧИТАТЬ КОТЕЛЬНУЮ
      </button>
    </>
  );
};

export default ButtonCalculate;
