export default function Dropdown({list, setSelectedLanguage}) {

  return (
    <div className="w-48">
      <label
        htmlFor='languages'
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        Select an option
      </label>
      <select
        id='languages'
        onChange={(e) => setSelectedLanguage(e.target.value)}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#3B82F6] focus:border-[#3B82F6] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#3B82F6] dark:focus:border-[#3B82F6]'
      >
        <option value="">Choose Language</option>
        {list.map((language, idx) => {
          return (<option key={language+idx} value={language}>{language}</option>)
        })}
      </select>
    </div>
  );
}
