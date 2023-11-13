import React from 'react';
import { AiFillCopy } from 'react-icons/ai';

export default function CopyBtn({ text }) {
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);

      alert('복사 성공!');
    } catch (error) {
      alert('복사 실패! 다시 시도해주세요!');
    }
  };

  return (
    <div className='all-center hover-co-re-color'>
      <button onClick={() => handleCopyClipBoard(text)}>
        <AiFillCopy size={'1rem'} />
      </button>
    </div>
  );
}
