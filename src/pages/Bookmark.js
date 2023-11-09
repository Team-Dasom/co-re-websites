import BookmarkList from 'components/Bookmark/BookmarkList';
import React from 'react';

const Bookmark = () => {
    return (
    <div>
      {/* 왼쪽 사이드바 */}
        <BookmarkList />

      {/* 메인 콘텐츠 */}
        <div className="w-3/4 p-4">
            <h1>메인 콘텐츠</h1>
        </div>
    </div>
    );
}

export default Bookmark;





