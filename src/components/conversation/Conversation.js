import gptImg from '../../images/gptImg.svg'
import defaultProfileImage from '../../images/defaultProfileImage.jpg'
import { useSelector } from "react-redux";
import BookmarkBtn from './BookmarkBtn';
import DeleteBtn from './DeleteBtn';


export default function Conversation({ data }) {
  const accessToken = useSelector((state) => state.user.accessToken); 
  const profileImage = useSelector((state) => state.user.profileImage); 
  const { text, isAnswer } = data;
  const profileImageSrc = isAnswer ? gptImg : (accessToken ? profileImage : defaultProfileImage);
  
  const handleDelete = () => {
    console.log('Deleting text:', text);
  };

  return (
    <div className={`animate-fadeIn p-4 justify-center text-base md:gap-6 md:py-6 m-auto border-b border-solid bg-[${isAnswer ? '#EDEDED' : '#fff'}] border-[#B5B2B2]`}>
      <div className='flex flex-1 gap-4 text-base mx-auto md:gap-6 gizmo:gap-3 gizmo:md:px-5 gizmo:lg:px-1 gizmo:xl:px-5 md:max-w-2xl lg:max-w-[38rem] gizmo:md:max-w-3xl gizmo:lg:max-w-[40rem] gizmo:xl:max-w-[48rem] xl:max-w-3xl }'>
        <div className='relative flex flex-col items-end flex-shrink-0'>
          <div>
            <div className='relative flex'>
              <img 
              className='rounded-md w-9 h-9' 
              src={profileImageSrc} 
              alt="카카오톡 프로필 사진"></img>
            </div>
          </div>
        </div>
        <div className='min-h-[20px] flex flex-col items-start gap-3 whitespace-pre-wrap break-words overflow-x-auto'>
          <div>{text}</div>
        </div>
          {isAnswer ? (
                <div className='flex ml-auto space-x-2'>
                  <BookmarkBtn />
                  <DeleteBtn onDelete={handleDelete}/>
                </div>
              ) : ''}
      </div>
    </div>
  );
}
