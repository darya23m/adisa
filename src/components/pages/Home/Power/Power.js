import React from 'react';

import Title from 'components/common/Title/Title';
import styles from './Power.module.scss';
import planFirst from './img/plan1.jpg';
import planSecond from './img/plan2.jpg';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';

const Power = ({ data: {
  title, description, subTitle, schemeImgNameFirst, schemeImgAltFirst,
  schemeImgNameSecond, schemeImgAltSecond, blueRect, info
}}) => {
  const renderDescription = () =>
    description.map((curr, index) =>
      <p key={index} className={styles.description}>
        { parseStrWithBoldElems(curr) }
      </p>
    )

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title title={title} number="2" titleStyles={styles.title} />
        <div>
          { renderDescription() }
        </div>
        <div className={styles.subTitle}>{ subTitle }</div>
        <div className={styles.plan}>
          <div className={styles.planItemFirst}>
            <div className={styles.picNameFirst}>{ schemeImgNameFirst }</div>
            <div className={styles.planFirst}>
              <img src={planFirst} alt={schemeImgAltFirst} className={styles.planImg} />
            </div>
          </div>
          <div className={styles.planItemSecond}>
            <div className={styles.picNameSecond}>{ schemeImgNameSecond }</div>
            <div className={styles.planSecond}>
              <img src={planSecond} alt={schemeImgAltSecond} className={styles.planImg} />
            </div>
            <div className={styles.blueRect} dangerouslySetInnerHTML={{__html: blueRect}} />
          </div>
        </div>
        <i className={styles.info}>{ info }</i>
      </div>
    </div>
  );
};

export default Power;
