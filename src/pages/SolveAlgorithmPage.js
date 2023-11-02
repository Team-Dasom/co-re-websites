import React, { useEffect, useState } from 'react';
import Dropdown from 'components/Dropdown';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer, addQuestion } from 'store/changeLanguage/changeLanguageSlice';
import Answer from 'components/conversation/Conversation';
import ScrollToBottom from 'react-scroll-to-bottom';
import axios from 'axios';

export default function SolveAlgorithm() {
  const languageList = ['Python3', 'C', 'Java', 'Ruby','Javascript', 'Kotlin', 'Swift', 'C#', 'Node.js', 'Go', 'D', 'Rust', 'C++'];
  const { register, handleSubmit, reset, getValues } = useForm();
  const conversation = useSelector((state) => state.changeLanguage.conversation);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      if (!e.shiftKey) {
        e.preventDefault();
        const values = getValues();
        dispatch(addQuestion(values.content));
        reset();

        try {
          setLoading(true);
          const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/gpt/refactorCode`, {
            function: 'REFACTOR_CODE',
            ...values,
          });

          dispatch(addAnswer(res.data.data.content));
          e.target.style.height = '46px';
        } catch (error) {
          if (error.response && error.response.status === 400) {
            console.log(error.toJSON());
            alert('언어를 선택해 주세요 !'); 
          } else {
            console.error("error : " ,error);
          }
        } finally {
          setLoading(false);
        }
      }
    }
  };

  const onSubmit = async (data) => {
    dispatch(addQuestion(data.content));
    reset();

    try {
      setLoading(true);
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/gpt/refactorCode`, {
        function: 'REFACTOR_CODE',
        ...data,
      });

      dispatch(addAnswer(res.data.data.content));
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log(error.toJSON());
        alert('언어를 선택해 주세요 !');
      } else {
        console.error('error:', error);
      }
    } finally {
      setLoading(false);
    }
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
              className='align-bottom resize-none focus:outline-none mt-2 border-[#3B82F6] border-solid border-[1px] p-2 w-[calc(100%-7.75rem)] h-[42px] rounded-md'
              placeholder='해결할 문제 번호를 입력하세요.'
              onKeyDown={(e) => {
                if (e.key.length === 1 && !/\d/.test(e.key)) { // 사용자가 키를 눌렀을 때 해당 키가 숫자가 아닌 경우에만 alert를 표시하고 입력을 무효화 시킼.
                  e.preventDefault();
                  alert("번호만 입력해 주세요 🥰")
                }
                handleKeyPress(e);
              }}
              {...register('problem', {
                // 입력된 값 뒤에 '번'을 추가
                setValueAs: (value) => value + '번',
              })}
            />
            <button disabled={loading} className='ml-3 inline-flex h-[42px] w-28 justify-center items-center px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out  rounded-lg shadow cursor-pointer bg-[#3B82F6] hover:bg-[#9bbffa]'>
            {loading ? (
              <>
                <svg className='w-5 h-5 mr-3 -ml-1 text-white animate-spin' viewBox='0 0 24 24'>
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading
              </>
            ) : (
              'Submit'
            )}
          </button>
          </form>
          <div className='w-full h-3 bg-white '></div>
        </div>
      </div>
      <div className='flex-shrink-0 h-36 md:h-48'></div>
    </ScrollToBottom>
  );
}
