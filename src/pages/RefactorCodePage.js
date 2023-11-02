import React, { useEffect } from 'react';
import Conversation from 'components/conversation/Conversation';
import ScrollToBottom from 'react-scroll-to-bottom';
import { addAnswer, addQuestion } from 'store/refactorCode/refactorCodeSlice';
import TextAreaForm from 'components/Form/TextAreaForm';
import { useSelector } from 'react-redux';

export default function RefactorCode() {
  const languageList = ['Python3', 'C', 'Java', 'Ruby', 'Kotlin', 'Swift', 'C#', 'JavaScript', 'TypeScript', 'Go', 'D', 'Rust', 'C++'];
  const conversation = useSelector((state) => state.refactorCode.conversation);

  useEffect(() => {}, [conversation]);

  return (
    <ScrollToBottom className='w-full h-[100vh] align-center'>
      {conversation.map((item) => {
        return <Conversation key={item.id} data={item} isAnswer={item.isAnswer} />;
      })}
      <TextAreaForm
      camelCaseAPI='refactorCode'
      placeholder='리팩토링할 코드를 입력해주세요.'
      addQuestion={addQuestion}
      addAnswer={addAnswer}
      dropdownList={languageList}/>
      <div className='flex-shrink-0 h-36 md:h-48'></div>
    </ScrollToBottom>
  );
}
