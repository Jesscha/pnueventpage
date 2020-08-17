import React from 'react';
import { useParams } from 'react-router-dom';


// 16가지 결과를 kv로 저장해 놓는다.


function ResultPage() {

  const { mbti } = useParams();





  return (
    <div>
      ResultPage {mbti}
    </div>
  );
}


const resultData = [{










}]





export default ResultPage;
