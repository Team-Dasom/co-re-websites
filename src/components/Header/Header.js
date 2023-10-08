import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import LoginModal from '../Login/LoginModal';
import HeaderText from './HeaderText';

export default function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <div className='flex w-full h-16 shadow-md'>
      <div className='flex items-center justify-start w-[10%] ml-4'>
        <a
          href='#'
          className='p-2 border border-orange-500 rounded-xl'
        >
          <AiOutlineMenu size='24' />
        </a>
      </div>
      <div className='flex items-center justify-start w-4/5 text-base font-bold gap-x-12 grow'>
        <HeaderText text={'변수명 추천'} />
        <HeaderText text={'Code 언어 변경'} />
        <HeaderText text={'Code 리팩토링'} />
        <HeaderText text={'Code 주석처리'} />
        <HeaderText text={'컨텐츠 추천'} />
      </div>
      <div className='flex items-center justify-end w-[10%] text-orange-700' onClick={()=>setIsOpenModal(true)}>
        <a href="#" className="flex items-center justify-center w-4/5 gap-2 mr-4 border border-orange-500 rounded-lg h-3/5">
          <BsPersonCircle /> 
          Login
        </a>
      </div>
      {isOpenModal && <LoginModal setIsOpenModal={setIsOpenModal}/>}
    </div>
  );
}
