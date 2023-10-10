import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KakaoRedirect = (props) => { 
  const navigate = useNavigate();
  const params = new URL(window.location.href).searchParams;
  const code = params.get("code")
  console.log("인가 코드 : ",code);
  const client_id = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
  const redirect_uri = `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(`https://kauth.kakao.com/oauth/token?client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}&grant_type=authorization_code`);
        console.log(res)
        const token = res.data.access_token;
        console.log("access_token : ",token)
        window.localStorage.setItem('token', token);
        axios.post(
          `http://우리팀 서버 회원가입 api`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            }
          }
        )
        .then((response)=>{
          console.log("CO_RE data : " , response)
          console.log(response.data.properties.profile_image)
        })
        navigate('/');
      } catch (e) {
        console.error(e);
        navigate('/');
      }
    })();
  }, []);


  return (
    <div>Redirect Page</div>
  )
}

export default KakaoRedirect
