import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerUser = createAsyncThunk(
  'auth/register',
  async credential => {
    try {
      const { data } = await axios.post('/users/signup', credential);
      return data;
    } catch (error) {}
  }
);

export const logInUser = createAsyncThunk('auth/login', async credential => {
  try {
    const { data } = await axios.post('/users/login', credential);
    return data;
  } catch (error) {}
});
