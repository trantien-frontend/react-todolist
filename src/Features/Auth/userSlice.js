import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import { storageKey } from 'constants/storage-key';

export const register = createAsyncThunk('user/register', async (payload) => {
  // call apis to register
  const data = await userApi.register(payload);
  // save data to localStorage
  localStorage.setItem(storageKey.USER, JSON.stringify(data.user));
  localStorage.setItem(storageKey.TOKEN, data.jwt);

  return data.user;
});

export const login = createAsyncThunk('user/login', async (payload) => {
  // call apis to register
  const data = await userApi.login(payload);
  // save data to localStorage
  localStorage.setItem(storageKey.USER, JSON.stringify(data.user));
  localStorage.setItem(storageKey.TOKEN, data.jwt);

  return data.user;
});

// Step-1: Create-slice chứa action và reducer
const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(storageKey.USER)) || {},
    setting: {},
  },
  reducers: {
    logout(state, action) {
      // Clear localStorage
      localStorage.removeItem(storageKey.USER);
      localStorage.removeItem(storageKey.TOKEN);
      state.current = {};
    },
  },

  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;

export default reducer;
