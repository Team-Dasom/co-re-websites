import axios from 'axios';
import Dropdown from 'components/Dropdown';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import ReactTextareaAutosize from 'react-textarea-autosize';

const isUpperCase = (char) => {
  return char === char.toUpperCase();
};

const camelCaseToSnakeCase = (str) => {
  const strArray = str.split('');
  let newStr = strArray.map((charactor) => (isUpperCase(charactor) ? `_${charactor.toUpperCase()}` : charactor.toUpperCase())).join('');

  return newStr;
};

export default function TextAreaForm({ camelCaseAPI, placeholder, addQuestion, addAnswer, dropdownList }) {
  const { register, handleSubmit, reset, getValues, setFocus } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const inputData = data;
    dispatch(addQuestion(inputData.content));
    reset();
    
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/gpt/${camelCaseAPI}`, {
        function: camelCaseToSnakeCase(camelCaseAPI),
        ...inputData,
      });

      dispatch(addAnswer(res.data.data.content));
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log(error.toJSON());
        alert('언어를 선택해 주세요 !');
      } else {
        console.error('Error:', error);
      }
    }
  };

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      if (!e.shiftKey) {
        e.preventDefault();
        const values = getValues();
        reset();
        dispatch(addQuestion(values.content));
        e.target.rows = 1;
        
        try {
          const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/gpt/${camelCaseAPI}`, {
            function: camelCaseToSnakeCase(camelCaseAPI),
            ...values,
          });

          dispatch(addAnswer(res.data.data.content));
        } catch (error) {
          if (error.response && error.response.status === 400) {
            console.log(error.toJSON());
            alert('언어를 선택해 주세요 !');
          } else {
            console.error('Error:', error);
          }
        }
      }
    }
  };

  useEffect(() => {
    setFocus('content');
  }, [setFocus]);

  return (
    <>
      <div className='bottom-[-1.25rem] fixed w-[100vw] h-[23vh] bg-white blur-xl'></div>
      <div className='fixed bottom-0 w-2/3 -translate-x-1/2 left-1/2'>
        <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
          <Dropdown list={dropdownList} title={'language'} register={register} />
          <ReactTextareaAutosize
            minRows={1}
            maxRows={6}
            className='align-bottom resize-none focus:outline-none mt-2 border-[#3B82F6] border-solid border-[1px] p-2 w-[calc(100%-7.75rem)] rounded-md'
            placeholder={placeholder}
            onKeyDown={handleKeyPress}
            {...register('content', {
              required: true,
            })}
          />
          <input className='bg-[#3B82F6] hover:bg-[#9bbffa] text-white w-28 h-[42px] rounded-lg cursor-pointer ml-3' type='submit' value='submit' />
        </form>
        <div className='w-full h-3 bg-white '></div>
      </div>
    </>
  );
}
