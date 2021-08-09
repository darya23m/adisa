import Pretender from 'pretender';

import calculatePretender from './features/calculate/pretender';
import contactPretender from './features/contact/pretender';

export default () => {
  const server = new Pretender(
    calculatePretender,
    contactPretender
  );

  server.handledRequest = function handledRequest(verb, path, request) {
    console.info(`[Pretender] ${verb} ${path}`, request);
  };
};
