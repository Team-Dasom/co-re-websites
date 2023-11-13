import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import DeleteBtn from './DeleteBtn';
import BookmarkBtn from './BookmarkBtn';
import CopyBtn from './CopyBtn';

export default function CodeBlock({ code, language, isAnswer }) {
  useEffect(() => {
    hljs.highlightAll();
  }, [code, language]);

  const handleDelete = () => {
    console.log('Deleting text:', code);
  };

  return (
    <pre>
      <div className='bg-[#282C34] rounded-t-lg'>
        <div className='bg-[#383B46] flex items-center relative text-gray-200 px-4 py-2 text-xs font-sans justify-between rounded-t-md'>
          <div className='flex gap-2'>
            <div className='h-3 w-3 bg-[#FE5F57] rounded-full'></div>
            <div className='h-3 w-3 bg-[#FAB82C] rounded-full'></div>
            <div className='h-3 w-3 bg-[#2AC23D] rounded-full'></div>
            <div className='text-xs'>{language}</div>
          </div>
          {isAnswer && (
            <div className='flex ml-auto gap-2 items-center'>
              <CopyBtn text={code} />
              <BookmarkBtn />
              <DeleteBtn onDelete={handleDelete} />
            </div>
          )}
        </div>
        <div className='overflow-y-auto'>
          <code className={`language-${language}`}>{code}</code>
        </div>
      </div>
    </pre>
  );
}
