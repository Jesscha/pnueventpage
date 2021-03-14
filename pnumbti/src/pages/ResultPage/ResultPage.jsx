import React, { useEffect } from 'react';

import { useParams, withRouter } from 'react-router-dom';
import resultData from '../../asset/resultData';
import './ResultPage.scss'
import { stringBreak } from '../../utils/utils'; 
import logo from "../../asset/logo_black.svg";


// 16가지 결과를 kv로 저장해 놓는다.

function ResultPage({ history }) {

  const { mbti } = useParams();

  const mbtiData = resultData[mbti.trim()];
  const allArr = makeResultArr();
  const resultKeys = Object.keys(resultData);
  const moveToTop = () => {
    const container = document.querySelector(".container")
    container.scroll(0, 0)

  }

  function makeResultArr() {
    const newArr = []
    for (let key of Object.keys(resultData)) {
      newArr.push(resultData[key])
    }
    return newArr

  }

  //     max-height: 100vh;
  // overflow: scroll;
  
  useEffect(() => {
    document.querySelector('#root').style.cssText = 'max-height: 100vh; overflow-y: scroll; ';
    document.body.style.backgroundColor = "white";
    
  }, [])
  // console.log(allArr)
  // console.log(resultKeys)
  return (
    <div className="resultPage">
       <div className="logo">
        <img src={ logo} alt="" />
      </div>
      {
        mbti.trim() === "all" ?
          <div className="result-all">
            {
              allArr.map((type, i) => {
                return (
                  <div
                    className="all-elem"
                    onClick={() => {
                      history.push(`/result/${resultKeys[i]}`)
                    }}
                  >
                    {type.nickName}
                  </div>
                )
              })
            }
          </div>
          :
          <div >
            <div style={{
              width: "100%",
              display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
            }}
            >
              <div className="result-head">

                 <img className="resultMainImage"   src={mbtiData.mainImage} alt="" />

                <div
                  className="subText"
                >
                  {mbtiData.nickNameDesc}
                </div>
                <div
                  className="mainText">
                  {mbtiData.nickName}
                </div>
              </div>
              <div className="resusltWrapper" style={{ backgroundImage: `url(${mbtiData.bgImage})` }}>
                <div className="result-main-desc">
                   {stringBreak(mbtiData.mainDesc)}
                </div>
                 <div className="resultContent">
                    <div className="contentTitle">파티는... </div>
                    <div className="contents">
                      {stringBreak(mbtiData.partyType)}
                    </div>

                    
                </div>
                 <div className="resultContent">
                    <div className="contentTitle">선물은... </div>
                    <div className="contents">
                      {stringBreak(mbtiData.presentType)}
                    </div>

                    
                </div>
                 <div className="resultContent">
                    <div className="contentTitle">당신이 좋아할 선물</div>
                    <div className="contents">
                      {stringBreak(mbtiData.presentYouWillLike)}
                    </div>

                    
                </div>
                 <div className="resultContent">
                    <div className="contentTitle">당신이 싫어할 선물</div>
                    <div className="contents">
                      {stringBreak(mbtiData.presentYouWillDislike)}
                    </div>

                    
                </div>
               

                {/* <img className="resultText" src={mbtiData.textImage} alt=""/>
                 */}
                {/* <div className="resultText" >
                  {stringBreak(mbtiData.text)}
                </div> */}
              {/* <div className="result-second-desc">
                <div className="inFriendsBirthDay">
                  <div className="intro">
                    친구 생일에 나는<br /><br />
                  </div>

                  {stringBreak(mbtiData.inFriendsBirthDay)}
                </div>

                <div className="inMyBirthDay">
                  <div className="intro">
                    내 생일에 나는<br /><br />
                  </div>
                  {stringBreak(mbtiData.inMyBirthDay)}
                </div>
                

              </div> */}
             
                
              </div>
              <div className="combinationBox">
                <div className="result-third-desc">
                
                <div className="result-relation" >
                  <div className="top"
                    onClick={() => {
                      history.push(`/result/${mbtiData.fitFriendsType}`)
                      moveToTop()
                    }}
                    >
                      <div className="left">
                        <img  className="typeLogo" src={mbtiData.fitFriendsImg} alt=""/>
                      </div>
                      <div className="right">
                        <div className="relation">감동의 궁합</div>
                        <div className="desc">
                          {mbtiData.fitFriendsDesc}  
                        </div>
                        <div className="nickName">
                          {mbtiData.fitFriendsNickName}
                        </div>
                    

                      </div>
                 
                      
                    </div>
                    <hr />
                  <div className="bottom"
                    onClick={() => {
                      history.push(`/result/${mbtiData.unfitFriendsType}`)
                      moveToTop()
                    }}
                    >
                      <div className="left">
                        <img className="typeLogo" src={mbtiData.unfitFriendsImg} alt=""/>
                      </div>
                      <div className="right">
                        <div className="relation">섭섭한 궁합</div>
                        <div className="desc">
                          {mbtiData.unfitFriendsDesc}  
                        </div>
                        <div className="nickName">
                          {mbtiData.unfitFriendsNickName}
                        </div>
                    

                      </div>
                 
                  </div>

                </div>
              </div>

                </div>
               
              {/* <div className="result-go-toPnuu">
                내 생일 펀딩해 보기
        </div>
              <div className="result-go-toPnuu">
                다가오는 친구 생일 제대로 축하해주기
        </div> */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                maxWidth: '360px'
                
                }}
              
              >
                  <img className="advertise"
                src={`/img/ad_img${Math.floor((Math.random()*100))%2}.png`}
               alt=''
              />

              
              <img className="result-move-to-all"
                onClick={() => {
                  moveToTop()
                  history.push(`/result/all`)
                }}
                src='/img/allresult.png'
                alt=""
              />
                
              
              <img
                className="retest"
                onClick={() => {
                  history.push(`/`)
                }}
                src='/img/retest.png'
                alt=""
              />

              </div>
            
            



            </div>

          </div>



      }

    </div>
  );
}








export default withRouter(ResultPage);
