import { getCookie, removeCookie } from 'components/Cookie/Cookies';
import { useRouter } from 'hooks/useRouter';
import React from 'react'
import { useSelector } from 'react-redux';

export default function MyPage() {
    const profileImage = useSelector((state) => state.user.profileImage);
    const nickname = useSelector((state) => state.user.nickname);
    const { routeTo, currentPath } = useRouter();

    const isLogout = () => {
      removeCookie('nickname')
      removeCookie('profileImage')
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

