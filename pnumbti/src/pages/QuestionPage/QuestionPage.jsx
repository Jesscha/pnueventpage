import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar.jsx'
import questionData from '../../asset/qustionData.js';
import './QuestionPage.scss'
import { stringBreak } from '../../utils/utils.js';



// 이 컴포넌트의 state로 M,B,T,I 를 넣는다. 
// 각 문항이 클릭 되면 두가지 액션이 시작된다. 
// 1. 다음 문항을 불러오는 기능, 2. 해당 문항에 기반한 점수를 기록하는 기능 // 

// 다음 문항을 불러오는 기능은 어떻게 만드는가? 
// 문항을 배열로 저장해 놓고 문제 인덱스 state를 바꾸면 됨
// 게이지는 문제 인덱스가 변함에 따라서 변하게 하면 됨
// 뒤로가기 기능이 있다면, 직전에 바뀐 MBTI 스코어를 기억하는 state를 하나 두면 된다.
// 여기의 결과 성향을 정답 페이지로 넘겨준다. Prams 로 넘겨주면 될 듯 

// 개발 순서를 보자 질문 및 선택지가 컴포넌인가 하나의 컴포넌트로 구현 되어야 하는가
// 이렇게 하면 페이지 구성 어떻게 할 수 있지? 

// 하나하나 손으로 구현?
// 데이터가 형식의 정의 ,  데이터의 형식 {질문 유형, 질문 내용, 필요 이미지, 각 선택지가 의미하는 것, 각 선택지 텍스트 }의 키벨류를 가지고 있으면 된다. 

// 질문 컴포넌트는 인덱스의 마지막에 도달 했을 때, 그때까지의 결과를 담아서 최종 결과보기 기능을 구현한다. 

//  마지막페이지 메시지 오는 느낌적 느낌으로 만들어야 함 




function QuestionPage() {



  const numberOfQuestions = questionData.length

  let [isLast, setIsLast] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [E, setE] = useState(0);
  const [I, setI] = useState(0);
  const [F, setF] = useState(0);
  const [T, setT] = useState(0);
  const [S, setS] = useState(0);
  const [N, setN] = useState(0);
  const [J, setJ] = useState(0);
  const [P, setP] = useState(0);

  const setMBTIScore = (questionType) => {
    switch (questionType) {
      case "E":
        setE(E + 1)
        break
      case "I":
        setI(I + 1)
        break
      case "F":
        setF(F + 1)
        break
      case "T":
        setT(T + 1)
        break
      case "S":
        setS(S + 1)
        break
      case "N":
        setN(N + 1)
        break
      case "J":
        setJ(J + 1)
        break
      case "P":
        setP(P + 1)
        break
      default:
        console.log("wrong type")
    }

    // 마지막 페이지면 다음장 가기기능 정지
    setQuestionIndex(questionIndex + 1)
    if (questionIndex + 1 === numberOfQuestions) {
      setIsLast(true);
    }
  }

  const calulateMBTI = () => {
    let EI = E > I ? "E" : " I";
    let SN = S > N ? "S" : "N";
    let TF = T > F ? "T" : "F";
    let JP = J > P ? "J" : "P";

    return `${EI}${SN}${TF}${JP}`

  }
  // isLast = true
  return (
    <div
      className="question-container"
      style={{ width: "100%" }}>
      {!isLast ?
        <div className="question-area">
          <h1 className="question">
            Q. {stringBreak(questionData[questionIndex].question)}
          </h1>
          <div className="optionContainner">
            <div
              className="optionSelect"
              onClick={() => setMBTIScore(questionData[questionIndex].optionOne)}>
              {
                stringBreak(questionData[questionIndex].optionOneText)}
            </div>
            <div
              className="optionSelect"
              onClick={() => setMBTIScore(questionData[questionIndex].optionTwo)}>
              {stringBreak(questionData[questionIndex].optionTwoText)}
            </div>
          </div>
          <div
            className="progressbar-position"
          >
            <ProgressBar bgcolor="antiquewhite" completed={((questionIndex + 1) / numberOfQuestions * 100)} />

          </div>
        </div> :


        <div>

          {lastQuestionText.map((text, i) => {
            return (
              <div
                className="chatting-text"
                key={i}>
                {stringBreak(text.text)}
              </div>)
          })}
          {/* 생일 보내기 리퀘ㅔ스트 보내는 구현부 */}
          <div className="myBirthDay">
            <input placeholder={"내 생일은... "} />
          </div>

          <Link
            to={`/result/${calulateMBTI()}`}
            className="go-to-result"
            style={{
              display: "block",
              boxSizing: "content-box"
            }}
          >
            결과 보러가기</Link>
          {/* <div
            className="progressbar-position"
          >
            <ProgressBar bgcolor="antiquewhite" completed={(100)} />

          </div> */}
        </div>
      }



      <div className="logo">
        pnuu
      </div>

    </div>
  );
}


const lastQuestionText = [

  { text: '생일 함께해줘서 정말 고마웠어 친구야. 준 선물도 진짜 필요한 선물이었어. 네 생일때도 꼭 필요한 선물을 주고 싶어.' },
  { text: '네 생일은 언제였지?' },
]



export default QuestionPage;
