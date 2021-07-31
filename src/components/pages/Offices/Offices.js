import React from 'react';
import { Switch, Route, Link, useRouteMatch, matchPath, useLocation } from 'react-router-dom';

import styles from './Offices.module.scss';
import Office from './Office';
import {ReactComponent as ArrowIcon} from './img/Down.svg';

const Offices = ({ data: { title, offices } }) => {
  const { pathname } = useLocation();
  const { path, url } = useRouteMatch(); 

  const { params: { current } } = matchPath(pathname, { path: `${path}/:current` }) || {params: {}};
  const currIndex = offices.map((o) => o.path).indexOf(current);
  const officesBefore = offices.slice(0, currIndex);
  const officesAfter = current ? offices.slice(currIndex+1) : [];

  const officeLinks = (list) => list.map((item) => (
    <Link to={`${url}/${item.path}`} className={styles.item}>
      <ArrowIcon className={styles.arrowIcon}/>
      <div className={styles.city}>{ item.city }</div>
    </Link>
  ));

  const officeRoutes = (list) => list.map((item) => (
    <Route path={`${path}/${item.path}`}>
      <Office data={item} parentUrl={url} />
    </Route>
  ))

  return (
    <div className={styles.container}>
      <div className={styles.header}>{title}</div>
      <div className={styles.content}>
        {officeLinks(officesBefore)}
        <Switch>
          {officeRoutes(offices)}
        </Switch>
        {officeLinks(officesAfter)}
      </div>
    </div>
  );
};

export default Offices;