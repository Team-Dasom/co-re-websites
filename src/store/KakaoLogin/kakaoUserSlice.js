
import {createSlice } from '@reduxjs/toolkit';

const initialState = {
  profileImage: '',
  nickname: '',
  accessToken: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.profileImage = action.payload.profileImage;
      state.nickname = action.payload.nickname;
    },
    clearUserProfile: (state) => {
      state.profileImage = null;
      state.nickname = null;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    clearAccessToken: (state) => {
      state.accessToken = null;
    },
  },
});

export const { setUserProfile, setAccessToken, clearAccessToken, clearUserProfile } = userSlice.actions;

export default userSlice.reducer;