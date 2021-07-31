import React from 'react';

import Title from 'components/common/Title/Title';
import styles from './Quality.module.scss';
import siemens from './img/siemens.png';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';

const Quality = ({ data: { title, description, siemensAlt }}) => {
  const renderDescription = () =>
    description.map((curr, index) =>
      <p key={index} className={styles.description}>{ parseStrWithBoldElems(curr) }</p>
    )

  return (
    <div className={styles.container}>
      <Title title={title} number="4" isWhite />
      <div className={styles.content}>
        <div className={styles.descriptionWrap}>
          { renderDescription() }
        </div>
        <div className={styles.siemensImgWrap}>
          <img src={siemens} alt={siemensAlt} className={styles.siemensImg} />
        </div>
      </div>
    </div>
  );
};

export default Quality;
