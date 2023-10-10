import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KakaoRedirect from './components/Login/KakaoRedirect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/kakao/user' element={<KakaoRedirect />} />
        </Routes>
      </BrowserRouter>
    </Provider>,
);
