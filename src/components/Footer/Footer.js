import React from 'react';

import styles from './Footer.module.scss';
import background from './assets/background.png';

const Footer = () => {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${background})` }}>
      <div></div>
      <div>
        <h2 className={styles.header}>ADISA - более 50-ти лет на рынке Европы</h2>
        <div className={styles.text}>
          <p>ADISA Group была основана в 1961 Пьером Марти, ее действующим президентом.</p>
          <p>- ADISA Calefaccion (отопительное оборудование): производство высокоэффективных решений для отопления и производства горячей воды, средней и большой мощности, таких как котлы и модульные котельные;</p>
          <p>- ADISA Antilegionella гарантирует постоянное устранение бактерий в системе ГВС.</p>
          <p>Добившись признания на европейском и американском рынках, компания заинтересовалась рынком стран Восточной Европы. В год своего 50-тилетнего юбилея ADISA Group вышла на рынок Украины. Развитие компании основано на политике постоянных инвестиций в исследования, на деловых взаимоотношениях с партнерами, а также на клиенте и его потребностях. В настоящее время формируется дилерская сеть и проводятся обучения проектировщиков.</p>
        </div>
        <div className={styles.made_by}>
          Made by
          {' '}
          <a href="https://logge.company">
            Logge.company
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
