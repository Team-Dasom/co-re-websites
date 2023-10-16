// 'C', 'C#', 'C++', 'Dart', 'Go','Java','Javascript','typescript','kotlin'

import React, { useEffect, useState } from 'react'

const option = ['C', 'C#', 'C++', 'Dart', 'Go','Java','Javascript','typescript','kotlin']

const InputDropDown = () => {   
    const [selectedItem, setSelectedItem] = useState('');

    useEffect(()=>{
        
    },[selectedItem])

  return (
    <div className='top-px w-[175px] h-[200px] border overflow-y-scroll shadow-2xl mt-[5px] rounded-[10px] cursor-pointer bg-white'>
            {option.length > 0 &&
                option.map((item, index)=>{
                    return(
                        <li
                        className='hover:bg-[#f2f2f2]'
                        key={index} 
                        onClick={(e) => {
                            setSelectedItem({item})
                            console.log(selectedItem)
                        }}>{item}</li>
                    )
                })
            }
    </div>
  )
}
export default InputDropDown