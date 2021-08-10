import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import cx from 'classnames';

import styles from './NavigationLink.module.scss';

function NavigationLink({ children, to, alwaysActive, handleNavLinkClick, isAnimationFadeoutActive }) {
  const match = useRouteMatch({ path: to });
  const isActive = match && !alwaysActive;

  return (
    <div className={cx(
           styles.linkWrap,
           { [styles.linkWrapActive]: !isAnimationFadeoutActive && isActive,
             [styles.linkWrapMobHidden]: isActive
           }
         )}
    >
      <a href={to}
         onClick={ev => handleNavLinkClick(ev, to)}
         className={styles.link}
      >
        { children }
      </a>
      <div className={styles.arrow} />
    </div>
  );
}

export default NavigationLink;
