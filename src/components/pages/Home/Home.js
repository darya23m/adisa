import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import cx from 'classnames';

import Intro from './Intro/Intro';
import Tagline from './Tagline/Tagline';
import Economy from './Economy/Economy';
import Power from './Power/Power';
import NoiseLvl from './NoiseLvl/NoiseLvl';
import Quality from './Quality/Quality';
import Pollution from './Pollution/Pollution';
import Training from './Training/Training';
import Repairs from './Repairs/Repairs';
import styles from './Home.module.scss';

function Home({ data: { meta }, data, isAppFaded, goToContacts, locale }) {
  const scrollTop = useRef(0);
  const elemsStatesRef = useRef({});

  const introRef = useRef(null);
  const economyRef = useRef(null);
  const noiseLvlRef = useRef(null);
  const pollutionRef = useRef(null);

  const calcElemsStates = (currScrollTop) => {
    const viewportHeight = window.innerHeight;

    const isIntroVisible = introRef.current.container.getBoundingClientRect().bottom > 0;
    if (isIntroVisible) {
      const { title: introTitle, description: introDescription, boiler1, boiler2, boiler3 } = introRef.current;

      introTitle.style.transform = `translate3d(0, ${Math.floor(currScrollTop / 4)}px, 0) scale3d(${ 1 + currScrollTop * 0.0005 }, ${ 1 + currScrollTop * 0.0008 }, 1)`;
      introDescription.style.transform = `translate3d(${Math.floor(currScrollTop / 2)}px, ${Math.floor(currScrollTop / 2)}px, 0)`;
      introDescription.style.opacity = `${ 1 - currScrollTop * 0.008 }`;

      boiler1.style.transform = `translate3d(0, ${Math.floor(currScrollTop / 1.8)}px, 0)`;
      boiler2.style.transform = `translate3d(0, ${Math.floor(currScrollTop / 2.3)}px, 0)`;
      boiler3.style.transform = `translate3d(0, ${Math.floor(currScrollTop / 4)}px, 0)`;
    }

    // TODO: prevent if out of viewport
    if (!elemsStatesRef.current.isEconomyChartShown) {
      const { calculator, chart } = economyRef.current;
      const calculatorTopAndViewportMidOffset = calculator.getBoundingClientRect().top - viewportHeight / 2;

      calculator.style.backgroundColor = `rgba(231, 241, 252, ${1 - calculatorTopAndViewportMidOffset * 0.004})`;

      const isEconomyChartVisible = chart.getBoundingClientRect().bottom - viewportHeight < 0;

      if (isEconomyChartVisible) {
        chart.setAttribute('data-visibility', true);
        elemsStatesRef.current.isEconomyChartShown = true;
      }
    }

    const { noiseLvlRightChart, noiseLvlExample } = noiseLvlRef.current;

    // TODO: prevent if out of viewport
    if (!elemsStatesRef.current.isNoiseLvlRightChartShown) {
      const noiseLvlRightChartRect = noiseLvlRightChart.getBoundingClientRect();
      const noiseLvlRightChartMidAndViewportMidOffset = (
        (noiseLvlRightChartRect.top + noiseLvlRightChartRect.height / 2) - (viewportHeight / 2)
      );

      if (noiseLvlRightChartMidAndViewportMidOffset >= 0 ) {
        noiseLvlRightChart.style.transform = `translate3d(0, ${noiseLvlRightChartMidAndViewportMidOffset * 0.3}px, 0)`;
      } else {
        noiseLvlRightChart.setAttribute('data-visibility', true);
        elemsStatesRef.current.isNoiseLvlRightChartShown = true;
      }
    }

    // TODO: prevent if out of viewport
    if (!elemsStatesRef.current.isNoiseLvlExampleShown) {
      const noiseLvlExampleTopAndViewportMidOffset = noiseLvlExample.getBoundingClientRect().top - (viewportHeight / 2);

      if (noiseLvlExampleTopAndViewportMidOffset <= 0) {
        noiseLvlExample.setAttribute('data-visibility', true);
        elemsStatesRef.current.isNoiseLvlExampleShown = true;
      }
    }

    const { pollutionLeftChart, pollutionRightChart } = pollutionRef.current;
    const pollutionRightChartRect = pollutionRightChart.getBoundingClientRect();
    const pollutionChartsTopAndViewportMidOffset = (
      (pollutionRightChartRect.top + pollutionRightChartRect.height / 4) - (viewportHeight / 2)
    );
    const pollutionLeftChartOffset = pollutionChartsTopAndViewportMidOffset * -0.4;
    const pollutionRightChartOffset = pollutionChartsTopAndViewportMidOffset * 0.4;

    // TODO: prevent if out of viewport
    if (pollutionLeftChartOffset < 0 || pollutionRightChartOffset > 0) {
      pollutionLeftChart.style.transform = `translate3d(${pollutionLeftChartOffset > 0 ? 0 : pollutionLeftChartOffset}px, 0, 0)`;
      pollutionRightChart.style.transform = `translate3d(${pollutionRightChartOffset < 0 ? 0 : pollutionRightChartOffset}px, 0, 0)`;
    }
  }

  useEffect(() => {
    const animationsIntervalId = setInterval(() => {
      const currScrollTop = document.documentElement.scrollTop;

      if (currScrollTop === scrollTop.current) return;
      scrollTop.current = currScrollTop;

      window.requestAnimationFrame(() => calcElemsStates(currScrollTop));
    }, 0);

    return () => {
      clearInterval(animationsIntervalId);
    };
  }, [])

  return (
    <div className={cx(styles.container, {[styles.containerHidden]: isAppFaded})}>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <Intro data={data.intro} ref={introRef} />
      <Tagline data={data.tagline} />
      <Economy data={data.economy} ref={economyRef} />
      <Power data={data.power} />
      <NoiseLvl data={data.noiseLvl} ref={noiseLvlRef} />
      <Quality data={data.quality} />
      <Pollution data={data.pollution} ref={pollutionRef} />
      <Training data={data.training} />
      <Repairs data={data.repairs} goToContacts={goToContacts} locale={locale} />
    </div>
  )
}

export default Home;
