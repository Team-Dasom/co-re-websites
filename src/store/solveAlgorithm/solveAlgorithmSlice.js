import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  conversation: [],
};

const solveAlgorithmSlice = createSlice({
  name: 'changeLanguageReducer',
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

export const { addQuestion, addAnswer } = solveAlgorithmSlice.actions;

export default solveAlgorithmSlice.reducer;
