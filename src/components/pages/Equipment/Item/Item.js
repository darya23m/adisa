import React from 'react';
import cx from 'classnames';

import styles from './Item.module.scss';
import ecoImg from './img/eco.jpg';
import { ReactComponent as IconDownload } from './img/Download.svg';
import { ReactComponent as IconLink } from './img/Link.svg';

function Item(
  { data: { name, description, features, docsIntro, docs, table, preview }, isAnimationFadeoutActive }
) {
  const docsAnimationDuration = docs.length * 100;

  const renderPreviewImages = (images) =>
    images.map((curr, index) =>
      <div className={styles.previewItem}>
        { curr.description &&
          <div className={styles.previewDescription}>
            { curr.description }
          </div>
        }
        <img key={index} src={curr.path} alt={curr.alt} className={styles.previewImage} width={curr.width} />
      </div>
    )

  const renderPreview = () =>
    preview.map((curr, index) =>
      <div key={index} className={styles.preview}>
        { renderPreviewImages(curr.images) }
      </div>
    )

  const renderCell = (row) =>
    row.map((curr, index) =>
      <td key={index} className={styles.tableCell}>{ curr }</td>
    )

  const renderTable = () =>
    table.map((curr, index) =>
      <tr key={index}
          className={styles.tableRow}
          style={{animationDelay: `${index * 300 + 3000 + docsAnimationDuration}ms`}}
      >
        { renderCell(curr) }
      </tr>
    )

  const renderDocs = () =>
    docs.map((curr, index) => {
      const isDownloadable = curr.type === 'doc';

      return (
        <div key={index} className={styles.doc} style={{animationDelay: `${index * 100 + 2800}ms`}}>
          { isDownloadable
            ? <IconDownload className={styles.downloadIcon} />
            : <IconLink className={styles.linkIcon} />
          }
          <a download={isDownloadable}
             href={curr.link}
             className={cx(styles.docLink, {[styles.docLinkDownloadable]: isDownloadable})}>
            { curr.text }
          </a>
        </div>
      );
    })

  const renderFeatures = () =>
    features.map((curr, index) =>
      <ol key={index}>{ curr }</ol>
    );

  return (
    <div className={cx(styles.container, {[styles.containerHidden]: isAnimationFadeoutActive})}>
      <div className={styles.captionWrap}>
        <div className={styles.caption}>
          <h2 className={styles.name}>{ name }</h2>
          <h3 className={styles.description}>{ description }</h3>
        </div>
        <img src={ecoImg} alt="Eco Design: ErP ready" className={styles.ecoIcon} />
      </div>
      <ul className={styles.features}>
        { renderFeatures() }
        <div className={styles.verticalDividerWrap}>
          <div className={styles.verticalDivider} />
        </div>
      </ul>
      <div className={styles.docs}>
        <div className={styles.docsIntro}>{ docsIntro }</div>
        { renderDocs() }
      </div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          { renderTable() }
        </table>
      </div >
      { renderPreview() }
    </div>
  );
}

export default Item;