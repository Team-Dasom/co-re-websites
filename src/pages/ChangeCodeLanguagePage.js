import React from 'react';
import Dropdown from 'components/Dropdown';
import { useForm } from 'react-hook-form';

export default function ChangeCodeLanguage() {
  const languageList = ['C', 'C#', 'C++', 'Dart', 'Go', 'Java', 'Javascript', 'typescript', 'kotlin'];
  const { register, handleSubmit } = useForm();

  const textAreaAutosize = (e) => {
    const element = e.target
    element.style.height = 'auto';
    const maxHeight = 280;
    
    if(element.scrollHeight <= maxHeight) {
      console.log(element.scrollHeight);
      element.style.height = `${element.scrollHeight}px`;
    } else {
      element.style.height = `${maxHeight}px`;
    }
  }

  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <div className='w-full h-[calc(100vh-4rem)] align-center'>
      <div className='flex justify-center'>user</div>
      <div className='flex justify-center'>chatGPT</div>

      <div className='absolute w-2/3 -translate-x-1/2 bottom-10 left-1/2'>
        <div className='flex justify-center'>
          <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <Dropdown
              list={languageList}
              title={'language'}
              register={register}
            />
            <textarea
              rows={1}
              className='resize-none focus:outline-none mt-2 border-[#3B82F6] border-solid border-[1px] p-2 w-[calc(100%-7.75rem)] h-12 rounded-md'
              placeholder='언어를 변경할 코드를 입력하세요.'
              {...register('//들어갈 이름//', {
                onChange: textAreaAutosize,
              })}
            />
            <input
              className='bg-[#3B82F6] text-white w-28 h-12 rounded-lg cursor-pointer ml-3'
              type='submit'
              value='submit'
            />
          </form>
        </div>
      </div>
    </div>
  );
}
