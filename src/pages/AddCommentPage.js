import React, { useEffect} from 'react';
import { useSelector } from 'react-redux';
import Conversation from 'components/conversation/Conversation';
import ScrollToBottom from 'react-scroll-to-bottom';
import { addAnswer, addQuestion } from 'store/addComment/addCommentSlice';
import TextAreaForm from 'components/Form/TextAreaForm';

export default function AddComment() {
  const languageList = ['Python3', 'C', 'Java', 'Ruby', 'Kotlin', 'Swift', 'C#', 'JavaScript', 'TypeScript', 'Go', 'D', 'Rust', 'C++'];
  const conversation = useSelector((state) => state.addComment.conversation);

  useEffect(() => {}, [conversation]);

  return (
    <ScrollToBottom className='w-full min-h-[calc(100vh-4rem)] align-center overflow-scroll'>
      {conversation.map((item) => {
        return <Conversation key={item.id} data={item} isAnswer={item.isAnswer} />;
      })}
      <TextAreaForm
      camelCaseAPI='addComment'
      placeholder='주석을 삽입할 코드를 입력해주세요.'
      addQuestion={addQuestion}
      addAnswer={addAnswer}
      dropdownList={languageList}/>
      <div className='flex-shrink-0 h-36 md:h-48'></div>
    </ScrollToBottom>
  );
}
