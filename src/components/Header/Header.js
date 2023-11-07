import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import LoginModal from 'components/Login/LoginModal';
import { useSelector } from 'react-redux';
import { useRouter } from 'hooks/useRouter';
import { headerContent } from 'router';
import { useNavigate } from 'react-router-dom';
import { getCookie } from 'components/Cookie/Cookies';
import ChatGPT from '../../images/gptImg.svg'

export default function Header() {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const profileImage = useSelector((state) => state.user.profileImage);
  const { routeTo, currentPath } = useRouter();
  // const accessToken = useSelector((state) => state.user.accessToken); 
  // console.log("accessToken : ",accessToken)
  const accessToken = getCookie('accessToken')

  const headerMenuClickHandler = (path) => {
    routeTo(path)
  }

  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className='flex w-full h-16 shadow-md'>
      <div className='flex items-center justify-start w-[10%] ml-4'>
        {/* <a href='/' className='p-2 border border-orange-500 rounded-xl'>
          <AiOutlineMenu size='24' />
        </a> */}
        <img className='cursor-pointer' src={ChatGPT} alt='gpt 바로가기 버튼'
        onClick={() => window.open("https://chat.openai.com/")} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}></img>
        {isHovered && (
          <div className="absolute p-2 text-slate-800 transform -translate-x-1/2 -translate-y-1/2 bg-green-100 rounded top-[32px] left-[105px] opacity-50">
            <p className='text-xs'>GPT 바로가기</p>
          </div>
        )}
      </div>
      <div className='flex items-center justify-start w-4/5 text-base font-bold gap-x-12 grow'>
        {headerContent.map((element) => {
          return (
            <div 
            key={element.path}
            className={ currentPath === element.path ? 'click' : 'menu-text-hover' }
            onClick={() => headerMenuClickHandler(element.path)}>
              {element.label}
            </div>
          )
        })}
      </div>
      <div
        className='flex items-center justify-end w-[10%] text-orange-700'
      >
        {getCookie('accessToken') || getCookie('profileImage') ? ( 
                  <div>
                    <img className='flex items-center justify-center w-[45px] h-[45px] gap-2 mr-4 rounded-[50%] cursor-pointer h-3/5' 
                      src={getCookie('profileImage')} 
                      onClick={()=>routeTo('/mypage')}
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
