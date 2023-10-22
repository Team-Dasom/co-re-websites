import React from 'react'

const InputInPage = ({inputValues, handleInputChange, sendButton, placeholder}) => {
  return (
    <div>
        <div className='flex ml-[310px] mt-[10px]'>
            <input className='border border-[#3B82F6] w-[716px] h-[54px] rounded-[10px]' 
            type="text" 
            placeholder={placeholder}
            value={inputValues}
            onChange={handleInputChange}/>
            <button 
            className='bg-[#3B82F6] text-white w-[124px] h-[54px] ml-[17px] rounded-[10px]'
            onClick={sendButton}>Send</button>
        </div>
    </div>
  )
}

export default InputInPage