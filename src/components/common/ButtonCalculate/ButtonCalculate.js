import React from 'react';

import styles from './ButtonCalculate.module.scss';

const ButtonCalculate = ({ data, onClick}) => {
  return (
    <>
      <button className={styles.calculate} onClick={onClick}>
        {data}
      </button>
    </>
  );
};

export default ButtonCalculate;
