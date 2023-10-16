import React from 'react';
import Logo from '../images/logo-icon.png';

export default function Main() {
  return (
    <div className='flex items-start justify-center flex-1 mt-[6rem]'>
      <div className='flex flex-col items-center w-1/2 p-5'>
        <div className='mb-3 text-5xl all-center'>
          <div className='w-20 h-20 mr-3'>
            <img
              width='100%'
              height='100%'
              src={Logo}
              alt='logo'
            />
          </div>
          <span className='co-re-color'>CO</span>de-
          <span className='co-re-color'>RE</span>
        </div>
        <div className='text-base'>ChatGPT servie for developers</div>
        <div className='flex flex-col justify-center max-w-md gap-5 pl-[1.25rem] mt-10 indent-[-1.25rem]'>
          <p>✅ 개발자를 위한 ChatGPT 활용 서비스 입니다.</p>
          <p>
            ✅ 모든 기능에서 ChatGPT는 개발자가 질문할 내용을 알고 있으며, 예를
            들어 변수명 추천 기능이라면 ‘변수명’만 입력하면 됩니다.
          </p>
          <p>✅ 미로그인시 모든 채팅정보는 저장되지 않습니다.</p>
          <p>
            ✅ 로그인시 모든 정보는 저장되며, 마이페이지에서 입력된 개발 정보를
            바탕으로 ChatGPT가 맞춤 답변을 제공합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
