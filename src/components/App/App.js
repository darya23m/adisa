import React, { useEffect } from 'react';

import Nav from 'components/layouts/Nav/Nav';
import styles from './App.module.scss';

function App() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);

  return (
    <div className={styles.container}>
      <Nav />
    </div>
  );
}

export default App;
