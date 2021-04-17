import React from 'react';

export const stringBreak = (str) => {
  if (str) {
     const res = str.split('\n').map((line) => {
    return (
      <span className={`${ line ? 'text' : ''}`}>
        {line}
        <br />
      </span>
    );
  });
    return res;
  }
 
  
};
