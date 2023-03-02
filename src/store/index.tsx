import { configureStore } from '@reduxjs/toolkit'

import cartSlice from './reducers/cart'
import categorysSlice from './reducers/categorys'
import itensSlice from './reducers/itens'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: {
    categorys: categorysSlice,
    itens: itensSlice,
    cart: cartSlice,
  },
})

export default store
