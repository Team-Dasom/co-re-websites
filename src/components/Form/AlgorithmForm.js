import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const isUpperCase = (char) => {
  return char === char.toUpperCase();
};

const camelCaseToSnakeCase = (str) => {
  const strArray = str.split('');
  let newStr = strArray.map((charactor) => (isUpperCase(charactor) ? `_${charactor.toUpperCase()}` : charactor.toUpperCase())).join('');

  return newStr;
};

export default function AlgorithmForm({ camelCaseAPI, placeholder, addQuestion, addAnswer, dropdownList }) {
  const { register, handleSubmit, reset, getValues } = useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      if (!e.shiftKey) {
        e.preventDefault();
        const values = getValues();
        dispatch(addQuestion(values.problem));
        reset();

        try {
          setLoading(true);
          const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/gpt/${camelCaseAPI}`, {
            function: camelCaseToSnakeCase(camelCaseAPI),
            ...values,
          });

          dispatch(addAnswer(res.data.data.content));
          e.target.style.height = '46px';
        } catch (error) {
          if (error.response && error.response.status === 400) {
            console.log(error.toJSON());
            alert('언어를 선택해 주세요 !');
          } else {
            console.error('error : ', error);
          }
        } finally {
          setLoading(false);
        }
      }
    }
  };

  const onSubmit = async (data) => {
    const inputData = data;
    dispatch(addQuestion(inputData.content));
    reset();

    try {
      setLoading(true);
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/gpt/refactorCode`, {
        function: 'REFACTOR_CODE',
        ...inputData,
      });

      dispatch(addAnswer(res.data.data.content));
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log(error.toJSON());
        alert('언어를 선택해 주세요 !');
      } else {
        console.error('error:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='bottom-[-1.25rem] fixed w-[100vw] h-[23vh] bg-white blur-xl'></div>
      <div className='fixed bottom-0 w-2/3 -translate-x-1/2 bg-white left-1/2'>
        <div className='flex flex-col justify-center'>
          <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex gap-3'>
              <div className='w-48'>
                <label htmlFor='title' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  언어를 선택하세요.
                </label>
                <select
                  id='title'
                  {...register('language')}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#3B82F6] focus:border-[#3B82F6] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#3B82F6] dark:focus:border-[#3B82F6]'
                >
                  <option value=''>Choose Language</option>
                  {dropdownList.map((item, idx) => {
                    return (
                      <option key={item + idx} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className='w-48'>
                <label htmlFor='platform' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  플랫폼을 선택하세요.
                </label>
                <select
                  id='platform'
                  {...register('platform')}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#3B82F6] focus:border-[#3B82F6] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#3B82F6] dark:focus:border-[#3B82F6]'
                >
                  <option value=''>선택하세요</option>
                  <option value='백준'>백준</option>
                  <option disabled value='프로그래머스'>
                    프로그래머스
                  </option>
                </select>
              </div>
            </div>
            <input
              className='align-bottom resize-none focus:outline-none mt-2 border-[#3B82F6] border-solid border-[1px] p-2 w-[calc(100%-7.75rem)] h-[42px] rounded-md'
              placeholder={placeholder}
              onKeyDown={(e) => {
                if (e.key.length === 1 && !/\d/.test(e.key)) {
                  // 사용자가 키를 눌렀을 때 해당 키가 숫자가 아닌 경우에만 alert를 표시하고 입력을 무효화 시킼.
                  e.preventDefault();
                  alert('번호만 입력해 주세요 🥰');
                }
                handleKeyPress(e);
              }}
              {...register('problem', {
                // 입력된 값 뒤에 '번'을 추가
                setValueAs: (value) => value + '번',
              })}
            />
            <button
              disabled={loading}
              className='ml-3 inline-flex h-[42px] w-28 justify-center items-center px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out  rounded-lg shadow cursor-pointer bg-[#3B82F6] hover:bg-[#9bbffa]'
            >
              {loading ? (
                <>
                  <svg className='w-5 h-5 mr-3 -ml-1 text-white animate-spin' viewBox='0 0 24 24'>
                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                    <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                  </svg>
                  Loading
                </>
              ) : (
                'Submit'
              )}
            </button>
          </form>
          <div className='w-full h-3 bg-white '></div>
        </div>
      </div>
    </>
  );
}
