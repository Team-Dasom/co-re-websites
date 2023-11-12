import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import userSlice from 'store/KakaoLogin/kakaoUserSlice';
import tokenReducer from 'store/KakaoLogin/tokenSlice';
import statusReducer from './KakaoLogin/statusSlice';
import variebleNameSlice from 'store/variebleName/variebleNameSlice';
import addCommentSlice from './addComment/addCommentSlice';
import refactorCodeSlice from './refactorCode/refactorCodeSlice';
import solveAlgorithmSlice from './solveAlgorithm/solveAlgorithmSlice';

const reducers = combineReducers({
  user: userSlice,
  token: tokenReducer,
  status: statusReducer,
  solveAlgorithm: solveAlgorithmSlice,
  variebleName: variebleNameSlice,
  addComment: addCommentSlice,
  refactorCode: refactorCodeSlice,
});

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user', 'status', 'token', 'variebleName', 'changeLanguage', 'addComment', 'refactorCode'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
