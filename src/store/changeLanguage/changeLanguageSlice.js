import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  conversation: []
};

const changeLanguageSlice = createSlice({
  name: 'changeLanguageReducer',
  initialState,
  reducers: {
    addQuestion: ({ conversation }, action) => {
      conversation.push({ text: action.payload, id: Date.now(), isAnswer: false });
    },
    addAnswer: ({ conversation }, action) => {
      conversation.push({text: action.payload, id: Date.now(), isAnswer: true});
    }
  },
});

export const { addQuestion, addAnswer } = changeLanguageSlice.actions;

export default changeLanguageSlice.reducer;
