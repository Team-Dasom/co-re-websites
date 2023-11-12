import React, { useState } from 'react';
import defaultBookmarkImg from 'images/defaultBookmarkImg.svg';
import onBookmarkImg from 'images/OnBookmarkImg.svg';

const BookmarkBtn = () => {
  const [bookmark, setBookmark] = useState(false);

  const isOnBookmark = () => {
    setBookmark(!bookmark);
  };
  return (
    <div className='flex items-center justify-center'>
      <button className='w-[20px] text-white' onClick={isOnBookmark}>
        {bookmark ? <img src={onBookmarkImg} alt='Bookmarked' /> : <img src={defaultBookmarkImg} alt='Default' />}
      </button>
    </div>
  );
};

export default BookmarkBtn;
