import { configureStore} from '@reduxjs/toolkit';
import userSlice from './KakaoLogin/kakaoUserSlice';

const store =  configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;