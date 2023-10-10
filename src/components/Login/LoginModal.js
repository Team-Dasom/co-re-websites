import React from 'react'
import loginDelete from '../../images/LoginModalDelete.svg'
import LoginCoReLogo from '../../images/LoginCoReLogo.svg'
import GithubLogin from '../../images/GithubLogin.svg'
import KakaoLogin from '../../images/KakaoLogin.svg'



const LoginModal = ({setIsOpenModal}) => {
  console.log("login Modal")
  const client_id = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
  const redirect_uri = `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;
  //카카오 로그인 요청
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;
  function isKakaoLogin(){
    window.location.href = KAKAO_AUTH_URL;
  }

  return (
    <>
    <div className='fixed w-full h-full bg-black opacity-60'></div>
    <div className='fixed border border-solid border-[#3B82F6] w-[521px] h-[361px] ml-[430px] mt-[200px] bg-white '>
        <div>
            <img className='cursor-pointer mt-[10px] ml-[480px]' src={loginDelete} alt="loginDelete" onClick={()=>setIsOpenModal(false)}/>
            <img className='mt-[30px] ml-[180px]' src={LoginCoReLogo} alt="LoginCoReLogo" />
            <div className='mt-[20px] text-3xl ml-[180px]'>CO-RE 로그인</div>
            <img className='mt-[20px] ml-[38px] cursor-pointer' src={KakaoLogin} alt="KakaoLogin" onClick={isKakaoLogin}/>
            <img className='mt-[20px] ml-[38px]' src={GithubLogin} alt="GithubLogin" />
        </div>
    </div>
    </>
  )
}

export default LoginModal