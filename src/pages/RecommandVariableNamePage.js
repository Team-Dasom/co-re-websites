import React, { useEffect } from 'react';
import axios from 'axios';
import Dropdown from 'components/Dropdown';
import { useForm } from 'react-hook-form';
import ScrollToBottom from 'react-scroll-to-bottom';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer, addQuestion } from 'store/variebleName/variebleNameSlice';
import Answer from 'components/conversation/Conversation';

export default function RecommandVariableName() {
  const { register, handleSubmit, reset, getValues } = useForm();
  const conversation = useSelector(
    (state) => state.variebleName.conversation,
  );
  const dispatch = useDispatch();
  const languageList = ['C', 'C#', 'C++', 'Dart', 'Go', 'Java', 'Javascript', 'typescript', 'kotlin'];


  const textAreaAutosize = (e) => {
    const element = e.target;
    element.style.height = 'auto';
    const maxHeight = 280;

    if (element.scrollHeight <= maxHeight) {
      element.style.height = `${element.scrollHeight}px`;
    } else {
      element.style.height = `${maxHeight}px`;
    }
  };

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      if (!e.shiftKey) {
        e.preventDefault();
        const values = getValues();
        dispatch(addQuestion(values.content));
        reset();

        try {
          const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/gpt/recommendVariableName`, {
            function: 'RECOMMEND_VARIABLE_NAME',
            ...values,
          });

          dispatch(addAnswer(res.data.data.content));

          e.target.style.height = '46px';
        } catch (error) {
          if (error.response && error.response.status === 400) {
            console.log(error.toJSON());
            alert('언어를 선택해 주세요 !');
            setTimeout(() => {
              e.target.style.height = '46px';
            }, 0);          
          } else {
            console.error('Error:', error);
          }
        }
      }
    }
  };

  const onSubmit = async (data) => {
    dispatch(addQuestion(data.content));
    reset();

    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/gpt/recommendVariableName`, {
        function: 'RECOMMEND_VARIABLE_NAME',
        ...data,
      });

      dispatch(addAnswer(res.data.data.content));
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log(error.toJSON());
        alert('언어를 선택해 주세요 !');
        setTimeout(() => {
          document.getElementById('commentTextArea').style.height = '46px';     
        }, 0);       
      } else {
        console.error('Error:', error);
      }
    }
  };

  useEffect(() => {}, [conversation])

  return (
      <ScrollToBottom className='w-full h-[calc(100vh-4rem)] align-center overflow-y-scroll'>
        {conversation.map((item) => {
          return <Answer key={item.id} data={item} isAnswer={item.isAnswer} />;
        })}
      <div className='fixed bottom-0 w-2/3 -translate-x-1/2 left-1/2'>
        <div className='flex flex-col justify-center'>
          <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <Dropdown
              list={languageList}
              title={'language'}
              register={register}
            />
            <textarea
            id='commentTextArea'
              rows={1}
              className='align-bottom resize-none focus:outline-none mt-2 border-[#3B82F6] border-solid border-[1px] p-2 w-[calc(100%-7.75rem)] h-12 rounded-md'
              placeholder='추천을 원하는 "변수"명만 입력해 보세요.'
              onKeyDown={handleKeyPress}
              {...register('content', {
                onChange: textAreaAutosize,
              })}
            />
            <input
              className='bg-[#3B82F6] text-white w-28 h-12 rounded-lg cursor-pointer ml-3'
              type='submit'
              value='submit'
            />
          </form>
          <div className='w-full h-12 bg-white '></div>
        </div>
      </div>
      <div className='flex-shrink-0 h-36 md:h-48'></div>
    </ScrollToBottom>
  )
}
