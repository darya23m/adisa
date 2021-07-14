import React from 'react';

import Intro from './Intro/Intro';
import MainTitle from './MainTitle/MainTitle';
import Economy from './Economy/Economy';
import Power from './Power/Power';

function Home({ data }) {
  return (
    <>
      <Intro data={data.intro} />
      <MainTitle data={data.mainTitle} />
      <Economy data={data.economy} />
      <Power data={data.power}/>
    </>
  )
}

export default Home;