import React, {useEffect, useRef} from 'react';
import { Helmet } from 'react-helmet';
import cx from 'classnames';

import InfoList from './InfoList';
import styles from './Info.module.scss';

const Info = ({ data: { meta }, data, isRerouted, isAppFaded }) => {
  const headerBgRef = useRef(null);
  const renderLists = lists => lists.map((list, index) => (<InfoList key={index} data={list} listIndex={index} />));

  useEffect(() => {
    const handleMouseMove = ({ x, y, view }) => {
      window.requestAnimationFrame(() => {
        const midX = view.innerWidth / 2;
        const midY = 150;
        const offsetX = (midX - x) * -0.001;
        const offsetY = (midY - y) * -0.02;

        headerBgRef.current.style.transform = (
          `translate3d(${offsetX > 4 ? 4 : offsetX < -4 ? -4 : offsetX}%, ${offsetY > 8 ? 8 : offsetY < -8 ? -8 : offsetY}%, 0)`
        );
      });
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>{ meta.title }</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <div className={styles.container}>
        <div className={cx(styles.header, {[styles.headerNoDelay]: isRerouted, [styles.headerHidden]: isAppFaded})}>
          <div className={styles.headerBg} ref={headerBgRef} />
          { data.title }
        </div>
        <div className={cx(styles.content, {[styles.contentHidden]: isAppFaded})}>
          { renderLists(data.info) }
        </div>
      </div>
    </>
  );
};

export default Info;
