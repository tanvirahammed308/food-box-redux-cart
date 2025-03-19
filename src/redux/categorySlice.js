
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: "All",
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setSelectedCategory:(state,action)=>{
        state.category=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {setSelectedCategory} = categorySlice.actions

export default categorySlice.reducer