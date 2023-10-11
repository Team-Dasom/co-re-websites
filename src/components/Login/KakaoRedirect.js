import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { setCookie } from '../Cookies';
import cookie from 'react-cookies'

const KakaoRedirect = (props) => { 
  // const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  const params = new URL(window.location.href).searchParams;
  const code = params.get("code")
  const client_id = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
  const redirect_uri = `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(`https://kauth.kakao.com/oauth/token?client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}&grant_type=authorization_code`);
        const token = res.data.access_token;
        // window.localStorage.setItem('token', token);
        const body = {
          "socialType" : "KAKAO",
          "token" : `${token}`,
        }
        axios
        .post(`http://54.180.28.153/api/v1/auth/login`,
        body,
        {
          headers: {
            "Content-type":"application/json"
          },
        })
        .then((response)=>{
          console.log("CO_RE data : " , response);
          // HTTP COOKIE는 서버에서 해줘야 해서 클라이언트 쪽에서는 만지는게 아닌 것 같단 소리를 들어서 
          // 잠시만 보류 하겠습니다 ..!
          
          // const accessToken = response.data.data.accessToken
          // const accessTokenCookie = {accessToken: cookie.load(`accessToken`)}
          // console.log(accessTokenCookie)
          // const refreshToken = response.data.data.refreshToken
          // const refreshTokenCookie = {refreshToken: cookie.load(`refreshToken`)}
          // console.log(refreshTokenCookie)
        })
        navigate('/');
      } catch (e) {
        console.error(e);
        navigate('/');
      }
    })();
  }, [navigate, code]);


  return (
    <div>Redirect Page</div>
  )
}

export default KakaoRedirect
