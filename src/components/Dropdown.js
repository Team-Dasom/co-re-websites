export default function Dropdown({ title, list, register }) {
  return (
    <div className='w-48'>
      <label
        htmlFor='title'
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        {title === 'language' ? '언어' : '컨텐츠'}를 선택하세요.
      </label>
      <select
        id='title'
        {...register(`${title}`)}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#3B82F6] focus:border-[#3B82F6] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#3B82F6] dark:focus:border-[#3B82F6]'
      >
        <option value=''>Choose {title}</option>
        {list.map((item, idx) => {
          return (
            <option key={item + idx} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
