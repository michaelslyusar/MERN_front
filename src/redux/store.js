import {configureStore} from '@reduxjs/toolkit';
import alertReducer from './alert/alertSlice';
import userReducer from './user/userSlice';


export const store = configureStore({
    reducer:{
        alert:alertReducer,
        user:userReducer
},})

export const RootState = store.getState;
export const AppDispatch = store.dispatch;