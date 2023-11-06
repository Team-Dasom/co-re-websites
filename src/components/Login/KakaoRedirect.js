import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserProfile } from 'store/KakaoLogin/kakaoUserSlice';
import { getCookie, setCookie } from 'components/Cookie/Cookies';
import { setToken } from 'store/KakaoLogin/tokenSlice';
import { setStatus } from 'store/KakaoLogin/statusSlice';
import {setAccessToken} from 'store/KakaoLogin/kakaoUserSlice'


const KakaoRedirect = (props) => { 
  const params = new URL(window.location.href).searchParams;
  const code = params.get("code")
  const client_id = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
  const redirect_uri = `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.user.accessToken); 
  // const token = useSelector((state)=>state.)
  console.log(useSelector((state) => state.user.accessToken))


  useEffect(() => {
    if (accessToken) {
      navigate('/');
      return;
    }

    (async () => {
      try {
        const res = await axios.post(`https://kauth.kakao.com/oauth/token?client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}&grant_type=authorization_code`);
        const token = res.data.access_token;
        dispatch(setToken(token));
        const status = res.status
        dispatch(setStatus(status));
        const userRes = await axios.get('https://kapi.kakao.com/v2/user/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const profileImage = userRes.data.properties.profile_image;
        const nickname = userRes.data.properties.nickname;
        setCookie('profileImage', profileImage)
        setCookie('nickname',nickname)
        dispatch(setUserProfile({ profileImage, nickname }));

        // 여기서 부터 우리 서비스 서버에 요청 보내기 
        if(status === 200) {
        // 우리 서비스의 유저라면 로그인 하기
        const body = {
          "socialType" : "KAKAO",
          "token" : `${token}`,
        }
        axios
        .post(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/login`,
        body,
        {
          headers: {
            "Content-type":"application/json"
          },
        })
        .then((response)=>{
          console.log("CO_RE data : " , response.data);
          const accessToken = response.data.data.accessToken
          dispatch(setAccessToken({accessToken}));
          const refreshToken = response.data.data.refreshToken
          if(accessToken){
            setCookie('accessToken',accessToken,{path:'/'})
          }
          if(refreshToken){
            setCookie('refreshToken',refreshToken,{path:'/'})
          }
        }).catch((e)=>{
          console.log(e.toJSON().status)
          const status = e.toJSON().status
          if(status === 409){

          // 우리 서비스의 유저가 아니라면 회원가입 하기
          const body = {
            "socialType" : "KAKAO",
            "token" : `${token}`,
          }
          axios
          .post(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/signup`,
          body,
          {
            headers: {
              "Content-type":"application/json"
            },
          })
          .then((response)=>{
            console.log("CO_RE data : " , response.data);
          }).catch((e)=>{
            console.log(e.toJSON())
          })
          navigate('/');
          }
        })
        navigate('/');

        }else{
          alert("error")
        }
      } catch (e) {
        console.log(e.toJSON())
        navigate('/');
      }
    })();
  }, [accessToken, dispatch]);
  return (
    <div>Redirect Page</div>
  )
}

export default KakaoRedirect
