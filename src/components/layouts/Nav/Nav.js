import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import DataProvider from 'components/layouts/DataProvider/DataProvider';
import Header from 'components/common/Header/Header';
import Home from 'components/pages/Home/Home';
import locales from 'content/locales';
import Footer from 'components/common/Footer/Footer';
import Info from 'components/pages/Info/Info';
import Contacts from 'components/pages/Contacts/Contacts';
import Offices from 'components/pages/Offices/Offices';
import Equipment from 'components/pages/Equipment/Equipment';

function Nav() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  const renderMainRoutes = (data, locale) => {
    return (
      <>
        <Header locale={locale} data={data.header} />
        <Switch>
          <Route exact path={locale}>
            <Home data={data.home} />
          </Route>
          <Route path={`${locale}/equipment`}>
            <Equipment data={data.equipment} />
          </Route>
          <Route path={`${locale}/info`}>
            <Info data={data.info}/>
          </Route>
          <Route path={`${locale}/offices`}>
            <Offices data={data.offices} />
          </Route>
          <Route path={`${locale}/contacts`}>
            <Contacts data={data.contacts} />
          </Route>
        </Switch>
        <Footer locale={locale} data={data.footer} />
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
