import React, { useEffect, useState } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';

import DataProvider from 'components/layouts/DataProvider/DataProvider';
import locales from 'content/locales';
import Header from 'components/common/Header/Header';
import Footer from 'components/common/Footer/Footer';
import CalculatePopup from 'components/common/CalculatePopup/CalculatePopup';
import Home from 'components/pages/Home/Home';
import Info from 'components/pages/Info/Info';
import Contacts from 'components/pages/Contacts/Contacts';
import Equipment from 'components/pages/Equipment/Equipment';

function Nav() {
  const location = useLocation();
  const history = useHistory();
  const [rerouted, setRerouted] = useState(-1);
  const [isAppFaded, setIsAppFaded] = useState(false);
  const [isHeaderFaded, setIsHeaderFaded] = useState(false);

  const handleAppFaded = (newLocation, isLang) => {
    if (isAppFaded) return;

    setIsAppFaded(true);
    if (isLang) setIsHeaderFaded(true);

    setTimeout(() => {
      setIsAppFaded(false);
      if (isLang) setIsHeaderFaded(false);

      history.push(newLocation);
    }, 300);
  }

  useEffect(() => {
    window.scrollTo({ top: 0 });

    if (rerouted <= 0) setRerouted(rerouted + 1);
  }, [location]);

  const renderMainRoutes = (data, locale) => {
    return (
      <>
        <Header locale={locale} data={data.header} handleAppFaded={handleAppFaded} isHeaderFaded={isHeaderFaded} />
        <Switch>
          <Route exact path={locale}>
            <Home data={data.home} isAppFaded={isAppFaded} />
          </Route>
          <Route path={`${locale}/equipment`}>
            <Equipment data={data.equipment} isAppFaded={isAppFaded} />
          </Route>
          <Route path={`${locale}/info`}>
            <Info data={data.info} isRerouted={!!rerouted} isAppFaded={isAppFaded} />
          </Route>
          <Route path={`${locale}/contacts`}>
            <Contacts data={data.contacts} isRerouted={!!rerouted} isAppFaded={isAppFaded} />
          </Route>
        </Switch>
        <CalculatePopup data={data.calculate}
                        isHidden={location.pathname === `${locale}/contacts` || isHeaderFaded}
        />
        <Footer locale={locale} data={data.footer} isAppFaded={isAppFaded} />
      </>
    );
  };

  const renderLocales = () =>
    locales.map(curr => {
      const locale = `/${curr.uri}`;

      return (
        <Route key={locale} path={locale}>
          <DataProvider locale={curr.uri}>
            {data => renderMainRoutes(data, locale)}
          </DataProvider>
        </Route>
      );
    });

  return (
    <Switch>
      { renderLocales() }
    </Switch>
  );
}

export default Nav;
