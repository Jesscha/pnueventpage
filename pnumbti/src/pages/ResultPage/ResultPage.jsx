import React, { } from 'react';
import { useParams } from 'react-router-dom';



// 16가지 결과를 kv로 저장해 놓는다.

function ResultPage() {

  const { mbti } = useParams();

  const mbtiData = resultData[mbti.trim()];
  console.log(resultData["INTP"])
  console.log({ mbti })
  return (
    <div>
      ResultPage {mbti} {mbtiData.fitFriendsType}
      <div style={{ width: "100%" }}
      >

        <img style={{ width: "100%" }} src={require('../../asset/test.gif')} alt="" />
      </div>

    </div>
  );
}



const resultData = {
  INTJ: {
    mainImage: "",
    inFriendsBirthDay: "",
    inMyBirthDay: "",
    fitFriendsType: "ENTP",
    fitFriendsText: "최고최고",

    unfitFriendsType: "ISTJ",
    unfitFriendsText: "안놀아 ㅠㅠ",
  },
  INTP: {
    mainImage: "",
    inFriendsBirthDay: "",
    inMyBirthDay: "",
    fitFriendsType: "ENTP",
    fitFriendsText: "최고최고",

    unfitFriendsType: "ISTJ",
    unfitFriendsText: "안놀아 ㅠㅠ",
  },
  ENTJ: {
    mainImage: "",
    inFriendsBirthDay: "",
    inMyBirthDay: "",
    fitFriendsType: "ENTP",
    fitFriendsText: "최고최고",

    unfitFriendsType: "ISTJ",
    unfitFriendsText: "안놀아 ㅠㅠ",
  },
  ENTP: {
    mainImage: "",
    inFriendsBirthDay: "",
    inMyBirthDay: "",
    fitFriendsType: "ENTP",
    fitFriendsText: "최고최고",

    unfitFriendsType: "ISTJ",
    unfitFriendsText: "안놀아 ㅠㅠ",
  },
  INFJ: {
    mainImage: "",
    inFriendsBirthDay: "",
    inMyBirthDay: "",
    fitFriendsType: "ENTP",
    fitFriendsText: "최고최고",

    unfitFriendsType: "ISTJ",
    unfitFriendsText: "안놀아 ㅠㅠ",
  },
  INFP: {
    mainImage: "",
    inFriendsBirthDay: "",
    inMyBirthDay: "",
    fitFriendsType: "ENTP",
    fitFriendsText: "최고최고",

    unfitFriendsType: "ISTJ",
    unfitFriendsText: "안놀아 ㅠㅠ",
  },
  ENFJ: {
    mainImage: "",
    inFriendsBirthDay: "",
    inMyBirthDay: "",
    fitFriendsType: "ENTP",
    fitFriendsText: "최고최고",

    unfitFriendsType: "ISTJ",
    unfitFriendsText: "안놀아 ㅠㅠ",
  },
  ENFP: {
    mainImage: "",
    inFriendsBirthDay: "",
    inMyBirthDay: "",
    fitFriendsType: "ENTP",
    fitFriendsText: "최고최고",

    unfitFriendsType: "ISTJ",
    unfitFriendsText: "안놀아 ㅠㅠ",
  },
  ISTJ: {
    mainImage: "",
    inFriendsBirthDay: "",
    inMyBirthDay: "",
    fitFriendsType: "ENTP",
    fitFriendsText: "최고최고",

    unfitFriendsType: "ISTJ",
    unfitFriendsText: "안놀아 ㅠㅠ",
  },
  ISFJ: {
    mainImage: "",
    inFriendsBirthDay: "",
    inMyBirthDay: "",
    fitFriendsType: "ENTP",
    fitFriendsText: "최고최고",

    unfitFriendsType: "ISTJ",
    unfitFriendsText: "안놀아 ㅠㅠ",
  },
  ESTJ: {
    mainImage: "",
    inFriendsBirthDay: "",
    inMyBirthDay: "",
    fitFriendsType: "ENTP",
    fitFriendsText: "최고최고",

    unfitFriendsType: "ISTJ",
    unfitFriendsText: "안놀아 ㅠㅠ",
  },
  ESFJ: {
    mainImage: "",
    inFriendsBirthDay: "",
    inMyBirthDay: "",
    fitFriendsType: "ENTP",
    fitFriendsText: "최고최고",

    unfitFriendsType: "ISTJ",
    unfitFriendsText: "안놀아 ㅠㅠ",
  },
  ISTP: {
    mainImage: "",
    inFriendsBirthDay: "",
    inMyBirthDay: "",
    fitFriendsType: "ENTP",
    fitFriendsText: "최고최고",

    unfitFriendsType: "ISTJ",
    unfitFriendsText: "안놀아 ㅠㅠ",
  },
  ISFP: {
    mainImage: "",
    inFriendsBirthDay: "",
    inMyBirthDay: "",
    fitFriendsType: "ENTP",
    fitFriendsText: "최고최고",

    unfitFriendsType: "ISTJ",
    unfitFriendsText: "안놀아 ㅠㅠ",
  },
  ESTP: {
    mainImage: "",
    inFriendsBirthDay: "",
    inMyBirthDay: "",
    fitFriendsType: "ENTP",
    fitFriendsText: "최고최고",

    unfitFriendsType: "ISTJ",
    unfitFriendsText: "안놀아 ㅠㅠ",
  },
  ESFP: {
    mainImage: "",
    inFriendsBirthDay: "",
    inMyBirthDay: "",
    fitFriendsType: "ENTP",
    fitFriendsText: "최고최고",

    unfitFriendsType: "ISTJ",
    unfitFriendsText: "안놀아 ㅠㅠ",
  },

}





export default ResultPage;
