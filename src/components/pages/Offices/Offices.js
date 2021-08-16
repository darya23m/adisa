import React from 'react';
import { Switch, Route, Link, useRouteMatch, matchPath, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import cx from 'classnames';

import styles from './Offices.module.scss';
import Office from './Office';
import {ReactComponent as ArrowIcon} from './img/Down.svg';

const Offices = ({ data: { meta, title, offices }, isRerouted }) => {
  const { pathname } = useLocation();
  const { path, url } = useRouteMatch(); 

  const { params: { current } } = matchPath(pathname, { path: `${path}/:current` }) || {params: {}};
  const currIndex = offices.map((o) => o.path).indexOf(current);
  const officesBefore = offices.slice(0, currIndex);
  const officesAfter = current ? offices.slice(currIndex+1) : [];

  const officeLinks = (list) => list.map((item, index) => (
    <Link to={`${url}/${item.path}`} className={styles.item}>
      <ArrowIcon key={index} className={styles.arrowIcon}/>
      <div key={index} className={styles.city}>{ item.city }</div>
      <div key={index} className={styles.horizontalDividerWrap} style={{animationDelay: `${(index + 1) * 150}ms`}}>
        <div key={index} className={styles.horizontalDivider} style={{animationDelay: `${(index + 1) * 200}ms`}}/>
      </div>
    </Link>
  ));

  const officeRoutes = (list) => list.map((item) => (
    <Route path={`${path}/${item.path}`}>
      <Office data={item} parentUrl={url} />
    </Route>
  ))

  return (
    <>
      <div className={styles.container}>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
        <div className={cx(styles.header, {[styles.headerNoDelay]: isRerouted})}>{title}</div>
        <div className={styles.content}>
          {officeLinks(officesBefore)}
          <Switch>
            {officeRoutes(offices)}
          </Switch>
          {officeLinks(officesAfter)}
        </div>
    </div>
    </>
  );
};

export default Offices;
