import { createSlice } from '@reduxjs/toolkit'

type Theme = 'light' | 'dark'

const initialState: Theme = 'dark'

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toogleTheme: (state) => {
      console.log(state)
    },
  },
})

export const { toogleTheme } = themeSlice.actions

export default themeSlice.reducer
