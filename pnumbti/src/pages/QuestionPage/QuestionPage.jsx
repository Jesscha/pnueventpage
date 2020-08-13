import React from 'react';



// 이 컴포넌트의 state로 M,B,T,I 를 넣는다. 
// 각 문항이 클릭 되면 두가지 액션이 시작된다. 
// 1. 다음 문항을 불러오는 기능, 2. 해당 문항에 기반한 점수를 기록하는 기능 
// 

// 다음 문항을 불러오는 기능은 어떻게 만드는가? 
// 문항을 배열로 저장해 놓고 문제 인덱스 state를 바꾸면 됨
// 게이지는 문제 인덱스가 변함에 따라서 변하게 하면 됨
// 뒤로가기 기능이 있다면, 직전에 바뀐 MBTI 스코어를 기억하는 state를 하나 두면 된다.



function QuestionPage() {
  return (
    <div>
      Question
    </div>
  );
}

export default QuestionPage;
