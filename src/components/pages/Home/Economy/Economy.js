import React from 'react';

import styles from './Economy.module.scss';

const Economy = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <span>{data.title.number}</span>
          <h2>{data.title.text}</h2>
        </div>
        <h3 className={styles.subtitle} dangerouslySetInnerHTML={{__html: data.subtitle}}></h3>
        <div className={styles.calculator}>
          <div className={styles.power}>
            <label className={styles.powerDescr}>{data.label}</label>
            <input type='number' className={styles.powerInput}></input>
            <p className={styles.unit}>{data.unit}</p>
            <button className={styles.calculate}>Посчитать</button>
          </div>
          <div className={styles.grafTitle} dangerouslySetInnerHTML={{__html: data.description}}></div>
          <div className={styles.graf}>
            <div className={styles.grafGrid}>
              <div className={styles.gridFirst}></div>
              <div className={styles.gridSecond}></div>
              <div className={styles.gridThird}></div>
              <div className={styles.gridForth}></div>
            </div>
            <div className={styles.grafYears}>
              <div className={styles.yearsOne}>{data.grafYears[0]}</div>
              <div className={styles.yearsFive}>{data.grafYears[1]}</div>
              <div className={styles.yearsTen}>{data.grafYears[2]}</div>
              <div className={styles.yearsTwenty}>{data.grafYears[3]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Economy;
