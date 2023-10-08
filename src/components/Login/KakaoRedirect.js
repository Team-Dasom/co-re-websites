import React from 'react'
import axios from 'axios';


const KakaoRedirect = () => {
    console.log("kakaoRedirect Page")
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');
    console.log("code???",code)
  return (
    <div>리다이렉트 페이지</div>
  )
}

export default KakaoRedirect