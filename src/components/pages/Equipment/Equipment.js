import React, { useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch, useLocation, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import cx from 'classnames';

import styles from './Equipment.module.scss';
import Item from './Item/Item';
import Nav from './Nav/Nav';
import { ReactComponent as ArrowLeft } from './img/arrow-left.svg';

function Equipment({ data: { meta , data }, isAppFaded}) {
  const { isExact, path} = useRouteMatch();
  const [ isContentShown, setIsContentShown ] = useState(true);
  const [ isAnimationFadeoutActive, setIsAnimationFadeoutActive ] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsContentShown(true);
    setIsAnimationFadeoutActive(false);
  }, [location]);

  const equipmentRoutes = (list) =>
    list.map((item, index) =>
      <Route key={index} path={`${path}/${item.path}`}>
        <Item data={item} isAnimationFadeoutActive={isAnimationFadeoutActive} />
      </Route>
    )

  const renderContent = () => (
    <>
      <button type="button" className={styles.toListBtn} onClick={() => setIsContentShown(false)}>
        <ArrowLeft className={styles.arrowLeftIcon} />
        К списку оборудования
      </button>
      <Switch>
        { equipmentRoutes(data) }
      </Switch>
    </>
  );

  const renderPage = () =>
    <div className={cx(styles.container, {[styles.containerHidden]: isAppFaded})}>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <Nav data={data}
           isContentShown={isContentShown}
           isAnimationFadeoutActive={isAnimationFadeoutActive}
           setIsAnimationFadeoutActive={setIsAnimationFadeoutActive}
      />
      { isContentShown && renderContent() }
    </div>

  return (
    isExact
      ? <Redirect to={`${path}/${data[0].path}`} />
      : renderPage()
  );
}

export default Equipment;
