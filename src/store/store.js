import { configureStore } from '@reduxjs/toolkit';
import selectMenuSlice from './slices/selectMenuSlice';

export default configureStore({
  reducer: {
    selectMenu: selectMenuSlice,
  },
});