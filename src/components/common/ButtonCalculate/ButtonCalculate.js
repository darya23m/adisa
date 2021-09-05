import React, {useEffect} from 'react';
import cx from 'classnames';

import styles from './ButtonCalculate.module.scss';

const ButtonCalculate = ({ data, onClick, isHidden }) => {
  return (
    <button type="button"
            className={cx(styles.calculate, {[styles.calculateHidden]: isHidden})}
            onClick={onClick}
    >
      { data }
    </button>
  );
};

export default ButtonCalculate;
