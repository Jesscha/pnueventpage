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
  type: "INTJ",
  mainImage: "",
  inFriendsBirthDay: "",
  inMyBirthDay: "",
  fitFriendsType: "ENTP",
  fitFriendsText: "최고최고",

  unfitFriendsType: "ISTJ",
  unfitFriendsText: "안놀아 ㅠㅠ",

}]





export default ResultPage;
