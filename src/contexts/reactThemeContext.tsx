import { createContext, useContext } from 'react'

export const ThemeContext = createContext({})

export function useTheme(): any {
  return useContext(ThemeContext)
}
