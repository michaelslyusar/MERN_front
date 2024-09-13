import { createSlice } from '@reduxjs/toolkit';

const initialState = {userId:""};

const alertSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set_alert: (state, action) => {
      console.log(action);
      return [...state, action];
    },
    remove_alert: (state, action) =>
      state.filter((alert) => alert.id !== action.payload),
  },
});

export const { set_alert, remove_alert } = alertSlice.actions;

export default alertSlice.reducer;