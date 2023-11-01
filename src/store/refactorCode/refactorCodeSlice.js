import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  conversation: []
};

const refactorCodeSlice = createSlice({
  name: 'refactorCodeReducer',
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

export const { addQuestion, addAnswer } = refactorCodeSlice.actions;

export default refactorCodeSlice.reducer;
