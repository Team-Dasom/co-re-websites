import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { addAnswer, addQuestion } from 'store/changeLanguage/changeLanguageSlice';
import Answer from 'components/conversation/Conversation';
import ScrollToBottom from 'react-scroll-to-bottom';
import AlgorithmForm from 'components/Form/AlgorithmForm';

export default function SolveAlgorithm() {
  const languageList = ['Python3', 'C', 'Java', 'Ruby', 'Javascript', 'Kotlin', 'Swift', 'C#', 'Node.js', 'Go', 'D', 'Rust', 'C++'];
  const conversation = useSelector((state) => state.changeLanguage.conversation);
  

  
  useEffect(() => {}, [conversation]);

  return (
    <ScrollToBottom className='w-full min-h-[calc(100vh-4rem)] align-center overflow-scroll'>
      {conversation.map((item) => {
        return <Answer key={item.id} data={item} isAnswer={item.isAnswer} />;
      })}
      <AlgorithmForm
        camelCaseAPI='solveAlgorithm'
        placeholder='해결할 문제 번호를 입력하세요.'
        addQuestion={addQuestion}
        addAnswer={addAnswer}
        dropdownList={languageList} />
      <div className='flex-shrink-0 h-36 md:h-48'></div>
    </ScrollToBottom>
  );
}
