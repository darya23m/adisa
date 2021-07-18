import React from 'react';

import Intro from './Intro/Intro';
import Tagline from './Tagline/Tagline';
import Economy from './Economy/Economy';
import Power from './Power/Power';

function Home({ data }) {
  return (
    <>
      <Intro data={data.intro} />
      <Tagline data={data.tagline} />
      <Economy data={data.economy} />
      <Power data={data.power}/>
    </>
  )
}

export default Home;