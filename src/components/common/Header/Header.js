import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import locales from 'content/locales';
import styles from './Header.module.scss';

const Header = ({ data, locale }) => {
  const pathname = useLocation().pathname;
  const getPathWithNextLocale = (nextLocale) =>
    pathname.replace(/(^\/.*)(\/.*)/, `${nextLocale}$2`);

  const renderLinks = () =>
    Object.keys(data.links).map((currKey, index) =>
      <NavLink key={currKey}
               exact={!index}
               to={`${locale}/${index ? currKey : ''}`}
               className={styles.navLink}
               activeClassName={styles.navLinkActive}
      >
        { data.links[currKey] }
      </NavLink>
    );

  const renderLangLinks = () =>
    locales.map((curr, index) =>
      <NavLink key={index}
               to={`/${getPathWithNextLocale(curr.uri)}`}
               className={styles.langLink}
               activeClassName={styles.langLinkActive}
      >
        { curr.text }
      </NavLink>
    );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <nav className={styles.nav}>
          { renderLinks() }
        </nav>
        <div className={styles.lang}>
          { renderLangLinks() }
          <div className={styles.arrow} />
        </div>
      </div>
    </div>
  );
};

export default Header;
