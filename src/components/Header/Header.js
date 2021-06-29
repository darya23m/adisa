import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
     <div className={styles.container}>
       <div></div>
       <div>
        <div className={styles.nav}>
          <ul>
            <li className={styles.nav_list_item}>
              <a href='#ADISA'>ADISA</a>
            </li>
            <li className={styles.nav_list_item}>
              <a href='#Equipment'>Оборудование</a>
            </li>
            <li className={styles.nav_list_item}>
              <a href='#Projectors'>Проектировщику</a>
            </li>
            <li className={styles.nav_list_item}>
              <a href='#Offices'>Представительства</a>
            </li>
            <li className={styles.nav_list_item}>
              <a href='#Contacts'>Контакты</a>
            </li>
          </ul>
        </div>
        <div className={styles.lang}>
          <ul className={styles.lang_list}>
            <li  className={styles.lang_item}>
              <button className={styles.lang_button}>RU</button>
            </li>
            <li>
              <button className={styles.lang_button}>UA</button>
            </li>
          </ul>
        </div>
       </div>
       <div></div>
     </div>
  );
};

export default Header;
