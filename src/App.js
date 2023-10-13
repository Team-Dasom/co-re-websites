import React from 'react';
import Header from './components/Header/Header';
import './style/globals.css';
import Main from './routes/MainPage';
import { RecommandVariableName } from './routes/RecommandVariableNamePage';
import ChangeCodeLanguage from './routes/ChangeCodeLanguagePage';
import { RefactorCode } from './routes/RefactorCodePage';
import { AddComment } from './routes/AddCommentPage';
import { RecommandContent } from './routes/RecommandContentPage';
import { Route, Routes } from 'react-router-dom';
import KakaoRedirect from './components/Login/KakaoRedirect';
import MyPage from './routes/MyPage';

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
