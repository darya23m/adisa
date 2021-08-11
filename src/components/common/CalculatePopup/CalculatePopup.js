import React, { useState } from 'react';

import ButtonCalculate from 'components/common/ButtonCalculate/ButtonCalculate';
import Popup from 'components/common/Popup/Popup';
import CalculateForm from 'components/common/CalculateForm/CalculateForm';

function CalculatePopup({ data: { button, form } }) {
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

  return !isPopupShown ? 
      (<ButtonCalculate data={ button } type="button" onClick={() => setIsPopupShown(true)} />) :
      (<Popup closePopup={handleClosePopup} isPopupFadeOutActive={isPopupFadeOutActive}>
        <CalculateForm data={ form } />
      </Popup>);
}

export default CalculatePopup;
