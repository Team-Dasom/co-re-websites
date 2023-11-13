import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';

const DeleteBtn = ({ onDelete }) => {
  const [isDelete, setIsDelete] = useState(false);

  const isGoDelete = () => {
    setIsDelete(!isDelete);
    if (!isDelete) {
      onDelete();
    }
  };

  return (
    <div className='all-center hover-co-re-color'>
      <button onClick={isGoDelete}>
        <AiFillDelete size={'1rem'} />
      </button>
    </div>
  );
};

export default DeleteBtn;
