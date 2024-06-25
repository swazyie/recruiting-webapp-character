import { configureStore } from '@reduxjs/toolkit';
import attributesReducer from './reducers/attributesSlice';
import skillsReducer from './reducers/skillsSlice';

export const store = configureStore({
  reducer: {
    attributes: attributesReducer,
    skills: skillsReducer,
  },
});
