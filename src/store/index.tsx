import { configureStore } from '@reduxjs/toolkit'

import cartSlice from './reducers/cart'
import categorysSlice from './reducers/categorys'
import itensSlice from './reducers/itens'
import searchSlice from './reducers/search'
import themeSlice from './reducers/theme'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: {
    theme: themeSlice,
    categorys: categorysSlice,
    itens: itensSlice,
    cart: cartSlice,
    search: searchSlice,
  },
})

export default store
