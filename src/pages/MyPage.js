import { getCookie, removeCookie } from 'components/Cookie/Cookies';
import { useRouter } from 'hooks/useRouter';
import React from 'react'
import Bookmark from './Bookmark';

export default function MyPage() {
  const { routeTo, currentPath } = useRouter();
  const isLogout = () => {
    removeCookie('profileImage',{path:'/'})
    removeCookie('nickname',{path:'/'})
    removeCookie('accessToken',{path:'/'})
    removeCookie('refreshToken',{path:'/'})
    routeTo('/');
    }

  return (
  <div>
    <div className='grid place-items-center w-[636px] h-auto text-center ml-[389px] mt-[40px] mb-[40px] border-[1px] border-solid border-[#3B82F6] p-[40px] rounded-xl'>
        <h1 className='font-semibold ml-[-470px]'>기본 정보</h1>
        <div className='bg-blue-50 w-[560px] p-[30px] rounded-xl'>
          <img className='ml-[178px] w-[150px] h-[150px] rounded-[50%]' src={getCookie('profileImage')} alt="프로필 이미지" />
          <p className='mt-4 font-semibold'>{getCookie('nickname')}</p>
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


