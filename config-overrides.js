const ROUTES = [
  '/ru',
  '/ru/equipment/adi-lt',
  '/ru/equipment/adi-cd',
  '/ru/equipment/adi-mega',
  '/ru/equipment/condexa-pro',
  '/ru/info',
  '/ru/contacts',
  '/ua',
  '/ua/equipment/adi-lt',
  '/ua/equipment/adi-cd',
  '/ua/equipment/adi-mega',
  '/ua/equipment/condexa-pro',
  '/ua/info',
  '/ua/contacts'
];

// locale.forEach(curr => {
//   ROUTES.push()
// });

const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');

module.exports = (config, env) => {
  if (env === 'production') {
    config.plugins = config.plugins.concat([
      new PrerenderSPAPlugin({
        routes: ROUTES,
        staticDir: path.join(__dirname, 'build'),
      }),
    ]);
  }

  return config;
};
