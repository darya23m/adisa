import React, { useState } from 'react';

import ButtonCalculate from 'components/common/ButtonCalculate/ButtonCalculate';
import Popup from 'components/common/Popup/Popup';
import CalculateForm from 'components/common/CalculateForm/CalculateForm';
import FormSuccessMessage from 'components/common/FormSuccessMessage/FormSuccessMessage';

function CalculatePopup({ data, isHidden }) {
  const [isPopupShown, setIsPopupShown] = useState(false);
  const [isPopupFadeOutActive, setIsPopupFadeOutActive] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClosePopup = (e) => {
    if (e && e.target.id !== "popup-wrapper" && e.target.id !== "popup-close") return;
    setIsPopupFadeOutActive(true);

    setTimeout(() => {
      setIsPopupShown(false);
      setIsPopupFadeOutActive(false);
      setSuccess(false);
    }, 400)
  }

  const onSuccess = () => {
    setSuccess(true);
    setTimeout(handleClosePopup, 5000);
  }

  return (
    !isPopupShown
      ? <ButtonCalculate data={ data.calculateBtn }
                         onClick={() => setIsPopupShown(true)}
                         isHidden={isHidden}
        />
      : <Popup closePopup={handleClosePopup} isPopupFadeOutActive={isPopupFadeOutActive}>
          { !success
              ? <CalculateForm data={ data } onSuccess={onSuccess} />
              : <FormSuccessMessage data={ data.form.success } />
          }
        </Popup>
  );
}

export default CalculatePopup;
