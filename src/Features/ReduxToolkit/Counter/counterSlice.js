import { createSlice } from '@reduxjs/toolkit';

// Step-1: Create-slice chứa action và reducer
const countSlice = createSlice({
  name: 'counter',

  initialState: 0,

  reducers: {
    increase(state) {
      return state + 1;
    },
    decrease(state) {
      return state - 1;
    },
  },
});

const { actions, reducer } = countSlice;
export const { increase, decrease } = actions;
export default reducer;
