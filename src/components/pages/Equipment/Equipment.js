import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import cx from 'classnames';

import styles from './Equipment.module.scss';
import EquipmentItem from './EquipmentItem';

const EquipmentLink = ({ children, to, exact }) => {
  const match = useRouteMatch({ path: to, exact });

  return (
    <div className={styles.link}>
      <Link to={to} className={cx(styles.linkPage, {[styles.linkPageActive]: match})}>{children}</Link>
      <div className={match ? styles.arrow : {display: 'none'}}></div>
    </div> 
  );
}

const Equipment = ({ data }) => {
  const { path, url } = useRouteMatch();

  const equipmentLinks = (list) => list.map((item) => (
    <EquipmentLink to={`${url}/${item.path}`}>{item.name}</EquipmentLink>
  )) 

  const equipmentRoutes = (list) => list.map((item) => (
    <Route path={`${path}/${item.path}`}>
      <EquipmentItem data={item} />
    </Route>
  )) 

  return (
    <>
      <div className={styles.container}>
        <div className={styles.linksList}>
          {equipmentLinks(data)}
        </div>
        <Switch>
          {equipmentRoutes(data)}
        </Switch>
      </div>
    </>
  );

};

export default Equipment;
