import { configureStore } from '@reduxjs/toolkit'

import categorysSlice from './reducers/categorysSlice'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: {
    categorys: categorysSlice,
  },
})

export default store
