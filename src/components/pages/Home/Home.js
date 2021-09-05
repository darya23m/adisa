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

function Home({ data: { meta }, data, isAppFaded }) {
  const scrollTop = useRef(0);
  // const elemsStatesMemo = useRef({});

  const introRef = useRef(null);


  // const setElemsStates = (elemsStates) => {}

  const calcElemsStates = (currScrollTop) => {
    // const elemsStates = elemsStatesMemo.current[currScrollTop];

    // if (elemsStates) {
    //   setElemsStates(elemsStates);
    //
    //   return;
    // }

    // const newElemsStates = elemsStatesMemo.current[currScrollTop] = {};

    const {
      title: introTitle,
      description: introDescription,
      boiler1,
      boiler2,
      boiler3,
    } = introRef.current;

    introTitle.style.transform = `translate3d(0, ${Math.floor(currScrollTop / 4)}px, 0) scale3d(${ 1 + currScrollTop * 0.0005 }, ${ 1 + currScrollTop * 0.0008 }, 1)`;
    introDescription.style.transform = `translate3d(${Math.floor(currScrollTop / 2)}px, ${Math.floor(currScrollTop / 2)}px, 0)`;
    introDescription.style.opacity = `${ 1 - currScrollTop * 0.008 }`;

    // boiler1.style.transform = `translate3d(0, ${Math.floor(currScrollTop / 4)}px, 0)`;
    // boiler2.style.transform = `translate3d(0, ${Math.floor(currScrollTop / 2.5)}px, 0)`;
    // boiler3.style.transform = `translate3d(0, ${Math.floor(currScrollTop / 1.5)}px, 0)`;

    boiler1.style.transform = `translate3d(0, ${Math.floor(currScrollTop / 1.8)}px, 0)`;
    boiler2.style.transform = `translate3d(0, ${Math.floor(currScrollTop / 2.3)}px, 0)`;
    boiler3.style.transform = `translate3d(0, ${Math.floor(currScrollTop / 4)}px, 0)`;

    // boiler1.style.transform = `translate3d(${Math.floor(currScrollTop)}px, ${Math.floor(currScrollTop / 1.5)}px, 0)`;
    // boiler2.style.transform = `translate3d(${Math.floor(currScrollTop)}px, ${Math.floor(currScrollTop / 2.5)}px, 0)`;
    // boiler3.style.transform = `translate3d(${Math.floor(currScrollTop)}px, ${Math.floor(currScrollTop / 10)}px, 0)`;
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
      <Economy data={data.economy} />
      <Power data={data.power} />
      <NoiseLvl data={data.noiseLvl} />
      <Quality data={data.quality} />
      <Pollution data={data.pollution} />
      <Training data={data.training} />
      <Repairs data={data.repairs} />
    </div>
  )
}

export default Home;
