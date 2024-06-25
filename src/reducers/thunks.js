import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveCharacter, loadCharacter } from '../api';

export const saveCharacterData = createAsyncThunk(
  'character/save',
  async (character, { rejectWithValue }) => {
    try {
      const response = await saveCharacter(character);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loadCharacterData = createAsyncThunk(
  'character/load',
  async (_, { rejectWithValue }) => {
    try {
      const response = await loadCharacter();
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
