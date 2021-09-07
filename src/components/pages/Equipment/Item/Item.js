import React, {useEffect, useRef} from 'react';
import { Helmet } from 'react-helmet';
import cx from 'classnames';

import styles from './Item.module.scss';
import ecoImg from './img/eco.jpg';
import { ReactComponent as IconDownload } from './img/Download.svg';
import { ReactComponent as IconLink } from './img/Link.svg';

function Item({ data, isAnimationFadeoutActive, isAnimationRemove, setIsAnimationRemove }) {
  const tableWrapRef = useRef(null);
  const { name, meta, description, features, docsIntro, docs, table, preview } = data;
  const previewAnimationDelay = table.length * 100 + 1900;

  useEffect(() => {
    setTimeout(() => {
      if (tableWrapRef.current) tableWrapRef.current.style.overflowX = 'auto';
    }, previewAnimationDelay);

    let removeAllAnimationsTimerId;

    if (!isAnimationRemove) {
      removeAllAnimationsTimerId = setTimeout(() => {
        setIsAnimationRemove(true);
      }, previewAnimationDelay + 1000);
    }

    return () => {
      clearTimeout(removeAllAnimationsTimerId);
    };
  }, []);

  const renderPreviewImages = (images) => images.map((curr, index) => (
    <div key={index} className={cx(styles.previewItem, {[styles.previewItemWide]: curr.isWide})}>
      { curr.description &&
        <div className={styles.previewDescription}>
          { curr.description }
        </div>
      }
      <img src={curr.path} alt={curr.alt} className={styles.previewImage} />
    </div>
  ));

  const renderPreviewVideo = (videos) =>
    videos.map(({ src, title }, index) =>
      <div key={index} className={styles.previewVideo}>
        <iframe
          className={styles.video}
          src={src}
          title={title}
          frameBorder={0}
          allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}>
        </iframe>
      </div>
    )

  const isImagesPresent = (images) => images && images.length > 0;
  const isVideosPresent = (videos) => videos.filter((v) => v && v.src).length > 0;

  const renderPreview = () =>
    preview.map((curr, index) =>
      <div key={index} className={styles.preview} style={{animationDelay: `${previewAnimationDelay}ms`}}>
        { isImagesPresent(curr.images) && renderPreviewImages(curr.images) }
        { isVideosPresent(curr.videos) && renderPreviewVideo(curr.videos) }
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
          style={{animationDelay: `${index * 100 + 1700}ms`}}
      >
        { renderCell(curr) }
      </tr>
    )

  const renderDocs = () =>
    docs.map((curr, index) => {
      const isDownloadable = curr.type === 'doc';

      return (
        <div key={index} className={styles.doc} style={{animationDelay: `${index * 150 + 1200}ms`}}>
          { isDownloadable
            ? <IconDownload className={styles.downloadIcon} />
            : <IconLink className={styles.linkIcon} />
          }
          <a download={isDownloadable}
             href={curr.link}
             target="_blank"
             rel="noreferrer"
             className={cx(styles.docLink, {[styles.docLinkDownloadable]: isDownloadable})}>
            { curr.text }
          </a>
        </div>
      );
    })

  const renderFeatures = () =>
    features.map((curr, index) =>
      <ol key={index} dangerouslySetInnerHTML={{__html: curr}} />
    );

  return (
    <div className={cx(
      styles.container,
      {[styles.containerHidden]: isAnimationFadeoutActive, [styles.withoutAnimations]: isAnimationRemove}
    )}>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <div className={styles.captionWrap}>
        <div className={styles.caption}>
          <h2 className={styles.name}>{ name }</h2>
          <h3 className={styles.description} dangerouslySetInnerHTML={{__html: description}} />
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
      <div className={styles.tableWrap} ref={tableWrapRef}>
        <table className={styles.table}>
          <tbody>
            { renderTable() }
          </tbody>
        </table>
      </div >
      { renderPreview() }
    </div>
  );
}

export default Item;
