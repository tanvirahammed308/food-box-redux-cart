
import { configureStore } from '@reduxjs/toolkit'
import  cartReducer  from './cartSlice'
import  categoryReducer  from './categorySlice'
import  searchReducer  from './searchSlice'


export const store = configureStore({
  reducer: {
    cart:cartReducer,
    category:categoryReducer,
    search:searchReducer
  },
})