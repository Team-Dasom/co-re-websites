import React, { useEffect, useState } from 'react';
import Dropdown from 'components/Dropdown';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Conversation from 'components/conversation/Conversation';
import ScrollToBottom from 'react-scroll-to-bottom';
import axios from 'axios';
import { addAnswer, addQuestion } from 'store/addComment/addCommentSlice';

export default function AddComment() {
  const languageList = ['Python3', 'C', 'Java', 'Ruby', 'Kotlin', 'Swift', 'C#', 'JavaScript', 'TypeScript', 'Go', 'D', 'Rust', 'C++'];
  const { register, handleSubmit, reset, getValues } = useForm();
  const conversation = useSelector((state) => state.addComment.conversation);
  const dispatch = useDispatch();

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
          const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/gpt/addComment`, {
            function: 'ADD_COMMENT',
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
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/gpt/addComment`, {
        function: 'ADD_COMMENT',
        ...data,
      });

      dispatch(addAnswer(res.data.data.content));
      document.getElementById('commentTextArea').style.height = '46px';
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

  useEffect(() => {}, [conversation]);

  return (
    <ScrollToBottom className='w-full min-h-[calc(100vh-4rem)] align-center overflow-scroll'>
      {conversation.map((item) => {
        return <Conversation key={item.id} data={item} isAnswer={item.isAnswer} />;
      })}
      <div className='bottom-[-1.25rem] fixed w-[100vw] h-[23vh] bg-white blur-xl'></div>
      <div className='fixed bottom-0 w-2/3 -translate-x-1/2 bg-white left-1/2'>
        <div className='flex flex-col justify-center'>
          <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <Dropdown list={languageList} title={'language'} register={register} />
            <textarea
              id="commentTextArea"
              rows={1}
              className='align-bottom resize-none focus:outline-none mt-2 border-[#3B82F6] border-solid border-[1px] p-2 w-[calc(100%-7.75rem)] h-12 rounded-md'
              placeholder='언어를 변경할 코드를 입력하세요.'
              onKeyDown={handleKeyPress}
              {...register('content', {
                onChange: textAreaAutosize,
              })}
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
