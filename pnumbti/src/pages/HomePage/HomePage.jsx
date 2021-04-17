import React, { useEffect } from "react";
import "./HomePage.scss";
import { withRouter } from "react-router-dom";
// import { Link } from 'react-router-dom';
import mainGif from "../../asset/main.gif";
import logo from "../../asset/logo_black.svg";
import { Helmet } from "react-helmet";


function HomePage({ history }) {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);

  return (
    <div className="home-container">
      <Helmet>
               <link rel="preload" as="image" href="/img/showResultButton.png" />
    <link rel="preload" as="image" href="/img/last_message.png" />
    <link rel="preload" as="image" href="/img/heart.svg" />
    <link rel="preload" as="image" href="/img/intro_message.png" />
    <link rel="preload" as="image" href="/img/q1_a1.png" />
    <link rel="preload" as="image" href="/img/q1_a2.png" />
    <link rel="preload" as="image" href="/img/q1_main.png" />
    <link rel="preload" as="image" href="/img/q1_q.png" />
    <link rel="preload" as="image" href="/img/q2_a1.png" />
    <link rel="preload" as="image" href="/img/q2_a2.png" />
    <link rel="preload" as="image" href="/img/q2_main.png" />
    <link rel="preload" as="image" href="/img/q2_q.png" />
    <link rel="preload" as="image" href="/img/q3_a1.png" />
    <link rel="preload" as="image" href="/img/q3_a2.png" />
    <link rel="preload" as="image" href="/img/q3_main.png" />
    <link rel="preload" as="image" href="/img/q3_q.png" />
    <link rel="preload" as="image" href="/img/q4_a1.png" />
    <link rel="preload" as="image" href="/img/q4_a2.png" />
    <link rel="preload" as="image" href="/img/q4_main.png" />
    <link rel="preload" as="image" href="/img/q4_q.png" />
    <link rel="preload" as="image" href="/img/q5_a1.png" />
    <link rel="preload" as="image" href="/img/q5_a2.png" />
    <link rel="preload" as="image" href="/img/q5_main.png" />
    <link rel="preload" as="image" href="/img/q5_q.png" />
    <link rel="preload" as="image" href="/img/q6_a1.png" />
    <link rel="preload" as="image" href="/img/q6_a2.png" />
    <link rel="preload" as="image" href="/img/q6_main.png" />
    <link rel="preload" as="image" href="/img/q6_q.png" />
    <link rel="preload" as="image" href="/img/q7_a1.png" />
    <link rel="preload" as="image" href="/img/q7_a2.png" />
    <link rel="preload" as="image" href="/img/q7_main.png" />
    <link rel="preload" as="image" href="/img/q7_q.png" />
    <link rel="preload" as="image" href="/img/q8_a1.png" />
    <link rel="preload" as="image" href="/img/q8_a2.png" />
    <link rel="preload" as="image" href="/img/q8_main.png" />
    <link rel="preload" as="image" href="/img/q8_q.png" />
    <link rel="preload" as="image" href="/img/q9_a1.png" />
    <link rel="preload" as="image" href="/img/q9_a2.png" />
    <link rel="preload" as="image" href="/img/q9_main.png" />
    <link rel="preload" as="image" href="/img/q9_q.png" />
    <link rel="preload" as="image" href="/img/q10_a1.png" />
    <link rel="preload" as="image" href="/img/q10_a2.png" />
    <link rel="preload" as="image" href="/img/q10_main.png" />
    <link rel="preload" as="image" href="/img/q10_q.png" />
    <link rel="preload" as="image" href="/img/q11_a1.png" />
    <link rel="preload" as="image" href="/img/q11_a2.png" />
    <link rel="preload" as="image" href="/img/q11_main.png" />
    <link rel="preload" as="image" href="/img/q11_q.png" />
    <link rel="preload" as="image" href="/img/q12_a1.png" />
    <link rel="preload" as="image" href="/img/q12_a2.png" />
    <link rel="preload" as="image" href="/img/q12_main.png" />
    <link rel="preload" as="image" href="/img/q12_q.png" />
    <link rel="preload" as="image" href="/img/endingMain.gif" />
    <link rel="preload" as="image" href="/img/enfj.png" />
    <link rel="preload" as="image" href="/img/enfp.png" />
    <link rel="preload" as="image" href="/img/entj.png" />
    <link rel="preload" as="image" href="/img/entp.png" />
    <link rel="preload" as="image" href="/img/esfj.png" />
    <link rel="preload" as="image" href="/img/esfp.png" />
    <link rel="preload" as="image" href="/img/estj.png" />
    <link rel="preload" as="image" href="/img/estp.png" />
    <link rel="preload" as="image" href="/img/infj.png" />
    <link rel="preload" as="image" href="/img/infp.png" />
    <link rel="preload" as="image" href="/img/intp.png" />
    <link rel="preload" as="image" href="/img/isfj.png" />
    <link rel="preload" as="image" href="/img/isfp.png" />
    <link rel="preload" as="image" href="/img/istj.png" />
    <link rel="preload" as="image" href="/img/istp.png" />
    <link rel="preload" as="image" href="/img/enfj.gif" />
    <link rel="preload" as="image" href="/img/enfp.gif" />
    <link rel="preload" as="image" href="/img/entj.gif" />
    <link rel="preload" as="image" href="/img/entp.gif" />
    <link rel="preload" as="image" href="/img/esfj.gif" />
    <link rel="preload" as="image" href="/img/esfp.gif" />
    <link rel="preload" as="image" href="/img/estj.gif" />
    <link rel="preload" as="image" href="/img/estp.gif" />
    <link rel="preload" as="image" href="/img/infj.gif" />
    <link rel="preload" as="image" href="/img/infp.gif" />
    <link rel="preload" as="image" href="/img/intp.gif" />
    <link rel="preload" as="image" href="/img/isfj.gif" />
    <link rel="preload" as="image" href="/img/isfp.gif" />
    <link rel="preload" as="image" href="/img/istj.gif" />
    <link rel="preload" as="image" href="/img/istp.gif" />
        
        </Helmet>

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
