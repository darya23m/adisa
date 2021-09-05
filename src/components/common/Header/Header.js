import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import cx from 'classnames';

import { ReactComponent as Logo } from './img/logo.svg';
import locales from 'content/locales';
import styles from './Header.module.scss';

function Header({ data, locale, handleAppFaded, isHeaderFaded }) {
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

  const handleLinkClick = (ev, nextLocation, options = {}) => {
    ev.preventDefault();

    handleAppFaded(nextLocation, options.isLang);
  }

  const checkIsActive = ({ url, exact }) => {
    if (exact) return location.pathname === url;

    const regex = new RegExp(`^${url}`);

    return regex.test(location.pathname);
  }

  const renderLinks = () =>
    Object.keys(data.links).map((currKey, index) => {
      const url = `${locale}${index ? '/' + currKey : ''}`;

      return (
        <a key={currKey}
           onClick={ev => handleLinkClick(ev, url)}
           href={url}
           style={
             isHeaderFaded
              ? {animationDelay: "0s"}
              : isMobMenuOpen
                ? {animationDelay: `${index * 150 + 200}ms`}
                : {animationDelay: `${index * 150 + 800}ms`}
           }
           className={cx(
             styles.navLink,
             { [styles.navLinkWithMobAnimation]: isMobMenuOpen,
               [styles.navLinkActive]: checkIsActive({url, exact: !index})
             }
           )}
        >
          { data.links[currKey] }
        </a>
      );
    });

  const renderLangLinks = ({ isMob } = {}) =>
    locales.map((curr, index) => {
      const url = getPathWithNextLocale(curr.uri);

      return (
        <a key={index}
           onClick={ev => handleLinkClick(ev, url, {isLang: true})}
           href={url}
           className={cx(
             styles.langLink,
             { [styles.langLinkMob]: isMob,
               [styles.langLinkActive]: checkIsActive({url})
             }
           )}
           style={isMobMenuOpen
             ? {animationDelay: `${index * 150 + 1200}ms`}
             : {animationDelay: `${index * 150 + 2100}ms`}
           }
        >
          { curr.text }
        </a>
      );
    });

  return (
    <div className={styles.container}>
      <div className={cx(styles.content, {[styles.contentHidden]: isHeaderFaded})}>
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
