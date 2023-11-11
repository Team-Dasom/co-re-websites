import React, { useState } from 'react'
import deleteBtn from 'images/DeleteBtn.svg';

const DeleteBtn = () => {
    const [isDelete, setIsDelete] = useState(false);

    const isGoDelete = () => {
        setIsDelete(!isDelete)
    }

  return (
    <div>
        <button className='w-[20px]' onClick={isGoDelete}>
        {isDelete ? '': 
            <img src={deleteBtn} alt="Default" />
        }
        </button>
    </div>
  )
}

export default DeleteBtn