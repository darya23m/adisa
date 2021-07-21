import React from 'react';
import cx from 'classnames';

import styles from './Title.module.scss';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';

function Title({ title, number, isWhite, isWide }) {
  return (
    <div className={cx(styles.container, {[styles.containerWhite]: isWhite}, {[styles.containerWide]: isWide})}>
      <div className={styles.number}>{ number }</div>
      <h2 className={styles.title}>{ parseStrWithBoldElems(title) }</h2>
    </div>
  );
}

export default Title;
