import React, { useEffect } from 'react';
import axios from 'axios';
import Dropdown from 'components/Dropdown';
import { useForm } from 'react-hook-form';
import ScrollToBottom from 'react-scroll-to-bottom';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer, addQuestion } from 'store/variebleName/variebleNameSlice';
import Answer from 'components/conversation/Answer';

export default function RecommandVariableName() {
  const { register, handleSubmit, reset, getValues } = useForm();
  const conversation = useSelector(
    (state) => state.variebleName.conversation,
  );
  const dispatch = useDispatch();
  const languageList = [
    'C',
    'C#',
    'C++',
    'Dart',
    'Go',
    'Java',
    'Javascript',
    'typescript',
    'kotlin',
  ];

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
        dispatch(addAnswer(getValues().content));
        reset();
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/gpt/recommendVariableName`, {
          function: "RECOMMEND_VARIABLE_NAME",
          ...getValues()
        });

        console.log(res);

        e.target.style.height = 'auto';
      }
    }
  };

  const onSubmit = async (data) => {
    dispatch(addAnswer(data.content));
    reset();
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/gpt/recommendVariableName`, {
      function: "RECOMMEND_VARIABLE_NAME",
      ...data
    });

    dispatch(addQuestion(res.data.data.content));
  };

  useEffect(() => {}, [conversation])

//     const data = {
//       "function": "RECOMMEND_VARIABLE_NAME",
//       "content": `${inputValues}`,
//       "language": "java"
//   };
//   try {
//       const response = await axios.post(
//       `${process.env.REACT_APP_BASE_URL}/api/v1/gpt/recommendVariableName`,
//       data,
//       {
//           headers: {
//           Authorization: `Bearer ${getCookie('loginToken')}`,
//           },
//         },
//       );
//     // 서버로부터의 응답을 처리
//       console.log('서버 응답:', response.data.data.content);
//       setVariableData(response.data.data.content) // variableData에 응답 결과 저장
//   } catch (error) {
//     // 에러를 처리
//       console.error('에러:', error);
//   }
// }


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
