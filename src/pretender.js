import Pretender from 'pretender';

import calculatePretender from './features/calculate/pretender';

export default () => {
  const server = new Pretender(
    calculatePretender
  );

  server.handledRequest = function handledRequest(verb, path, request) {
    console.info(`[Pretender] ${verb} ${path}`, request);
  };
};
