import React from 'react';

import Title from 'components/common/Title/Title';
import { ReactComponent as Service } from './img/service.svg';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';
import styles from './Repairs.module.scss';

const Repairs = ({ data: { title, description, serviceLinkText }}) => {
  return (
    <div className={styles.container}>
      <Title title={title} number="7" />
      <div className={styles.content}>
        <div className={styles.serviceImgWrap}>
          <Service className={styles.serviceImg} />
        </div>
        <div className={styles.text}>
          { parseStrWithBoldElems(description) }
          <a href='#Services' className={styles.serviceLink}>{ serviceLinkText }</a>
        </div>
      </div>
    </div>
  );
};

export default Repairs;
