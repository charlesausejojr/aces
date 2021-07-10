import { createSlice } from '@reduxjs/toolkit';

export const questionSlice = createSlice({
  name: 'question',
  initialState: {
    questionId: null,
    questionName: null,
  },
  reducers: {
    setQuestion: (state,action) => {
      state.questionId = action.payload.questionId;
      state.questionName = action.payload.questionName;
    },
  },
});

export const { setQuestion } = questionSlice.actions;

export const selectQuestionId = state => state.question.questionId;
export const selectQuestionName = state => state.question.questionName; 


export default questionSlice.reducer;
