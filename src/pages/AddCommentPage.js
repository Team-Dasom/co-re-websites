import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Conversation from 'components/conversation/Conversation';
import { addAnswer, addQuestion } from 'store/addComment/addCommentSlice';
import TextAreaForm from 'components/Form/TextAreaForm';

export default function AddComment() {
  const languageList = ['Python', 'C', 'C++', 'Java', 'Ruby', 'Kotlin', 'Swift', 'C#', 'JavaScript', 'TypeScript', 'Go', 'D', 'Rust', 'Dart'];
  const conversation = useSelector((state) => state.addComment.conversation);
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
        camelCaseAPI='addComment'
        placeholder='주석을 삽입할 코드를 입력해주세요.'
        addQuestion={addQuestion}
        addAnswer={addAnswer}
        dropdownList={languageList}
      />
      <div className='flex-shrink-0 h-36 md:h-48'></div>
    </div>
  );
}
