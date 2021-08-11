import React from 'react';
import { Helmet } from 'react-helmet';

import Intro from './Intro/Intro';
import Tagline from './Tagline/Tagline';
import Economy from './Economy/Economy';
import Power from './Power/Power';
import NoiseLvl from './NoiseLvl/NoiseLvl';
import Quality from './Quality/Quality';
import Pollution from './Pollution/Pollution';
import Training from './Training/Training';
import Repairs from './Repairs/Repairs';

function Home({ data: { meta }, data }) {
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <Intro data={data.intro} />
      <Tagline data={data.tagline} />
      <Economy data={data.economy} />
      <Power data={data.power} />
      <NoiseLvl data={data.noiseLvl} />
      <Quality data={data.quality} />
      <Pollution data={data.pollution} />
      <Training data={data.training} />
      <Repairs data={data.repairs} />
    </>
  )
}

export default Home;
