import React from 'react';
import cx from 'classnames';

import { ReactComponent as CircleIcon } from "./img/circle.svg";
import styles from './Title.module.scss';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';

function Title({ title, number, isWhite }) {
  return (
    <div className={cx(styles.container, {[styles.containerWhite]: isWhite})}>
      <div className={styles.number}>
        { number }
        <CircleIcon className={styles.circleIcon} />
      </div>
      <h2 className={styles.title}>{ parseStrWithBoldElems(title) }</h2>
    </div>
  );
}

export default Title;
