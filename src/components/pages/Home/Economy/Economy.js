import React, { useState } from 'react';
import cx from 'classnames';

import Title from 'components/common/Title/Title';
import styles from './Economy.module.scss';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';
import FirstTimeSeen from 'components/common/FirstTimeSeen/FirstTimeSeen';

function Economy({ data }) {
  const [isArrowVisible, setIsArrowVisible] = useState(false);
  const [isArrowInitiallyVisible, setIsArrowInitiallyVisible] = useState(false);
  const renderScaleItems = () =>
    data.scaleItems.map((curr, index) =>
      <div key={index} className={styles.scaleItem}>{ curr }</div>
    );

  return (
    <div className={cx("commonContentContainer", styles.container)}>
      <Title title={data.title} number="1" />
      <div className={styles.subtitle}>{JSON.stringify(isArrowInitiallyVisible)} { parseStrWithBoldElems(data.subtitle) }</div>
      <div className={styles.calculator}>
        <div className={styles.labelWrap}>
          <div className={cx(styles.label, {
              [styles.labelAnimate]: isArrowVisible, 
              [styles.labelInitVisible]: isArrowInitiallyVisible
            })}>{ parseStrWithBoldElems(data.label) }</div>
          <div className={cx(styles.arrow, {
              [styles.arrowAnimate]: isArrowVisible,
              [styles.arrowInitVisible]: isArrowInitiallyVisible
            })} />
        </div>
        <div className={styles.content}>
          <FirstTimeSeen onEncounter={setIsArrowVisible} initiallyVisible={setIsArrowInitiallyVisible}>
            <div className={styles.form}>
              <div className={styles.spacer} />
              <input type='text' className={styles.field} />
              <div className={styles.unitMob}>{ data.unit }</div>
              <div className={styles.right}>
                <div className={styles.unit}>{ data.unit }</div>
                <button type="button" className={styles.calcBtn}>{ data.calcButton }</button>
              </div>
            </div>
          </FirstTimeSeen>
          <div className={styles.chartDescription}>{ parseStrWithBoldElems(data.chartDescription) }</div>
          <div className={styles.chart}>
            <div className={styles.gridFirst} />
            <div className={styles.gridSecond} />
            <div className={styles.gridThird} />
            <div className={styles.gridForth} />
          </div>
          <div className={styles.scale}>
            { renderScaleItems() }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Economy;
