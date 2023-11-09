import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { addAnswer, addQuestion } from 'store/variebleName/variebleNameSlice';
import Answer from 'components/conversation/Conversation';
import TextAreaForm from 'components/Form/TextAreaForm';

export default function RecommandVariableName() {
  const conversation = useSelector((state) => state.variebleName.conversation);
  const languageList = ['C', 'Java', 'JavaScript', 'Python', 'Dart', 'Go', 'Ruby'];
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
        return <Answer key={item.id} data={item} isAnswer={item.isAnswer} />;
      })}
      <TextAreaForm camelCaseAPI='recommendVariableName' placeholder='추천을 원하는 "변수"명만 입력해 보세요.' addQuestion={addQuestion} addAnswer={addAnswer} dropdownList={languageList} />
      <div className='flex-shrink-0 h-36 md:h-48'></div>
    </div>
  );
}
