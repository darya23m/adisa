import React, { useEffect } from 'react';
import cx from 'classnames';

import styles from './Popup.module.scss';
import { ReactComponent as Close } from './img/close.svg';

const Popup = ({ closePopup, isPopupFadeOutActive, children }) => {
  const handleKeyDown = (ev) => {
    if (ev.key === 'Escape') {
      closePopup()
    }
  }

  useEffect(() => {
    const innerWidth = window.innerWidth;
    const clientWidth = document.documentElement.clientWidth;
    const scrollbarWidth = innerWidth - clientWidth;
    const bodyStyles = document.documentElement.style;

    bodyStyles.overflow = 'hidden';
    bodyStyles.paddingRight = `${scrollbarWidth}`;

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      bodyStyles.overflow = 'visible';
      bodyStyles.paddingRight = '0';

      document.removeEventListener('keydown', handleKeyDown);
    }
  });

  return (
    <div className={cx(styles.container, {[styles.containerFadeOut]: isPopupFadeOutActive})}>
      <div id="popup-wrapper" className={styles.wraper} onClick={closePopup}>
        <div className={styles.content}>
          <Close id="popup-close" className={styles.close} onClick={closePopup} />
          { children }
        </div>
      </div>
    </div>
  );
};

export default Popup;
