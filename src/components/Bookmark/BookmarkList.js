import React from 'react'

const BookmarkList = () => {
  return (
    <div className=''>
        <div className="flex flex-col w-1/6 h-screen p-4 text-white bg-gray-800">
                <h1 className='mb-[60px] text-2xl text-center'>요청내용 즐겨찾기</h1>
                <button className="mb-5">변수명 추천</button>
                <button className="mb-5">알고리즘 문제 해설</button>
                <button className="mb-5">Code 리팩토링</button>
                <button className="mb-5">Code 주석 생성</button>
            </div>
    </div>
  )
}

export default BookmarkList