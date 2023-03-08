import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
});
