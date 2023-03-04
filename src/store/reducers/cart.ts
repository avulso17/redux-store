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

    changeQuantity: (state, { payload }) => {
      state = state.map((item) => {
        if (item.id === payload.id) {
          item.quantity += payload.quantity
        }

        return item
      })
    },
  },
})

export const { changeCart, changeQuantity } = cartSlice.actions

export default cartSlice.reducer
