import React from 'react';

import styles from './Grid.module.scss';

function Grid({ rows, cols, borderColor, borderWidth }) {
  const numOfHLines = rows + 1;
  const chartHeight = rows * 10;

  const numOfVLines = cols + 1;
  const chartWidth = cols * 10;

  const renderVLines = () =>
    Array.from(
      { length: numOfVLines },
      (c, index) =>
        <line key={`H${index}`}
              x1={`${index * 10}`} y1="0" x2={`${index * 10}`} y2={chartHeight}
              stroke={borderColor}
              strokeWidth={borderWidth}
        />
    )

  const renderHLines = () =>
    Array.from(
      { length: numOfHLines },
      (c, index) =>
        <line key={`V${index}`}
              x1="0" y1={`${index * 10}`} x2={chartWidth} y2={`${index * 10}`}
              stroke={borderColor}
              strokeWidth={borderWidth}
        />
    )

  return (
    <svg className={styles.chart}
         viewBox={`0 0 ${chartWidth} ${chartHeight}`}
         xmlns="http://www.w3.org/2000/svg"
         vectorEffect="non-scaling-stroke"
    >
      { renderVLines() }
      { renderHLines() }
    </svg>
  );
}

export default Grid;
