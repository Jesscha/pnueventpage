import React, { useEffect } from "react";
import "./HomePage.scss";
import { withRouter } from "react-router-dom";
// import { Link } from 'react-router-dom';
import mainGif from "../../asset/main.gif";
import logo from "../../asset/logo_black.svg";
import startTheTestText from "../../asset/start_test_textBox.png";

function HomePage({ history }) {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);

  return (
    <div className="home-container">
      <div className="home-logo">
        <img src={logo} alt="" />
      </div>
      <img className="homeMainImage" src={mainGif} alt="" />

      <h1 className="home-headText">
        <img src="/img/mainTitle.png" alt=""/>
      </h1>

      <p className="homeDescText">
        <img src="/img/mainDesc.png" alt=""/>
      </p>

      <img
        src={'/img/sartTextButton.png'}
        onClick={() => {
          history.push("/question");
        }}
        className="homeCTAButton"
        alt=''
      ></img>

      {/* <p className="home-mainText">

        "내 생일 파티는 금요일에 여기서 해, <br />
        꼭 와줘."<br />
        <br />

        가장 친한 친구가 초대장을<br />
        건네줍니다.
      </p>


      <div
        className="home-start-button"
        onClick={() => {
          history.push('/question')
        }}
      >
        시작하기
      </div> */}
    </div>
  );
}

export default withRouter(HomePage);
