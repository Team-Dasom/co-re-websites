import React from 'react'
import { useSelector } from 'react-redux';

export default function MyPage() {
    const profileImage = useSelector((state) => state.user.profileImage);
    const nickname = useSelector((state) => state.user.nickname);
  return (
  <div className='grid place-items-center'>
    <h1>마이페이지</h1>
    <img className='w-[500px] h-[500px] rounded-[50%]' src={profileImage} alt="프로필 이미지" />
    <p>{nickname}님 어서오세요 !</p>
  </div>
  )
}

