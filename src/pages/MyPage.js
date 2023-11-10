import axios from 'axios';
import { removeCookie } from 'components/Cookie/Cookies';
import { useRouter } from 'hooks/useRouter';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearAccessToken, clearUserProfile } from 'store/KakaoLogin/kakaoUserSlice';
import persistor from '../store/store'

export default function MyPage() {
  const dispatch = useDispatch()
  const accessToken = useSelector((state) => state.user.accessToken); 
  const profileImage = useSelector((state) => state.user.profileImage); 
  const nickname = useSelector((state) => state.user.nickname); 
  const { routeTo, currentPath } = useRouter();
  const isLogout = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/auth/logout`,
        {}, // 빈 객체를 전달하여 요청 본문이 없음을 나타냅니다.
        {
          headers: {
            'Authorization': `Bearer ${accessToken.accessToken}`,
          },
        }
      );
      console.log("로그아웃 data : ", response.data);
      dispatch(clearUserProfile({profileImage, nickname}));
      removeCookie('refreshToken', { path: '/' });
      dispatch(clearAccessToken({accessToken}));
      routeTo('/');
      await persistor.purge()
    } catch (error) {
      console.error("로그아웃 요청 중 오류 발생: ", error);
    }
  };

  return (
  <div>
    <div className='grid place-items-center w-[636px] h-auto text-center ml-[389px] mt-[40px] mb-[40px] border-[1px] border-solid border-[#3B82F6] p-[40px] rounded-xl'>
        <h1 className='font-semibold ml-[-470px]'>기본 정보</h1>
        <div className='bg-blue-50 w-[560px] p-[30px] rounded-xl'>
          <img className='ml-[178px] w-[150px] h-[150px] rounded-[50%]' src={profileImage} alt="프로필 이미지" />
          <p className='mt-4 font-semibold'>{nickname}</p>
        </div>
        <div className='mt-[10px]'>
          <div className='bg-blue-50 w-[560px] p-[30px] rounded-xl'>
            <button className='bg-gray-300 px-[30px] py-[10px] mr-10 rounded-md' onClick={()=>routeTo('/Bookmark')}>즐겨찾기</button>
            <button className='bg-gray-300 px-[30px] py-[10px] rounded-md' onClick={isLogout}>로그아웃</button>
          </div>
        </div>
    </div>
  </div>
  )
}


