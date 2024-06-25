import { createSlice } from '@reduxjs/toolkit';
import { SKILL_LIST } from '../consts';

const initialState = SKILL_LIST.reduce((acc, skill) => {
  acc[skill.name] = 0;
  return acc;
}, {});

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    incrementSkill: (state, action) => {
      const { skill } = action?.payload;
      state[skill]++;
    },
    decrementSkill: (state, action) => {
      const { skill } = action?.payload;
      if (state[skill] > 0) {
        state[skill]--;
      }
    },
  },
});

export const { incrementSkill, decrementSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
