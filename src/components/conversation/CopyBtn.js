import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { AiFillCopy } from 'react-icons/ai';

export default function CopyBtn({ text }) {

  return (
    <div className='all-center hover-co-re-color'>
      <CopyToClipboard text={text} onCopy={() => alert('클립보드에 복사되었습니다.')}>
        <AiFillCopy size={'1rem'} />
      </CopyToClipboard>
    </div>
  );
}
