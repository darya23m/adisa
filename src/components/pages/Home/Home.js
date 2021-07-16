import React from 'react';

import Intro from './Intro/Intro';
import MainTitle from './MainTitle/MainTitle';
import Economy from './Economy/Economy';
import Power from './Power/Power';
import NoiseLvl from './NoiseLvl/NoiseLvl';
import Quality from './Quality/Quality';
import Pollution from './Pollution/Pollution';
import Training from './Training/Training';
import Repairs from './Repairs/Repairs';

function Home({ data }) {
  return (
    <>
      <Intro data={data.intro} />
      <MainTitle data={data.mainTitle} />
      <Economy data={data.economy} />
      <Power data={data.power}/>
      <NoiseLvl data={data.noiseLvl} />
      <Quality data={data.quality} />
      <Pollution data={data.pollution} />
      <Training data={data.training} />
      <Repairs data={data.repairs} />
    </>
  )
}

export default Home;
