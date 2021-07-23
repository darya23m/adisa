import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import cx from 'classnames';

import { ReactComponent as Logo } from './img/logo.svg';
import locales from 'content/locales';
import styles from './Header.module.scss';

function Header({ data, locale }) {
  const [ isMobMenuOpen, setIsMobMenuOpen ] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const getPathWithNextLocale = (nextLocale) => {
    if (!/\/.*\//.test(pathname)) return `/${nextLocale}`;

    return pathname.replace(/(\/.*?)(\/.*)/, `/${nextLocale}$2`);
  };

  useEffect(() => {
    setIsMobMenuOpen(false);
  }, [location]);

  const renderLinks = () =>
    Object.keys(data.links).map((currKey, index) =>
      <NavLink key={currKey}
               exact={!index}
               to={`${locale}/${index ? currKey : ''}`}
               style={isMobMenuOpen
                 ? {animationDelay: `${index * 150 + 200}ms`}
                 : {animationDelay: `${index * 150 + 800}ms`}
               }
               className={cx(styles.navLink, {[styles.navLinkWithMobAnimation]: isMobMenuOpen})}
               activeClassName={styles.navLinkActive}
      >
        { data.links[currKey] }
      </NavLink>
    );

  const renderLangLinks = ({ isMob } = {}) =>
    locales.map((curr, index) =>
      <NavLink key={index}
               to={getPathWithNextLocale(curr.uri)}
               className={cx(styles.langLink, {[styles.langLinkMob]: isMob})}
               style={isMobMenuOpen
                 ? {animationDelay: `${index * 150 + 1200}ms`}
                 : {animationDelay: `${index * 150 + 2100}ms`}
               }
               activeClassName={styles.langLinkActive}
      >
        { curr.text }
      </NavLink>
    );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link className={styles.logoMob} to={`${locale}`}>
          <Logo />
        </Link>
        <nav className={cx(styles.nav, {[styles.navOpenedMob]: isMobMenuOpen})}>
          { renderLinks() }
          <div className={styles.langMob}>
            { renderLangLinks({ isMob: true }) }
          </div>
        </nav>
        <div className={styles.leftBar}>
          { renderLangLinks() }
          <div className={cx(styles.menuBtnMob, {[styles.menuBtnMobActive]: isMobMenuOpen})}
               onClick={() => setIsMobMenuOpen(!isMobMenuOpen)}
          >
            <div /><div /><div />
          </div>
          <div className={styles.arrow} />
        </div>
      </div>
    </div>
  );
}

export default Header;
