

import React from "react";

const ProgressBar = ({ bgcolor, completed }) => {
  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: "auto2",
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    transition: 'width 0.5s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'right',
  }

  // const labelStyles = {
  //   padding: 5,
  //   color: 'white',
  //   fontWeight: 'bold',
  // }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
      </div>
    </div>
  );
};


export default ProgressBar;