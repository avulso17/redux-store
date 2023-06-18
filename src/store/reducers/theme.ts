import type { ThemeType } from '@/types/theme'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const initialState: ThemeType = 'dark'

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (_state: ThemeType, action: PayloadAction<any>) => {
      const payload = action.payload
      localStorage.setItem('preferredTheme', payload)

      return payload
    },
  },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
