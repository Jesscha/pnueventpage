import React from 'react';

export const stringBreak = (str) => {
  const res = str.split('\n').map((line) => {
    return (
      <span>
        {line}
        <br />
      </span>
    );
  });
  return res;
};
