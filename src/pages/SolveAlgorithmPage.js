import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import AlgorithmForm from 'components/Form/AlgorithmForm';
import { addAnswer, addQuestion } from 'store/solveAlgorithm/solveAlgorithmSlice';
import Conversation from 'components/conversation/Conversation';

export default function SolveAlgorithm() {
  const languageList = ['Python', 'C++', 'C', 'Java', 'Ruby', 'Kotlin', 'Swift', 'C#', 'JavaScript', 'Go', 'D', 'Rust'];
  const conversation = useSelector((state) => state.solveAlgorithm.conversation);
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
      <AlgorithmForm
        camelCaseAPI='solveAlgorithm'
        placeholder='해결할 문제 번호를 입력하세요.'
        addQuestion={addQuestion}
        addAnswer={addAnswer}
        dropdownList={languageList}
      />
      <div className='flex-shrink-0 h-36 md:h-48'></div>
    </div>
  );
}
