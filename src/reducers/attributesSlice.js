import { createSlice } from '@reduxjs/toolkit';
import { ATTRIBUTE_LIST,INITIAL_ATTRIBUTE_VALUE, INITIAL_TOTAL_ALL_ATTRIBUTES, MAX_ATTRIBUTE_TOTAL, MAX_ATTRIBUTE_VALUE } from '../consts';

const initialState = ATTRIBUTE_LIST.reduce((acc, attribute) => {
  acc[attribute] = INITIAL_ATTRIBUTE_VALUE;
  return acc;
}, { total: INITIAL_TOTAL_ALL_ATTRIBUTES }); // Initial total for all attributes

const attributesSlice = createSlice({
  name: 'attributes',
  initialState,
  reducers: {
    increment: (state, action) => {
      const { attribute } = action.payload;
      if (state.total < MAX_ATTRIBUTE_TOTAL && state[attribute] < MAX_ATTRIBUTE_VALUE) {
        state[attribute]++;
        state.total++;
      }
    },
    decrement: (state, action) => {
      const { attribute } = action.payload;
      if (state[attribute] > 0) {
        state[attribute]--;
        state.total--;
      }
    },
  },
});

export const { increment, decrement } = attributesSlice.actions;
export default attributesSlice.reducer;
