import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/slice/Authslice';
import cartReducer from "../redux/slice/cartSlice"
export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
