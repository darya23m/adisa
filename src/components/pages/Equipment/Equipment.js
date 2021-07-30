import React, { useEffect, useState } from 'react';
import { Switch, Route, Link, useRouteMatch, useLocation } from 'react-router-dom';
import cx from 'classnames';

import styles from './Equipment.module.scss';
import EquipmentItem from './EquipmentItem';
import { ReactComponent as ArrowLeft } from './img/arrow_left.svg';

const EquipmentLink = ({ children, to, exact, alwaysActive }) => {
  const match = useRouteMatch({ path: to, exact });
  const isActive = match && !alwaysActive;

  return (
    <div className={styles.link}>
      <Link to={to} className={cx(styles.linkPage, {[styles.linkPageActive]: isActive})}>{children}</Link>
      <div className={isActive ? styles.arrow : {display: 'none'}}></div>
    </div> 
  );
}

const Equipment = ({ data }) => {
  const { path, url } = useRouteMatch();
  const [ isContentShown, setIsContentShown ] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsContentShown(true);
  }, [location]);

  const equipmentLinks = (list) => list.map((item) => (
    <EquipmentLink to={`${url}/${item.path}`} alwaysActive={ !isContentShown }>{item.name}</EquipmentLink>
  )) 

  const equipmentRoutes = (list) => list.map((item) => (
    <Route path={`${path}/${item.path}`}>
      <EquipmentItem data={item} />
    </Route>
  ));

  const renderContent = () => (
    <>
      <div className={styles.toList} onClick={() => setIsContentShown(!isContentShown)}>
        <ArrowLeft className={styles.arrowLeft}/>
        <a className={styles.linkToList}>К списку оборудования</a>
      </div>
      <Switch>
        { equipmentRoutes(data) }
      </Switch>
    </>
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.linksList}>
          {equipmentLinks(data)}
        </div>
        { isContentShown && renderContent() }
      </div>
    </>
  );

};

export default Equipment;
