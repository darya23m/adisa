import config from 'config/app';
// import mock from './mock';

export default function () {
  this.post(`${config.API_BASE_URL}/calculate`, (req) => {
    return [
      201,
      { 'Content-Type': 'application/json' },
      JSON.stringify({})
    ];
  });
};
