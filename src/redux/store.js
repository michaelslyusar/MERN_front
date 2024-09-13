import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './slices/alertSlice';
import authReducer from './slices/authSlice';
import { apiSlice } from './slices/apiSlice';

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools:true,
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
