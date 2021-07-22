import React from 'react';

// import Header from '../../common/Header/Header';
// import Footer from '../../common/Footer/Footer';
import InfoList from './InfoList';
import styles from './Info.module.scss';

const Info = ({ data }) => {
  const renderLists = (lists) => lists.map((list, index) => (<InfoList key={index} data={list} />));

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>{data.title}</div>
        <div className={styles.content}>
          {renderLists(data.info)}
        </div>
      </div>
    </>
  );
};

export default Info;