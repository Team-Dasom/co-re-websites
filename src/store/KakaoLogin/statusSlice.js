import { createSlice } from '@reduxjs/toolkit';

const statusSlice = createSlice({
  name: 'status',
  initialState: {
    value: null, // 초기값은 null로 설정합니다.
  },
  reducers: {
    setStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setStatus } = statusSlice.actions;

export const selectStatus = (state) => state.status.value;

export default statusSlice.reducer;