
import {createSlice } from '@reduxjs/toolkit';

const initialState = {
  profileImage: '',
  nickname: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.profileImage = action.payload.profileImage;
      state.nickname = action.payload.nickname;
    },
  },
});

export const { setUserProfile } = userSlice.actions;

export default userSlice.reducer;