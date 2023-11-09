import { useState } from 'react';
import VariableBookmark from 'components/Bookmark/VariableBookmark';
import AlgorithmsBookmark from 'components/Bookmark/AlgorithmsBookmark';
import RefactorBookmark from 'components/Bookmark/RefactorBookmark';
import AddComentBookmark from 'components/Bookmark/AddComentBookmark';



function Bookmark() {
  const [content, setContent] = useState('first');

  const handleClickButton = e => {
    console.log(e.target)
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <VariableBookmark />,
    second: <AlgorithmsBookmark />,
    third: <RefactorBookmark />,
    fourth: <AddComentBookmark />,
  };

  console.log(content);

  return (
    <div className='flex'>
        <div className='h-screen p-4 text-white bg-gray-800 w-[260px] flex flex-col'>
        <h1 className='mb-[60px] text-2xl text-center'>요청내용 즐겨찾기</h1>
            {MAIN_DATA.map(data => {
            return (
                    <button className={`mb-5 text-left ${content === data.name ? 'text-blue-500 font-bold' : ''}`}
                        onClick={handleClickButton} name={data.name} key={data.id}>
                        {data.text}
                    </button>
                );
            })}
    </div>
        <div>
        {content && <div>{selectComponent[content]}</div>}
        </div>
    </div>
  );
};


export default Bookmark;


export const MAIN_DATA = [
  {
    id: 1,
    text: '변수명 추천',
    name: 'first',
  },
  {
    id: 2,
    text: '알고리즘 문제 해설',
    name: 'second',
  },
  {
    id: 3,
    text: 'Code 리팩토링',
    name: 'third',
  },
  {
    id: 4,
    text: 'Code 주석 생성',
    name: 'fourth',
  },
];
