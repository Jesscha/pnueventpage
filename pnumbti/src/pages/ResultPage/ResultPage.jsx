import React, { useEffect } from 'react';

import {  useParams, withRouter } from 'react-router-dom';
import resultData from '../../asset/resultData';
import './ResultPage.scss'
import { stringBreak } from '../../utils/utils'; 
import logo from "../../asset/logo_black.svg";
import { Helmet } from 'react-helmet';


// 16가지 결과를 kv로 저장해 놓는다.

function ResultPage({ history }) {

  const { mbti } = useParams();
  // const history = useHistory();

  const mbtiData = resultData[mbti.trim().toUpperCase()];
  const allArr = makeResultArr();
  const resultKeys = Object.keys(resultData);
  const moveToTop = () => {
    window.scrollTo(0, 0);

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
    document.querySelector('.container').style.cssText = 'width: 100vw';
    document.querySelector('#root').style.cssText =  'overflow-x: hidden';
    document.body.style.backgroundColor = "white";
    document.body.style.height = "auto";
    
    return () => {
      document.querySelector('.container').style.cssText = 'width: 80vw';
      document.querySelector('#root').style.cssText = 'overflow-x: visible'
      document.body.style.height = ""; 
    }
  }, [])

  useEffect(() => {
    document.querySelector('#root').scrollTo({ top: 0, left: 0 })
    alert('test');
  },[mbti])
  // console.log(allArr)
  // console.log(resultKeys)
  return (
    <div className="resultPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{mbti.trim() === "all" ? '모든 결과' : `당신은 ${resultData[mbti.trim().toUpperCase()]?.nickName}`}</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        <meta property="og:description" content={mbti.trim() === "all" ? '모든 결과': `당신은 ${resultData[mbti.trim().toUpperCase()]?.nickName}`} />
        <meta property="og:image" content={mbti.trim() === "all" ? null : resultData[mbti.trim().toUpperCase()]?.mainImage} />
        <meta property="og:image:width" content="800"/>
        <meta property="og:image:height" content="400"/>
      </Helmet>
      <div className="logo" onClick={() => {
        history.push('/');
      }}>
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
                    <div className="imgWrapper">
                       <img
                      className="all-elem-img" 
                        src={type?.mainImage}
                        style={{height: type?.nickName === '🔥🔥열정열정열정맨🔥🔥' ? '':''}}
                      alt=''
                    />
                    </div>
                   
                    {type?.nickName}
                  </div>
                )
              })
            }
            <img className="advertise"
                src={`/img/ad_img${Math.floor((Math.random()*100))%2}.png`}
              alt=''
               style={{
                // marginTop: '32px',
                 marginRight: 'auto',
                 marginLeft: 'auto'
                }}
              />
              <img
                className="retest"
                onClick={() => {
                  history.push(`/`)
                }}
              style={{
                marginTop: '16px',
                marginRight: 'auto',
                marginLeft: 'auto'
                }}
                src='/img/retest.png'
                alt=""
              />
          </div>
          :
          <div style={{
            width: '100%',
            // overflow: 'hidden'
          }} >
            <div style={{
              width: "100%",
              display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
            }}
            >
              <div className="result-head">

                 <img className="resultMainImage" style={{marginTop : mbti === 'ENTJ' ? '32px' : '' , marginBottom : mbti === 'ENTJ' ? '32px' : ''}}   src={mbtiData?.mainImage} alt="" />

                <div
                  className="subText"
                >
                  {mbtiData?.nickNameDesc}
                </div>
                <div
                  className="mainText">
                  {mbtiData?.nickName}
                </div>
              </div>
              <div className="resultWrapper" style={{
                borderImage: `url(${mbtiData?.bgImage}) 30`
              }}>
                <div className="result-main-desc">
                   {mbtiData && stringBreak(mbtiData?.mainDesc)}
                </div>
                 <div className="resultContent">
                    <div className="contentTitle">파티는... </div>
                    <div className="contents">
                      {mbtiData&&stringBreak(mbtiData?.partyType)}
                    </div>

                    
                </div>
                 <div className="resultContent">
                    <div className="contentTitle">선물은... </div>
                    <div className="contents">
                      {mbtiData&&stringBreak(mbtiData?.presentType)}
                    </div>

                    
                </div>
                 <div className="resultContent">
                    <div className="contentTitle">당신이 좋아할 선물</div>
                    <div className="contents">
                      {mbtiData&& stringBreak(mbtiData?.presentYouWillLike)}
                    </div>

                    
                </div>
                 <div className="resultContent">
                    <div className="contentTitle">당신이 싫어할 선물</div>
                    <div className="contents">
                      {mbtiData && stringBreak(mbtiData?.presentYouWillDislike)}
                    </div>

                    
                </div>
               

                {/* <img className="resultText" src={mbtiData?.textImage} alt=""/>
                 */}
                {/* <div className="resultText" >
                  {stringBreak(mbtiData?.text)}
                </div> */}
              {/* <div className="result-second-desc">
                <div className="inFriendsBirthDay">
                  <div className="intro">
                    친구 생일에 나는<br /><br />
                  </div>

                  {stringBreak(mbtiData?.inFriendsBirthDay)}
                </div>

                <div className="inMyBirthDay">
                  <div className="intro">
                    내 생일에 나는<br /><br />
                  </div>
                  {stringBreak(mbtiData?.inMyBirthDay)}
                </div>
                

              </div> */}
             
                
              </div>
              <div className="combinationBox"
                style={{
                borderImage: `url(${mbtiData?.bgImage}) 30`
              }}
              >
                <div className="result-third-desc">
                
                <div className="result-relation" >
                  <div className="top"
                    onClick={() => {
                      history.push(`/result/${mbtiData?.fitFriendsType}`)
                      moveToTop()
                    }}
                    >
                      <div className="left">
                        <img  className="typeLogo" src={mbtiData?.fitFriendsImg} alt=""/>
                      </div>
                      <div className="right">
                        <div className="relation">감동의 궁합</div>
                        <div className="desc">
                          {mbtiData?.fitFriendsDesc}  
                        </div>
                        <div className="nickName">
                          {mbtiData?.fitFriendsNickName}
                        </div>
                    

                      </div>
                 
                      
                    </div>
                    <hr />
                  <div className="bottom"
                    onClick={() => {
                      history.push(`/result/${mbtiData?.unfitFriendsType}`)
                      moveToTop()
                    }}
                    >
                      <div className="left">
                        <img className="typeLogo" src={mbtiData?.unfitFriendsImg} alt=""/>
                      </div>
                      <div className="right">
                        <div className="relation">섭섭한 궁합</div>
                        <div className="desc">
                          {mbtiData?.unfitFriendsDesc}  
                        </div>
                        <div className="nickName">
                          {mbtiData?.unfitFriendsNickName}
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
