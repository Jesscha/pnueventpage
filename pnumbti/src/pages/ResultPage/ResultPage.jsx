import React, { } from 'react';

import { Link, useParams, withRouter } from 'react-router-dom';
import resultData from '../../asset/resultData';
import './ResultPage.scss'
import { stringBreak } from '../../utils/utils';



// 16가지 결과를 kv로 저장해 놓는다.

function ResultPage({ history }) {

  const { mbti } = useParams();

  const mbtiData = resultData[mbti.trim()];
  const allArr = makeResultArr();
  const resultKeys = Object.keys(resultData);

  function makeResultArr() {
    const newArr = []
    for (let key of Object.keys(resultData)) {
      newArr.push(resultData[key])
    }
    return newArr

  }
  // console.log(allArr)
  // console.log(resultKeys)
  return (
    <div className="resultPage">
      <div className="logo">
        pnuu
      </div>
      {
        mbti.trim() === "all" ?
          <div className="result-all">
            {
              allArr.map((type, i) => {
                return (
                  <div
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
          <div>
            <div style={{ width: "100%" }}
            >
              <div className="result-head">
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
              {mbtiData.mainImage && <img style={{ width: "100%" }} src={mbtiData.mainImage} alt="" />}
              <div className="result-main-desc">
                {stringBreak(mbtiData.mainDesc)}
              </div>
              <div className="result-second-desc">
                <div className="inFriendsBirthDay">
                  <div className="intro">
                    친구 생일에 나는
            </div>

                  {stringBreak(mbtiData.inFriendsBirthDay)}
                </div>

                <div className="inMyBirthDay">
                  <div className="intro">
                    내 생일에 나는
            </div>
                  {stringBreak(mbtiData.inMyBirthDay)}
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
                      to={`/result/${mbtiData.fitFriendsType}`}
                    >
                      {mbtiData.fitFriendsNickName}
                    </Link>
                  </div>
                  <div className="right"
                  >
                    <Link
                      to={`/result/${mbtiData.unfitFriendsType}`}
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
              <div className="result-move-to-all">
                <Link
                  to={`/result/all`}
                >
                  전체 결과 보기
        </Link>


              </div>

            </div>

          </div>



      }

    </div>
  );
}








export default withRouter(ResultPage);
