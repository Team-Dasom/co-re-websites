import React, { useState } from 'react';
import { AiOutlineFolderAdd, AiFillFolder } from 'react-icons/ai';

const BookmarkBtn = () => {
  const [bookmark, setBookmark] = useState(false);

  const isBookmark = () => {
    setBookmark(!bookmark);
  };

  return (
    <div className='all-center hover-co-re-color'>
      <button onClick={isBookmark}>{bookmark ? <AiFillFolder size={'1.25rem'} /> : <AiOutlineFolderAdd size={'1.25rem'} />}</button>
    </div>
  );
};

export default BookmarkBtn;
