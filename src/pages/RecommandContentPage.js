import InputInPage from 'components/InputInPage';
import React, { useState } from 'react';

export default function RecommandContent() {
  const languageList = [
    "강의",
    "유튜브",
    "책",
    "블로그",
  ];
  const [inputValues, setInputValues] = useState(''); 
  const [inputString, setInputString] = useState('');


    // 입력 값이 변경될 때 호출되는 함수
    const handleInputChange = (e) => {
      setInputValues(e.target.value);
  };

  const sendButton = () => {
    const input = inputValues
    setInputString(input) // inputString에 호출 string 저장
    console.log("inputString : ",inputString)
  }

  const [placeholder] = useState('    컨텐츠를 추천받고자 하는 기술을 입력하세요.')
  return (
    <div>
      <div>서버와 주고 받는 컴포넌트</div>
      <div>서버 한테 보내는 data 선택</div>
      <InputInPage inputValues={inputValues} handleInputChange={handleInputChange} sendButton={sendButton} placeholder={placeholder}/>
    </div>
  )
}