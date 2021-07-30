import React from 'react';

import styles from './EquipmentItem.module.scss';
import eco from './img/eco.jpg';
import { ReactComponent as IconDownload } from './img/Download.svg';
import { ReactComponent as IconLink } from './img/Link.svg';
import boiler from './img/condexaBoiler.jpg';
import draw from './img/condexaDraw.jpg';
import pro from './img/condexaPro.jpg';

const EquipmentItem = ({ data }) => {
  const features = data.features.map((curr, index) => <div key={index}>{curr}</div>);

  const tableCell = (row) => row.map((curr, index) => 
    <td key={index} className={styles.tableCell}>{curr}</td>)

  const table = (table) => table.map((curr, index) => 
    <tr key={index} className={styles.tableRow}>
      {tableCell(curr)}
    </tr>);
  
  const renderImages = (images) => images.map((curr, index) => 
    <div className={styles.imageItem}>
      { curr.description && <div className={styles.imgDescr}>{curr.description}</div> }
      <img key={index} src={curr.path} alt={curr.alt} className={styles.image} width={curr.width} />
    </div>
    );

  const renderPreview = (list) => list.map((curr, index) => 
    <div key={index} className={styles.preview}>
        {renderImages(curr.images)}
    </div>
    );

  return (
    <>
      <div className={styles.content}>
        <div className={styles.subheader}>
          <div className={styles.title}>
            <h2 className={styles.namePage}>{data.name}</h2>
            <h3 className={styles.description}>{data.description}</h3>
          </div>
          <div className={styles.iconEco}><img src={eco} className={styles.eco} /></div>
        </div>
        <div className={styles.features}>{features}</div>
        <div className={styles.tableBlock}>
          <table className={styles.table}>{table(data.table)}</table>
        </div >
        {renderPreview(data.preview)}
        <div className={styles.docs}>
          <div className={styles.docsText}>Ссылки и документы:</div>
          <div className={styles.iconDownload}>
            <IconDownload className={styles.icon} /> 
            <a className={styles.download}>Document</a>
          </div>
          <div className={styles.iconLink}>
            <IconLink className={styles.icon} /> 
            <a className={styles.link}>Link</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentItem;
