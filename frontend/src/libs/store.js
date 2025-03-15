import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../slices/cartSlice"
import compareReducer from "../slices/compareSlice"
// import userReducer from "../slices/userSlice"
import wishlistReducer from "../slices/wishlistSlice"
import authReducer from "../slices/authSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    compare: compareReducer,
    //user: userReducer,
    //products: productsReducer,
    auth: authReducer,
    //otp: otpReducer,
  },
})