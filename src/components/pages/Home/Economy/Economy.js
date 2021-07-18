import React from 'react';
import cx from 'classnames';

import Title from 'components/common/Title/Title';
import styles from './Economy.module.scss';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';

function Economy({ data }) {
  const renderScaleItems = () =>
    data.scaleItems.map((curr, index) =>
      <div key={index} className={styles.scaleItem}>{ curr }</div>
    );

  return (
    <div className={cx("commonContentContainer", styles.container)}>
      <Title title={data.title} number="1" />
      <div className={styles.subtitle}>{ parseStrWithBoldElems(data.subtitle) }</div>
      <div className={styles.calculator}>
        <div className={styles.labelWrap}>
          <div className={styles.label}>{ parseStrWithBoldElems(data.label) }</div>
          <div className={styles.arrow} />
        </div>
        <div className={styles.content}>
          <div className={styles.form}>
            <div className={styles.spacer} />
            <input type='text' className={styles.field} />
            <div className={styles.unitMob}>{ data.unit }</div>
            <div className={styles.right}>
              <div className={styles.unit}>{ data.unit }</div>
              <button type="button" className={styles.calcBtn}>{ data.calcButton }</button>
            </div>
          </div>
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
