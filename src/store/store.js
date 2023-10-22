import { configureStore} from '@reduxjs/toolkit';
import userSlice from 'store/KakaoLogin/kakaoUserSlice';
import tokenReducer from 'store/KakaoLogin/tokenSlice';
import statusReducer from './KakaoLogin/statusSlice';


const store =  configureStore({
  reducer: {
    user: userSlice,
    token: tokenReducer,
    status: statusReducer,
  },
});

export default store;