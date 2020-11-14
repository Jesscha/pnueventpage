import React, { } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import resultData from '../../asset/resultData';



// 16가지 결과를 kv로 저장해 놓는다.

function ResultPage() {

  const { mbti } = useParams();

  const mbtiData = resultData[mbti.trim()];
  const [allArr, setAllArr] = useState([]);
  const [resultKeys , setResultKeys] = useState([])
  useEffect(
    ()=>{
      setResultKeys(Object.keys(resultData))
      const newArr = []
      for (let key of resultKeys){
        newArr.push(resultData[key])
      }
      setAllArr(newArr)
    }, [resultKeys]
  )
  // console.log(allArr)
  // console.log(resultKeys)
  return (
    <>

      {
        mbti.trim() === "all"?
        <div className="result-all">
          {
            allArr.map((type, i) =>{
              console.log(type)
              return(
                <div>
                  <Link
                  key = {i}
                  to ={`/result/${resultKeys[i]}`}
                  >
                  {type.nickName}
                  </Link>
                </div>
                
              )
            })
          }
        </div>
        :
      <div>
      ResultPage {mbti} {mbtiData.fitFriendsType}
      <div style={{ width: "100%" }}
      >
        <div className="result-head">
          <div>
            {mbtiData.nickNameDesc}
          </div>
          <div>
            {mbtiData.nickName}
          </div>
        </div>
        {mbtiData.mainImage && <img style={{ width: "100%" }} src={mbtiData.mainImage} alt="" /> }  
        <div className="result-main-desc">
            {mbtiData.mainDesc}
        </div>
        <div className="result-second-desc">
          <div className="inFriendsBirthDay">
            <div className="intro">
              친구 생일에 나는 
            </div>
           
            {mbtiData.inFriendsBirthDay}
          </div>

          <div className="inMyBirthDay">
            <div className="intro">
              내 생일에 나는 
            </div>
              {mbtiData.inMyBirthDay}
          </div>
           
        </div>
        <div className="result-third-desc">
          <div>
            궁합
          </div>
          <div className="result-relation" >
            <div className="left"
            >
              <Link
              to ={`/result/${mbtiData.fitFriendsType}`}
              >
                {mbtiData.fitFriendsNickName}
              </Link>
            </div>
            <div className="right"
            >
              <Link
              to ={`/result/${mbtiData.unfitFriendsType}`}
              >
                {mbtiData.unfitFriendsNickName}
              </Link>
            

            </div>

          </div>
        </div>
        <div className="result-go-toPnuu">
        내 생일 펀딩해 보기
        </div>
        <div className="result-go-toPnuu">
          다가오는 친구 생일 제대로 축하해주기
        </div>
        <div className ="result-move-to-all">
        <Link
              to ={`/result/all`}
              >
                전체 결과 보기
        </Link>
          

        </div>
        
      </div>

    </div>


        
      }
    
    </>
  );
}








export default ResultPage;
