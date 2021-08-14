import React, { useRef, useImperativeHandle } from 'react';

import logo from './img/logo.svg';
import { ReactComponent as Eclipse } from './img/eclipse.svg';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';
import boiler1 from './img/boiler-small.png';
import boiler2 from './img/boiler-medium.png';
import boiler3 from './img/boiler-big.png';
import styles from './Intro.module.scss';

const Intro = React.forwardRef(({ data }, ref) => {
  const boiler1Ref = useRef(null);
  const boiler2Ref = useRef(null);
  const boiler3Ref = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useImperativeHandle(ref, () => ({
    get boiler1() {
      return boiler1Ref.current;
    },
    get boiler2() {
      return boiler2Ref.current;
    },
    get boiler3() {
      return boiler3Ref.current;
    },
    get title() {
      return titleRef.current;
    },
    get description() {
      return descriptionRef.current;
    },
  }));

  return (
      <div className={styles.container}>
        <div className={styles.bgLayoutWrap}>
          <div className={styles.bgLayout} />
          <div className={styles.boilers}>
            <div className={styles.boilerWrap} style={{animationDelay: "2s"}}>
              <img ref={boiler1Ref} className={styles.boiler1} src={boiler1} alt="Boiler small" />
            </div>
            <div className={styles.boilerWrap} style={{animationDelay: "2.2s"}}>
              <img ref={boiler2Ref} className={styles.boiler2} src={boiler2} alt="Boiler medium" />
            </div>
            <div className={styles.boilerWrap} style={{animationDelay: "2.4s"}}>
              <img ref={boiler3Ref} className={styles.boiler3} src={boiler3} alt="Boiler big" />
            </div>
          </div>
        </div>
        <div className={styles.commonContentContainer}>
          <img className={styles.logo} src={logo} alt={data.logoAlt} />
          <div className={styles.titleWrap}>
            <h1 ref={titleRef} className={styles.title}>{ data.title }</h1>
          </div>
          <div className={styles.descriptionWrap}>
            <div ref={descriptionRef} className={styles.description}>
              { parseStrWithBoldElems(data.description) }
            </div>
          </div>
        </div>
        <Eclipse className={styles.eclipse} />
      </div>
  );
});

export default Intro;
