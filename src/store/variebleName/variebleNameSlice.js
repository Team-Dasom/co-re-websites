import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  conversation: [],
};

const variebleNameSlice = createSlice({
  name: 'variebleNameReducer',
  initialState,
  reducers: {
    addQuestion: ({ conversation }, action) => {
      conversation.push({ text: action.payload.content, language: action.payload.language, id: Date.now(), isAnswer: false });
    },
    addAnswer: ({ conversation }, action) => {
      conversation.push({ text: action.payload.content, language: action.payload.language, id: Date.now(), isAnswer: true });
    },
  },
});

export const { addQuestion, addAnswer } = variebleNameSlice.actions;

export default variebleNameSlice.reducer;
