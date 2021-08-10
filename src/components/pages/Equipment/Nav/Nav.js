import React, {useRef} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';

import NavigationLink from './NavigationLink/NavigationLink';
import styles from './Nav.module.scss';

function Nav({ data, isContentShown, isAnimationFadeoutActive, setIsAnimationFadeoutActive }) {
  const history = useHistory();
  const { url } = useRouteMatch();
  const redirectTimeoutId = useRef(null);

  const handleNavLinkClick = (ev, nextLocation) => {
    ev.preventDefault();
    clearTimeout(redirectTimeoutId.current);

    if (!isAnimationFadeoutActive) setIsAnimationFadeoutActive(true);

    const delay = document.documentElement.clientWidth > 1024 ? 320: 0;

    redirectTimeoutId.current = setTimeout(() => {
      history.push(nextLocation);
    }, delay);
  }

  const renderNavLinks = () =>
    data.map((item, index) =>
      <NavigationLink key={index}
                      to={`${url}/${item.path}`}
                      alwaysActive={!isContentShown}
                      handleNavLinkClick={handleNavLinkClick}
                      isAnimationFadeoutActive={isAnimationFadeoutActive}
      >
        { item.name }
      </NavigationLink>
    )

  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        { renderNavLinks() }
      </div>
    </nav>
  );
}

export default Nav;
