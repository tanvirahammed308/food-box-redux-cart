
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  totalCount:0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {

      const existingItem=state.cart.find((item)=>item.id ==action.payload.id)

      if (existingItem) {
        state.cart = state.cart.map(item => 
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }else{
        state.cart.push(action.payload)
      }
      
      
      
    },
    removeFromCart: (state,action) => {
        state.cart=state.cart.filter((item)=>item.id !==action.payload)
      state.totalCount -= 1
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalCount += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalCount -= 1;
      }
    },

    
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart,increaseQuantity,decreaseQuantity } = cartSlice.actions

export default cartSlice.reducer