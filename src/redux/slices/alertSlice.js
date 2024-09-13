import { createSlice } from '@reduxjs/toolkit';

const initialState = [];


const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    set_alert: (state, action) => {
      console.log(action);
      return [...state, action];
    },
    remove_alert: (state, action) =>
      state.filter((alert) => alert.payload.id !== action.payload.id)
  },
});

export const { set_alert, remove_alert } = alertSlice.actions;

export default alertSlice.reducer;








