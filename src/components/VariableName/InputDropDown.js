// 'C', 'C#', 'C++', 'Dart', 'Go','Java','Javascript','typescript','kotlin'

import React, { useState } from 'react'

const option = ['C', 'C#', 'C++', 'Dart', 'Go','Java','Javascript','typescript','kotlin']

const InputDropDown = () => {   
    const [selectedItem, setSelectedItem] = useState('');

  return (
    <div className='top-px w-[175px] h-[200px] border overflow-y-scroll shadow-2xl mt-[5px] rounded-[10px] cursor-pointer bg-white'>
            {option.length > 0 &&
                option.map((item, index)=>{
                    return(
                        <li
                        className='hover:bg-[#f2f2f2]'
                        key={index} onClick={() => {
                            console.log(item) // 여기서 콘솔로 찍어보면 잘 나옴
                            setSelectedItem(item)
                            console.log(selectedItem) // 여기서 콘솔로 찍으면 빈 값이 나와여 ;;;; 개어이없음
                        }}>{item}</li>
                    )
                })
            }
    </div>
  )
}
export default InputDropDown