const ROUTES = [
  '/ru',
  '/ru/equipment/adi-lt',
  '/ru/equipment/adi-cd',
  '/ru/equipment/adi-mega',
  '/ru/equipment/condensa-pro',
  '/ru/info',
  '/ru/offices',
  '/ru/contacts',
  '/ua',
  '/ua/equipment/adi-lt',
  '/ua/equipment/adi-cd',
  '/ua/equipment/adi-mega',
  '/ua/equipment/condensa-pro',
  '/ua/info',
  '/ua/offices',
  '/ua/contacts'
];

// locale.forEach(curr => {
//   ROUTES.push()
// });

// const PrerenderSPAPlugin = require('prerender-spa-plugin');
// const path = require('path');

module.exports = (config, env) => {
  // if (env === 'production') {
  //   config.plugins = config.plugins.concat([
  //     new PrerenderSPAPlugin({
  //       routes: ROUTES,
  //       staticDir: path.join(__dirname, 'build'),
  //     }),
  //   ]);
  // }

  return config;
};
