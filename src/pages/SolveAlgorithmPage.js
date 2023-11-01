import React, { useEffect } from 'react';
import Dropdown from 'components/Dropdown';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer, addQuestion } from 'store/changeLanguage/changeLanguageSlice';
import Answer from 'components/conversation/Conversation';
import ScrollToBottom from 'react-scroll-to-bottom';
import axios from 'axios';

export default function SolveAlgorithm() {
  const languageList = ['Python3', 'C', 'Java', 'Ruby', 'Kotlin', 'Swift', 'C#', 'Node.js', 'Go', 'D', 'Rust', 'C++'];
  const { register, handleSubmit, reset, getValues } = useForm();
  const conversation = useSelector((state) => state.changeLanguage.conversation);
  const dispatch = useDispatch();

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      if (!e.shiftKey) {
        e.preventDefault();
        const values = getValues();
        dispatch(addQuestion(values.problem));
        reset();
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/gpt/solveAlgorithm`, {
          function: 'SOLVE_ALGORITHM',
          ...values,
        });
        dispatch(addAnswer(res.data.data.content));
      }
    }
  };

  const onSubmit = async (data) => {
    dispatch(addQuestion(data.problem));
    reset();
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/gpt/solveAlgorithm`, {
      function: 'SOLVE_ALGORITHM',
      ...data,
    });
    
    dispatch(addAnswer(res.data.data.content));
  };

  useEffect(() => {}, [conversation]);
  
  return (
    <ScrollToBottom className='w-full min-h-[calc(100vh-4rem)] align-center overflow-scroll'>
      {conversation.map((item) => {
        return <Answer key={item.id} data={item} isAnswer={item.isAnswer} />;
      })}
      <div className='bottom-[-1.25rem] fixed w-[100vw] h-[23vh] bg-white blur-xl'></div>
      <div className='fixed bottom-0 w-2/3 -translate-x-1/2 bg-white left-1/2'>
        <div className='flex flex-col justify-center'>
          <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex gap-3'>
              <Dropdown list={languageList} title={'language'} register={register} />
              <div className='w-48'>
                <label htmlFor='platform' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  플랫폼을 선택하세요.
                </label>
                <select
                  id='platform'
                  {...register('platform')}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#3B82F6] focus:border-[#3B82F6] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#3B82F6] dark:focus:border-[#3B82F6]'
                >
                  <option value=''>선택하세요</option>
                  <option value='백준'>백준</option>
                  <option disabled value='프로그래머스'>
                    프로그래머스
                  </option>
                </select>
              </div>
            </div>
            <input
              className='align-bottom resize-none focus:outline-none mt-2 border-[#3B82F6] border-solid border-[1px] p-2 w-[calc(100%-7.75rem)] h-12 rounded-md'
              placeholder='해결할 문제 번호를 입력하세요.'
              onKeyDown={handleKeyPress}
              {...register('problem')}
            />
            <input className='bg-[#3B82F6] hover:bg-[#9bbffa] text-white w-28 h-12 rounded-lg cursor-pointer ml-3' type='submit' value='submit' />
          </form>
          <div className='w-full h-3 bg-white '></div>
        </div>
      </div>
      <div className='flex-shrink-0 h-36 md:h-48'></div>
    </ScrollToBottom>
  );
}
