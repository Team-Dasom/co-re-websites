import { configureStore} from '@reduxjs/toolkit';
import userSlice from 'store/KakaoLogin/kakaoUserSlice';
import tokenReducer from 'store/KakaoLogin/tokenSlice';
import statusReducer from './KakaoLogin/statusSlice';
import changeLanguageSlice from 'store/changeLanguage/changeLanguageSlice';
import variebleNameSlice from 'store/variebleName/variebleNameSlice';
import addCommentSlice from './addComment/addCommentSlice';

const store =  configureStore({
  reducer: {
    user: userSlice,
    token: tokenReducer,
    status: statusReducer,
    changeLanguage: changeLanguageSlice,
    variebleName: variebleNameSlice,
    addComment: addCommentSlice
  },
});

export default store;