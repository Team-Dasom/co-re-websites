import React, { useEffect, useState } from 'react';
import { getCookie } from '../components/Cookie/Cookies';
import axios from 'axios';
import VariableName from '../components/VariableName/VariableName';
import InputDropDown from '../components/VariableName/InputDropDown';
import InputInPage from 'components/InputInPage';
import Dropdown from 'components/Dropdown';

export default function RecommandVariableName() {
  const languages = ['C', 'C#', 'C++', 'Dart', 'Go','Java','Javascript','typescript','kotlin']
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [inputValues, setInputValues] = useState(''); 
  const [variableData, setVariableData] = useState('')   
  const [inputString, setInputString] = useState('');
  const [variableDataArray, setVariableDataArray] = useState([]);
  const [view, setView] = useState(false);
  const [placeholder] =useState('    추천을 원하는 "변수"명만 입력해 보세요...');

  // 입력 값이 변경될 때 호출되는 함수
  const handleInputChange = (e) => {
      setInputValues(e.target.value);
      };
  const input = inputValues
  const sendButton = async() => {
    setInputString(input) // inputString에 호출 string 저장

    const data = {
      "function": "RECOMMEND_VARIABLE_NAME",
      "content": `${inputValues}`,
      "language": "자바스크립트"
  };
  try {
      const response = await axios.post(
      `${process.env.REACT_APP_CORE_KAKAO_API_IP_KEY}/api/v1/gpt/recommendVariableName`,
      data,
      {
          headers: {
          Authorization: `Bearer ${getCookie('loginToken')}`,
          },
        },
      );
    // 서버로부터의 응답을 처리
      console.log('서버 응답:', response.data.data.content);
      setVariableData(response.data.data.content) // variableData에 응답 결과 저장
  } catch (error) {
    // 에러를 처리
      console.error('에러:', error);
  }
}
const variableDatas = variableData // 응답 결과를 밖에서 사용해야되기 때문에 다시 variableDatas에 응답 결과 저장

useEffect(()=>{
  if ( inputString !== '') {
    setVariableDataArray([
      ...variableDataArray,
      { inputString: inputString, variableData: variableDatas },
    ]);
  }
},[variableDatas])

  return (
    <div>
      {/* 지피티 바로가기 폴더 */}
      {/* <div className='bg-[#263348] w-[308px] h-[650px] absolute '>
        <div className='flex w-[272px] h-[52px] ml-[19px] mt-[19px] bg-[#4D5562] rounded-[10px] relative cursor-pointer'
        onClick={()=>window.open('https://chat.openai.com/')}>
          <img className='w-[40px] h-[40px] ml-[14px] mt-[6px]' src={gptImg} alt="지피티 바로가기" />
          <div className='w-[208px] h-[33px] font-bold text-white text-2xl mt-[10px] ml-[9px]'>ChatGPT 바로가기</div>
        </div>
      </div> */}

      {/* 주고받는 내용 */}
      <div className='place-items-center h-[490px] overflow-y-scroll pl-[200px] '>
      {variableDataArray.map((item, index) => (
          <VariableName
            key={item.index}
            inputString={item.inputString}
            variableData={item.variableData}
          />
        ))
        }
      </div>

      {/* input  */}
      {/* jae seok 작업한 Dropdown */}
      {/* list와 setSelected함수를 적용하면 해당 값을 가져올 수 있음  */}
      <div className='ml-[310px]'>
        <Dropdown list={languages} setSelectedLanguage={setSelectedLanguage}/>
      </div>
      {/* dropdown */}
      <div className='ml-[310px] text-center'>
        
            <div className='w-[180px] h-[56px] bg-[#D9D9D9] rounded-[10px] relative'>
              <ul onClick={() => {setView(!view)}}> 

              <div className= 'p-[15px]'>
                언어 선택 {view ? '▵' : '▿'} 
              </div>

              <div className='absolute top-[-380%]'>
                {view && <InputDropDown />} 
              </div>
              </ul>
            </div>
          </div>
          
        <InputInPage inputValues={inputValues} handleInputChange={handleInputChange} sendButton={sendButton} placeholder={placeholder}/>
    </div>
  )
}
