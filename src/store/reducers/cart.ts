import { createSlice } from '@reduxjs/toolkit'

const initialState: any[] = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeCart: (state, { payload }) => {
      const hasItem = state.some((item) => item.id === payload)

      if (!hasItem) {
        return [...state, { id: payload, quantity: 1 }]
      }

      return state.filter((item) => item.id !== payload)
    },
  },
})

export const { changeCart } = cartSlice.actions

export default cartSlice.reducer
