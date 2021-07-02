import React from 'react';

import styles from './Economy.module.scss';

import divider from './divider.svg'

const Economy = () => {
  return (
    <div className={styles.economy}>
      <h1>Котлы ADISA - это</h1>
      <div className={styles.divider}>
        <img src={divider} alt='divider' />
      </div>
      <div className={styles.title}>
        <span>1</span>
        <h2> Минимальный расход газа</h2>
      </div>
      <h3>
      Благодаря высокой эффективности конденсационных котлов<br />
      <b>расход газа ниже на 15%, чем у обычных жаротрубных котлов. </b>
      </h3>
      <div className={styles.calculator}>
        <div className={styles.calculator_power}>
          <div className={styles.calculator_power_descr}>
            <label>
            Введите мощность котельной,<br /> 
            чтобы увидеть свою экономию
            </label>
          </div>
          <input type='number'></input>
          <p>кВт</p>
          <button>Посчитать</button>
        </div>
        <div className={styles.calculator_title}>
          Ваша <span>экономия газа</span> в сравнении с обычным котлом составит:
        </div>
        <div className={styles.graf}>
          <div className={styles.graf_grid}>
            <div className={styles.graf_grid_first}></div>
            <div className={styles.graf_grid_second}></div>
            <div className={styles.graf_grid_third}></div>
            <div className={styles.graf_grid_forth}></div>
          </div>
          <div className={styles.graf_years}>
            <div className={styles.graf_years_one}>За год</div>
            <div className={styles.graf_years_five}>За 5 лет</div>
            <div className={styles.graf_years_ten}>За 10 лет</div>
            <div className={styles.graf_years_twenty}>За 20 лет</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Economy;
