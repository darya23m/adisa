import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DataProvider from 'components/layouts/DataProvider/DataProvider';
import Header from 'components/common/Header/Header';
import Home from 'components/pages/Home/Home';
import locales from 'content/locales';
import Footer from 'components/common/Footer/Footer';

function Nav() {
  const renderMainRoutes = (data, locale) => {
    return (
      <>
        <Header locale={locale} data={data.header} />
        <Switch>
          <Route exact path={locale}>
            <Home data={data.home} />
          </Route>
          <Route path={`${locale}/equipment`}>
            <div>Equipment</div>
          </Route>
          <Route path={`${locale}/info`}>
            <div>Info</div>
          </Route>
          <Route path={`${locale}/offices`}>
            <div>Offices</div>
          </Route>
          <Route path={`${locale}/contacts`}>
            <div>Contacts</div>
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
