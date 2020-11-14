import React from 'react';
import './HomePage.scss'
import { withRouter } from "react-router-dom";
// import { Link } from 'react-router-dom';


function HomePage({ history }) {
  return (
    <div className="home-container">
      <div className="home-logo">Pnuu</div>
      <h1 className="home-headText">
        생일로 알아보는 <br />
        내 속마음
      </h1>

      <p className="home-mainText">

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
      </div>



    </div>
  );
}



export default withRouter(HomePage);
