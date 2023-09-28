import { configureStore, createSlice } from '@reduxjs/toolkit';

const a = createSlice({
  name: 'a',
  initialState: 'test',
  reducers: {
  	test(state, action) {
    }
  }
})

export default configureStore({
  reducer: {
  	a: a.reducer
  },
});