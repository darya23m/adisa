import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
     <div className={styles.container}>
       <div></div>
       <div>
        <div className={styles.nav}>
          <ul>
            <li>
              <a href='#ADISA'>ADISA</a>
            </li>
            <li>
              <a href='#Equipment'>Оборудование</a>
            </li>
            <li>
              <a href='#Projectors'>Проектировщику</a>
            </li>
            <li>
              <a href='#Offices'>Представительства</a>
            </li>
            <li>
              <a href='#Contacts'>Контакты</a>
            </li>
          </ul>
        </div>
        <div className={styles.lang}>
          <a href='#RU' className={styles.active}>Рус</a>
          <a href='#UA'>Укр</a>
        </div>
       </div>
       <div></div>
     </div>
  );
};

export default Header;
