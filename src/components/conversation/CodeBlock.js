import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

export default function CodeBlock({ code, language }) {
  useEffect(() => {
    hljs.highlightAll();
  }, [code, language]);
  return (
    <div className='bg-[#383B46] min-w-[512px] text-white border-current rounded-t-lg text-sm'>
      <div className='flex justify-between p-2'>
        <div className='flex justify-center items-center gap-2'>
          <div className='h-3 w-3 bg-[#FE5F57] rounded-full'></div>
          <div className='h-3 w-3 bg-[#FAB82C] rounded-full'></div>
          <div className='h-3 w-3 bg-[#2AC23D] rounded-full'></div>
        </div>
        <div className='text-xs'>{language}</div>
      </div>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
