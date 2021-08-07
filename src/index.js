import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { getEnv } from './utils/general';
import initPretender from './pretender';

import './index.css';
import App from 'components/App/App';

if (getEnv() === "development") {
  initPretender();
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
