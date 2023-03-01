import { configureStore } from '@reduxjs/toolkit'

import categorysSlice from './reducers/categorys'
import itensSlice from './reducers/itens'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: {
    categorys: categorysSlice,
    itens: itensSlice,
  },
})

export default store
