import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    value: null, // 초기값은 null로 설정합니다.
  },
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setToken } = tokenSlice.actions;

export const selectToken = (state) => state.token.value;

export default tokenSlice.reducer;