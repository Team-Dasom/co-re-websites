import React from 'react';
import { AiFillCopy } from 'react-icons/ai';

export default function CopyBtn({ text }) {
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);

      alert('복사 성공!');
    } catch (error) {
      alert('복사 실패!');
    }
  };

  return (
    <div className='all-center hover-co-re-color'>
      <button onClick={() => handleCopyClipBoard(text)}>
        <AiFillCopy size={'1.25rem'} />
      </button>
    </div>
  );
}
