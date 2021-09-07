import React, { useState, useRef, useImperativeHandle } from 'react';
import cx from 'classnames';

import Title from 'components/common/Title/Title';
import Grid from './Grid/Grid';
import styles from './Economy.module.scss';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';
import FirstTimeSeen from 'components/common/FirstTimeSeen/FirstTimeSeen';

const Economy = React.forwardRef(({ data }, ref) => {
  const calculatorRef = useRef(null);
  const chartRef = useRef(null);

  useImperativeHandle(ref, () => ({
    get calculator() {
      return calculatorRef.current
    },
    get chart() {
      return chartRef.current
    }
  }));

  const [isArrowVisible, setIsArrowVisible] = useState(false);
  const [isArrowInitiallyVisible, setIsArrowInitiallyVisible] = useState(false);
  const [powerValue, setPowerValue] = useState('');
  const [resultEconomyValue, setResultEconomyValue] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isResultShown, setIsResultShown] = useState(false);

  const handleSetPowerValue = (ev) => {
    const value = ev.target.value;
    if (/[^0-9]/.test(value)) return;

    setPowerValue(value);
    setHasError(false);
    setIsResultShown(false);
  }

  const calcEconomy = () => {
    if (!powerValue) {
      setHasError(true);

      return;
    }

    setResultEconomyValue(powerValue);
    setIsResultShown(true);
  }

  const renderScaleItems = () =>
    data.scaleItems.map((curr, index) =>
      <div key={index} className={cx(styles.scaleItem, {[styles.scaleItemWithResult]: isResultShown})}>
        <div className={styles.defaultRect}
             style={ !isResultShown
               ? { transitionDelay: `${0.3 + 0.1 * index}s` }
               : { transitionDelay: `${0.1 * index}s` }
             }
        />
        <div className={styles.resultRect}
             style={ isResultShown
               ? { transitionDelay: `${0.3 + 0.1 * index}s` }
               : { transitionDelay: `${0.1 * index}s` }
             }
        />
        <div className={styles.resultValue}
             style={ isResultShown
               ? { transitionDelay: `${0.5 + 0.1 * index}s` }
               : { transitionDelay: `${0.1 * index}s` }
             }
        >
          { (resultEconomyValue * curr.mod).toFixed() }{" "}м<sup>3</sup>
        </div>
        <div className={styles.scaleLabel}>{ curr.label }</div>
      </div>
    );

  return (
    <div className={cx("commonContentContainer", styles.container)}>
      <Title title={data.title} number="1" />
      <div className={styles.subtitle}> { parseStrWithBoldElems(data.subtitle) }</div>
      <div className={styles.calculator} ref={calculatorRef}>
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
        <div className={cx(styles.content, {[styles.contentShown]: isArrowVisible})}>
          <FirstTimeSeen onEncounter={setIsArrowVisible} initiallyVisible={setIsArrowInitiallyVisible}>
            <div className={styles.form}>
              <div className={styles.spacer} />
              <div className={styles.fieldWrap}>
                <input type='text'
                       className={styles.field}
                       onChange={handleSetPowerValue}
                       value={powerValue}
                       maxLength="6"
                />
                { hasError && <div className={styles.error}>{ data.error }</div> }
              </div>
              <div className={styles.unitMob}>{ data.unit }</div>
              <div className={styles.right}>
                <div className={styles.unit}>{ data.unit }</div>
                <button type="button" className={styles.calcBtn} onClick={calcEconomy}>
                  { data.calcButton }
                </button>
              </div>
            </div>
          </FirstTimeSeen>
          <div className={styles.chartDescription}>{ parseStrWithBoldElems(data.chartDescription) }</div>
          <div className={styles.chartWrap} ref={chartRef}>
            <div className={styles.gridWrap}>
              <Grid rows={22} cols={45} borderColor="#cce4fa" borderWidth="1" />
            </div>
            <div className={styles.gridWrapMob}>
              <Grid rows={41} cols={20} borderColor="#cce4fa" borderWidth="1" />
            </div>
            <div className={styles.scale}>
              { renderScaleItems() }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Economy;
