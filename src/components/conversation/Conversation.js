import gptImg from '../../images/gptImg.svg';
import defaultProfileImage from '../../images/defaultProfileImage.jpg';
import { useSelector } from 'react-redux';
import CodeBlock from './CodeBlock';

export default function Conversation({ data }) {
  const accessToken = useSelector((state) => state.user.accessToken);
  const profileImage = useSelector((state) => state.user.profileImage);
  const { text, isAnswer, language } = data;
  const profileImageSrc = isAnswer ? gptImg : accessToken ? profileImage : defaultProfileImage;

  return (
    <div className={`animate-fadeIn p-4 text-base md:gap-6 md:py-6 m-auto border-b border-solid bg-[${isAnswer ? '#EDEDED' : '#fff'}] border-[#B5B2B2]`}>
      <div className='flex flex-1 gap-4 text-sm mx-auto md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl'>
        <div className='relative flex flex-col items-end flex-shrink-0'>
          <div className='relative flex px-4 py-2'>
            <img className='rounded-md w-9 h-9' src={profileImageSrc} alt='카카오톡 프로필 사진'></img>
          </div>
        </div>
        <div className='min-w-[32rem] min-h-[20px] flex flex-col items-start gap-3 whitespace-pre-wrap break-words overflow-x-auto'>
          <div className='w-full break-words'>
            <CodeBlock code={text} language={language} isAnswer={isAnswer} />
          </div>
        </div>
      </div>
    </div>
  );
}
