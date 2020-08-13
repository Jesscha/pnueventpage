import React from 'react';
import './HomePage.scss'
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div classNameˇ="home-container">
      <h1>Pnuu</h1>
      <p>
        여느 때와 같은 평일 저녁,
        당신은 친구에게서 초대장과 봉투를 받게 됩니다.

        "내 생일 파티는 금요일에 여기서 해, 꼭 와줘."
        라고 말하면서 말이죠.

        호기심이 든 당신은 바로 봉투 안을 열어보았습니다.
      </p>

      <Link to="/question">
        시작하기
      </Link>

    </div>
  );
}

export default HomePage;
