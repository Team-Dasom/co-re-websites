import axios from 'axios';
import Dropdown from 'components/Dropdown';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const isUpperCase = (char) => {
  return char === char.toUpperCase();
};

const camelCaseToSnakeCase = (str) => {
  const strArray = str.split('');
  let newStr = strArray
  .map((charactor) => (isUpperCase(charactor) ? `_${charactor.toUpperCase()}` : charactor.toUpperCase()))
  .join('');

  return newStr;
};

export default function TextAreaForm({ camelCaseAPI, placeholder, addQuestion, addAnswer, dropdownList }) {
  const { register, handleSubmit, reset, getValues } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const inputData = data;
    dispatch(addQuestion(inputData.content));
    reset();
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/gpt/${camelCaseAPI}`, {
      function: camelCaseToSnakeCase(camelCaseAPI),
      ...inputData,
    });

    dispatch(addAnswer(res.data.data.content));
  };

  const textAreaAutosize = (e) => {
    const element = e.target;
    element.style.height = 'auto';
    const maxHeight = 280;

    if (element.scrollHeight <= maxHeight) {
      element.style.height = `${element.scrollHeight}px`;
    } else {
      element.style.height = `${maxHeight}px`;
    }
  };

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      if (!e.shiftKey) {
        e.preventDefault();
        const values = getValues();
        dispatch(addQuestion(values.content));
        reset();
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/gpt/${camelCaseAPI}`, {
          function: camelCaseToSnakeCase(camelCaseAPI),
          ...values,
        });

        dispatch(addAnswer(res.data.data.content));

        e.target.style.height = 'auto';
      }
    }
  };

  return (
    <>
      <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
        <Dropdown list={dropdownList} title={'language'} register={register} />
        <textarea
          rows={1}
          className='align-bottom resize-none focus:outline-none mt-2 border-[#3B82F6] border-solid border-[1px] p-2 w-[calc(100%-7.75rem)] h-12 rounded-md'
          placeholder={placeholder}
          onKeyDown={handleKeyPress}
          {...register('content', {
            onChange: textAreaAutosize,
          })}
        />
        <input className='bg-[#3B82F6] hover:bg-[#9bbffa] text-white w-28 h-12 rounded-lg cursor-pointer ml-3' type='submit' value='submit' />
      </form>
    </>
  );
}
