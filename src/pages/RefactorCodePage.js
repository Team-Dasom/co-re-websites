import React, { useCallback, useEffect, useRef } from 'react';
import Conversation from 'components/conversation/Conversation';
import { addAnswer, addQuestion } from 'store/refactorCode/refactorCodeSlice';
import TextAreaForm from 'components/Form/TextAreaForm';
import { useSelector } from 'react-redux';

export default function RefactorCode() {
  const languageList = ['Python', 'C', 'C++', 'Java', 'Ruby', 'Kotlin', 'Swift', 'C#', 'JavaScript', 'TypeScript', 'Go', 'D', 'Rust', 'Dart'];
  const conversation = useSelector((state) => state.refactorCode.conversation);
  const chatBoxRef = useRef();

  const scrollToBottom = useCallback(() => {
    chatBoxRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }, [conversation]);

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  return (
    <div ref={chatBoxRef}>
      {conversation.map((item) => {
        return <Conversation key={item.id} data={item} isAnswer={item.isAnswer} />;
      })}

      <TextAreaForm
        camelCaseAPI='refactorCode'
        placeholder='리팩토링할 코드를 입력해주세요.'
        addQuestion={addQuestion}
        addAnswer={addAnswer}
        dropdownList={languageList}
      />
      <div className='flex-shrink-0 h-36 md:h-48'></div>
    </div>
  );
}
