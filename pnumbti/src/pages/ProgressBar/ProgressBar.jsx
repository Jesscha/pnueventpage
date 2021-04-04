import React from "react";
// import heartIcon from "../../asset/heart.svg";
import "./ProgressBar.scss";

const ProgressBar = ({ bgcolor, completed }) => {
  const containerStyles = {
    height: 2,
    width: "100%",
    backgroundColor: "#ffffff",
    // borderRadius: 50,
    margin: "auto2",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    transition: "width 0.5s ease-in-out",
    borderRadius: "inherit",
    textAlign: "right",
  };

  // const labelStyles = {
  //   padding: 5,
  //   color: 'white',
  //   fontWeight: 'bold',
  // }

  return (
    <div style={containerStyles}>
      <div className="filler" style={fillerStyles}>
        <img className="heartIcon" src={'/img/heart.svg'} alt="" />
      </div>
    </div>
  );
};

export default ProgressBar;
