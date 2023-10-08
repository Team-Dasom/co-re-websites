import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SELECTED: [0, 0, 0, 0, 0]
}

const selectMenuSlice = createSlice({
  name: "selectMenu",
  initialState,
  reducers: {
    VARIABLE_NAME: (state) => {
      state.SELECTED = [1, 0, 0, 0, 0]
    },
    CHANGE_LANGUAGE: (state) => {
      state.SELECTED = [0, 1, 0, 0, 0]
    },
    REFACTOR_CODE: (state) => {
      state.SELECTED = [0, 0, 1, 0, 0]
    },
    ADD_COMMENT: (state) => {
      state.SELECTED = [0, 0, 0, 1, 0]
    },
    RECOMMAND_CONTENT: (state) => {
      state.SELECTED = [0, 0, 0, 0, 1]
    }
  }
})

export const { VARIABLE_NAME, CHANGE_LANGUAGE, REFACTOR_CODE, RECOMMAND_CONTENT, ADD_COMMENT } = selectMenuSlice.actions;

export default selectMenuSlice.reducer;