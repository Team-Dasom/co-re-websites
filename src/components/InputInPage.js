import React from 'react'

const InputInPage = ({inputValues, handleInputChange, sendButton, placeholder}) => {
  return (
    <div>
        <div className='flex mt-[10px] '>
            <input className='border border-[#3B82F6] w-[836px] h-[48px] rounded-[10px]' 
            type="text" 
            placeholder={placeholder}
            value={inputValues}
            onChange={handleInputChange}/>
            <button 
            className='bg-[#3B82F6] text-white w-[112px] h-[48px] ml-[12px] rounded-[10px]'
            onClick={sendButton}>Send</button>
        </div>
    </div>
  )
}

export default InputInPage