import { getCookie, removeCookie } from 'components/Cookie/Cookies';
import React from 'react'

export default function MyPage() {

  const isLogout = () => {
    removeCookie('profileImage')
    removeCookie('nickname')
    window.location.href = '/';
    }

  return (
  <div className='grid place-items-center'>
    <h1>마이페이지</h1>
    <img className='w-[500px] h-[500px] rounded-[50%]' src={getCookie('profileImage')} alt="프로필 이미지" />
    <p> {getCookie('nickname')}님 어서오세요 !</p>
    <button onClick={isLogout}>로그아웃</button>
  </div>
  )
}


