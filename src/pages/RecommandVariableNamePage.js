import React, { useEffect, useState } from 'react';
import { getCookie } from '../components/Cookie/Cookies';
import axios from 'axios';
import VariableName from '../components/VariableName/VariableName';
import InputDropDown from '../components/VariableName/InputDropDown';

export function RecommandVariableName() {
  const [inputValues, setInputValues] = useState(''); 
  const [variableData, setVariableData] = useState('')   
  const [inputString, setInputString] = useState('');
  const [variableDataArray, setVariableDataArray] = useState([]);
  const [view, setView] = useState(false);


  // 입력 값이 변경될 때 호출되는 함수
  const handleInputChange = (e) => {
      setInputValues(e.target.value);
  };

  const sendButton = async() => {
    const input = inputValues
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
  if ( variableDatas !== '' && inputString !== '') {
    setVariableDataArray([
      ...variableDataArray,
      { inputString, variableData: variableDatas },
    ]);
  }
},[variableData, inputString, variableDatas])

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
            key={index}
            inputString={item.inputString}
            variableData={item.variableData}
          />
        ))
        }
      </div>

      {/* input  */}
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

        <div className='flex ml-[310px] mt-[10px]'>
          <input className='border border-[#3B82F6] w-[716px] h-[54px] rounded-[10px]' 
          type="text" 
          placeholder='    추천을 원하는 "변수"명만 입력해 보세요...'
          value={inputValues}
          onChange={handleInputChange}/>
          <button 
          className='bg-[#3B82F6] text-white w-[124px] h-[54px] ml-[17px] rounded-[10px]'
          onClick={sendButton}>Send</button>
        </div>
    </div>
  )
}
