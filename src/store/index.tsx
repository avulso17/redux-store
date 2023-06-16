import { configureStore } from '@reduxjs/toolkit'

import auth from './reducers/auth'
import cart from './reducers/cart'
import categorys from './reducers/categorys'
import itens from './reducers/itens'
import search from './reducers/search'
import theme from './reducers/theme'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: {
    auth,
    cart,
    categorys,
    itens,
    search,
    theme,
  },
})

export default store
