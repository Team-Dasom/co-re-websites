import { configureStore} from '@reduxjs/toolkit';
import userSlice from 'store/KakaoLogin/kakaoUserSlice';
import changeLanguageSlice from 'store/changeLanguage/changeLanguageSlice';

const store =  configureStore({
  reducer: {
    user: userSlice,
    changeLanguage: changeLanguageSlice
  },
});

export default store;