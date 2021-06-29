import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
     <div className={styles.container}>
       <div></div>
       <div>
        <div className={styles.nav}>
          Menu
        </div>
        <div className={styles.lang}>
          Ru Ua
        </div>
       </div>
       <div></div>
     </div>
  );
};

export default Header;
