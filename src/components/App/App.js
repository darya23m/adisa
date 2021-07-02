import React from 'react';

import Header from 'components/Header/Header';
import Intro from 'components/Intro/Intro';
import Economy from 'components/Economy/Economy';
import Power from 'components/Power/Power';

//import styles from './App.module.scss';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Intro />
      <Economy />
      <Power />
    </React.Fragment>
  );
}

export default App;
