import { configureStore} from '@reduxjs/toolkit';
import userSlice from 'store/KakaoLogin/kakaoUserSlice';

const store =  configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;