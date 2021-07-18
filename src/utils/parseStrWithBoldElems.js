import React from "react";

export default function parseStrWithBoldElems(str) {
  const arrOfStrWithoutBoldElems = str.split('<b>').map(curr => curr.split('</b>'));

  return arrOfStrWithoutBoldElems.map((curr, index) => {
    if (curr.length > 1 ) {
      return (
        <React.Fragment key={index}>
          <b>{ curr[0] }</b>
          { curr[1] }
        </React.Fragment>
      );
    }

    return curr[0];
  });
}
