import React from 'react';
import cx from 'classnames';

import { ReactComponent as CircleIcon } from "./img/circle.svg";
import styles from './Title.module.scss';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';

function Title({ title, number, titleWrapStyles = {}, titleStyles = {}, isWhite }) {
  return (
    <div className={cx(styles.container, {[styles.containerWhite]: isWhite}, titleWrapStyles)}
    >
      <div className={styles.number}>
        { number }
        <CircleIcon className={styles.circleIcon} />
      </div>
      <h2 className={cx(styles.title, titleStyles)}>{ parseStrWithBoldElems(title) }</h2>
    </div>
  );
}

export default Title;
