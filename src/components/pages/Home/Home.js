import React, { useState } from 'react';

import Intro from './Intro/Intro';
import Tagline from './Tagline/Tagline';
import Economy from './Economy/Economy';
import Power from './Power/Power';
import NoiseLvl from './NoiseLvl/NoiseLvl';
import Quality from './Quality/Quality';
import Pollution from './Pollution/Pollution';
import Training from './Training/Training';
import Repairs from './Repairs/Repairs';
import ButtonCalculate from 'components/common/ButtonCalculate/ButtonCalculate';
import Popup from 'components/common/Popup/Popup';
import CalculateForm from 'components/common/CalculateForm/CalculateForm';

function Home({ data }) {
  const [isPopupShown, setIsPopupShown] = useState(false);
  const [isPopupFadeOutActive, setIsPopupFadeOutActive] = useState(false);

  const handleClosePopup = ({ target: { id } }) => {
    if(id !== "popup-wrapper" && id !== "popup-close") return;
    setIsPopupFadeOutActive(true);

    setTimeout(() => {
      setIsPopupShown(false);
      setIsPopupFadeOutActive(false);
    }, 400)
  }

  return (
    <>
      <Intro data={data.intro} />
      <Tagline data={data.tagline} />
      <Economy data={data.economy} />
      <Power data={data.power} />
      <NoiseLvl data={data.noiseLvl} />
      <Quality data={data.quality} />
      <Pollution data={data.pollution} />
      <Training data={data.training} />
      <Repairs data={data.repairs} />
      { !isPopupShown ? <ButtonCalculate type="button" onClick={() => setIsPopupShown(true)} /> :
        <Popup closePopup={handleClosePopup} isPopupFadeOutActive={isPopupFadeOutActive}>
          <CalculateForm />
        </Popup>
      }
    </>
  )
}

export default Home;
