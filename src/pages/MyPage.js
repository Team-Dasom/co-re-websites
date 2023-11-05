import { getCookie, removeCookie } from 'components/Cookie/Cookies';
import { useRouter } from 'hooks/useRouter';
import React from 'react'

export default function MyPage() {
  const { routeTo, currentPath } = useRouter();
  const isLogout = () => {
    removeCookie('profileImage')
    removeCookie('nickname')
    routeTo('/');
    }

  return (
  <div>
    <div className='grid place-items-center w-[636px] h-auto text-center ml-[389px] mt-[40px] mb-[40px] border-[1px] border-solid border-[#3B82F6] p-[40px] rounded-xl'>
        <h1 className='font-semibold'>기본 정보</h1>
        <div className='bg-blue-50 w-[560px] p-[30px] rounded-xl'>
          <img className='ml-[98px] w-[300px] h-[300px] rounded-[50%]' src={getCookie('profileImage')} alt="프로필 이미지" />
          <p className='font-semibold'>{getCookie('nickname')}</p>
        </div>
        <div className='mt-[10px]'>
          <h1 className='font-semibold'>회원 로그아웃</h1>
          <div className='bg-blue-50 w-[560px] p-[30px] rounded-xl'>
            <button className='bg-gray-300 px-[30px] py-[10px]' onClick={isLogout}>로그아웃</button>
          </div>
        </div>
    </div>
  </div>
  )
}


