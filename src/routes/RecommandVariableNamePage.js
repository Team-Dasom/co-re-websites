import React from 'react';
import gptImg from '../images/gptImg.svg'
import testImg from '../images/testImg.jpeg'
import logo from '../images/logo-icon.png'
import { useSelector } from 'react-redux';


export function RecommandVariableName() {
  const profileImage = useSelector((state) => state.user.profileImage);

  return (
    <div>
      {/* 지피티 바로가기 폴더 */}
      <div className='bg-[#263348] w-[308px] h-[650px] absolute '>
        <div className='flex w-[272px] h-[52px] ml-[19px] mt-[19px] bg-[#4D5562] rounded-[10px] relative cursor-pointer'
        onClick={()=>window.open('https://chat.openai.com/')}>
          <img className='w-[40px] h-[40px] ml-[14px] mt-[6px]' src={gptImg} alt="지피티 바로가기" />
          <div className='w-[208px] h-[33px] font-bold text-white text-2xl mt-[10px] ml-[9px]'>ChatGPT 바로가기</div>
        </div>
      </div>

      {/* 주고받는 내용 */}
      <div className='place-items-center h-[550px] overflow-y-scroll pl-[200px] '>
        {/* 내가 요청한 변수 */}
        <div className='flex h-auto border-b border-[#B5B2B2] items-center p-[25px]'>
          <img className='w-[64px] h-[64px] ml-[360px] rounded-[10px]' src={profileImage} alt="testImg" />
          <div className='ml-[25px]'>자동차</div>
        </div>
      {/* 서버에서 가지고 온 내용 */}
        <div className='bg-[#EDEDED] h-auto pl-[200px] p-[25px] '>
          <div className='flex'>
            <img className='w-[68px] h-[68px] ml-[180px]' src={logo} alt="logo" />
            <div className='ml-[16px] flex'> 
              1. 'car' - 자동차 객체 자체를 나타내는 변수명. <br />
              2. 'vehicle' - 자동차를 포함한 모든 종류의 차량을 나타내는 변수명. <br />
              3. automobile - 자동차를 나타내는 더 격식 있는 변수명. <br />
              4. 'myCar' - 개인적으로 소유한 자동차를 나타내는 변수명. <br />
              5. 'userCar'  - 사용자의 자동차를 나타내는 변수명.
            </div>
          </div>
        </div>
      </div>
      
      {/* input  */}
      <div className='flex place-items-center ml-[450px]'>
        <input className='border border-[#3B82F6] w-[716px] h-[54px] rounded-[10px] ' 
        type="text" 
        placeholder='    추천을 원하는 "변수"명만 입력해 보세요...'/>
        <button className='bg-[#3B82F6] text-white w-[124px] h-[54px] ml-[17px] rounded-[10px]'>Send</button>
      </div>
    </div>
  )
}