import React from 'react';

function DataProvider({ children, locale }) {
  const data = require(`content/${locale}`).default;

  return children(data);
}

export default DataProvider;
