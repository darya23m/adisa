import config from 'config/app';

export default function () {
  this.post(`${config.API_BASE_URL}/contact`, (req) => {
    return [
      201,
      { 'Content-Type': 'application/json' },
      JSON.stringify({})
    ];
  });
};
