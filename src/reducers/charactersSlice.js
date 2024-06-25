import { createSlice } from '@reduxjs/toolkit';
import { saveCharacterData, loadCharacterData } from '../thunks';

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    data: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveCharacterData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveCharacterData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(saveCharacterData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(loadCharacterData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadCharacterData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(loadCharacterData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default charactersSlice.reducer;
