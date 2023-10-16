import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserProfile } from '../../store/KakaoLogin/kakaoUserSlice';
import { setCookie } from '../Cookie/Cookies';


const KakaoRedirect = (props) => { 
  const params = new URL(window.location.href).searchParams;
  const code = params.get("code")
  const client_id = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
  const redirect_uri = `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(`https://kauth.kakao.com/oauth/token?client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}&grant_type=authorization_code`);
        const token = res.data.access_token;
        const status = res.status
        // window.localStorage.setItem('token', token);

        const userRes = await axios.get('https://kapi.kakao.com/v2/user/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const profileImage = userRes.data.properties.profile_image;
        const nickname = userRes.data.properties.nickname;
        dispatch(setUserProfile({ profileImage, nickname }));

        // 여기서 부터 우리 서비스 서버에 요청 보내기 
        if(status === 200) {
        // 우리 서비스의 유저라면 로그인 하기
        const body = {
          "socialType" : "KAKAO",
          "token" : `${token}`,
        }
        axios
        .post(`${process.env.REACT_APP_CORE_KAKAO_API_IP_KEY}/api/v1/auth/login`,
        body,
        {
          headers: {
            "Content-type":"application/json"
          },
        })
        .then((response)=>{
          console.log("CO_RE data : " , response.data);
          const accessToken = response.data.data.accessToken
          if(accessToken){
            setCookie('loginToken',accessToken,{
              path:'/',
              secure:true,
              sameSite:'none',
            })
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
          .post(`${process.env.REACT_APP_CORE_KAKAO_API_IP_KEY}/api/v1/auth/signup`,
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
  }, []);


  return (
    <div>Redirect Page</div>
  )
}

export default KakaoRedirect
