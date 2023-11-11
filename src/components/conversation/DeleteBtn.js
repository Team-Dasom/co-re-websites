import React, { useState } from 'react'
import deleteBtn from 'images/DeleteBtn.svg';

const DeleteBtn = ({onDelete}) => {
    const [isDelete, setIsDelete] = useState(false);

    const isGoDelete = () => {
        setIsDelete(!isDelete);
        if (!isDelete) {
            onDelete(); 
        }
    }

  return (
    <div>
        <button className='w-[20px]' onClick={isGoDelete}>
            <img src={deleteBtn} alt="Default" />
        </button>
    </div>
  )
}

export default DeleteBtn