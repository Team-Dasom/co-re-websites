import { configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/es/storage/session';
import { combineReducers } from 'redux';
import { persistReducer, persistStore} from 'redux-persist';
import userSlice from 'store/KakaoLogin/kakaoUserSlice';
import tokenReducer from 'store/KakaoLogin/tokenSlice';
import statusReducer from './KakaoLogin/statusSlice';
import changeLanguageSlice from 'store/changeLanguage/changeLanguageSlice';
import variebleNameSlice from 'store/variebleName/variebleNameSlice';
import addCommentSlice from './addComment/addCommentSlice';
import refactorCodeSlice from './refactorCode/refactorCodeSlice';

const reducers = combineReducers({
  user: userSlice,
  token: tokenReducer,
  status: statusReducer,
  changeLanguage: changeLanguageSlice,
  variebleName: variebleNameSlice,
  addComment: addCommentSlice,
  refactorCode: refactorCodeSlice
});

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user', 'status', 'token', 'variebleName', 'changeLanguage', 'addComment', 'refactorCode']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;