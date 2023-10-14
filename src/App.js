import React from 'react';
import Header from 'components/Header/Header';
import 'style/globals.css';
import Main from 'pages/MainPage';
import { RecommandVariableName } from 'pages/RecommandVariableNamePage';
import ChangeCodeLanguage from 'pages/ChangeCodeLanguagePage';
import { RefactorCode } from 'pages/RefactorCodePage';
import { AddComment } from 'pages/AddCommentPage';
import { RecommandContent } from 'pages/RecommandContentPage';
import { Route, Routes } from 'react-router-dom';
import KakaoRedirect from 'components/Login/KakaoRedirect';
import MyPage from 'pages/MyPage';

export default function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      {/* <Main /> */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='recommand-variable-name' element={<RecommandVariableName />} />
        <Route path='change-language' element={<ChangeCodeLanguage />} />
        <Route path='refactor' element={<RefactorCode />} />
        <Route path='add-comment' element={<AddComment />} />
        <Route path='recommand-content' element={<RecommandContent />} />
        <Route path='kakao/user' element={<KakaoRedirect />} />
        <Route path='mypage' element={<MyPage />} />
      </Routes>
    </div>
  );
}
