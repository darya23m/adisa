import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const FirstTimeSeen = ({ children, onEncounter, initiallyVisible }) => {
  const [isInitialValueSet, setIsInitialValueSet] = useState(false);
  const [hasSeen, setHasSeen] = useState(false);
  const onChange = (isVisible) => {
    if (initiallyVisible && !isInitialValueSet) {
      initiallyVisible(isVisible);
      setIsInitialValueSet(true);
    }
    if (hasSeen || !isVisible) return;

    setHasSeen(true);
    onEncounter(true);
  };


  return (
    <VisibilitySensor onChange={ onChange }>
      {children}
    </VisibilitySensor>
  );
}

export default FirstTimeSeen;