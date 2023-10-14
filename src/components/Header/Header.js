import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import LoginModal from 'components/Login/LoginModal';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const profileImage = useSelector((state) => state.user.profileImage);
  const navigate = useNavigate();
  return (
    <div className='flex w-full h-16 shadow-md'>
      <div className='flex items-center justify-start w-[10%] ml-4'>
        <a href='/' className='p-2 border border-orange-500 rounded-xl'>
          <AiOutlineMenu size='24' />
        </a>
      </div>
      <div className='flex items-center justify-start w-4/5 text-base font-bold gap-x-12 grow'>
        <NavLink to='recommand-variable-name' className={({isActive}) => isActive ? 'click' : 'menu-text-hover'}>변수명 추천</NavLink>
        <NavLink to='change-language' className={({isActive}) => isActive ? 'click' : 'menu-text-hover'}>Code 언어 변경</NavLink>
        <NavLink to='refactor' className={({isActive}) => isActive ? 'click' : 'menu-text-hover'}>Code 리팩토링</NavLink>
        <NavLink to='add-comment' className={({isActive}) => isActive ? 'click' : 'menu-text-hover'}>Code 주석처리</NavLink>
        <NavLink to='recommand-content' className={({isActive}) => isActive ? 'click' : 'menu-text-hover'}>컨텐츠 추천</NavLink>
      </div>
      <div
        className='flex items-center justify-end w-[10%] text-orange-700'
      >
        {profileImage ? ( 
                  <div>
                    <img className='flex items-center justify-center w-[45px] h-[45px] gap-2 mr-4 rounded-[50%] cursor-pointer h-3/5' 
                      src={profileImage} 
                      onClick={()=>navigate('/mypage')}
                      alt="프로필 이미지" />
                  </div>
                ) : (
                  <div
                    className='flex items-center justify-center w-4/5 gap-2 mr-4 border border-orange-500 rounded-lg cursor-pointer h-3/5' 
                    onClick={() => {
                      setIsOpenModal(true)
                    }}
                  >
                    <BsPersonCircle />
                    Login
                  </div>
                )}
      </div>
      {isOpenModal === true ? <LoginModal setIsOpenModal={setIsOpenModal} /> : null}
    </div>
  );
}
