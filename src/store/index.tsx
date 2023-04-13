import { configureStore } from '@reduxjs/toolkit'

import authSlice from './reducers/auth'
import cartSlice from './reducers/cart'
import categorysSlice from './reducers/categorys'
import itensSlice from './reducers/itens'
import searchSlice from './reducers/search'
import themeSlice from './reducers/theme'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    categorys: categorysSlice,
    itens: itensSlice,
    search: searchSlice,
    theme: themeSlice,
  },
})

export default store
