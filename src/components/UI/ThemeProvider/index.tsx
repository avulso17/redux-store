import { Toaster } from 'react-hot-toast'

import { ThemeProvider as StyledProvider } from 'styled-components'

import { useBrowserLayoutEffect } from '@/hooks/useBrowserLayoutEffect'
import { useAppDispatch, useAppSelector } from '@/hooks/useType'
import { toggleTheme } from '@/store/reducers/theme'
import { darkTheme, lightTheme } from '@/styles/theme'

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(({ theme }) => theme)

  useBrowserLayoutEffect(() => {
    const preferredTheme = localStorage.getItem('preferredTheme')
    if (preferredTheme === theme) return
    void dispatch(toggleTheme(preferredTheme))
  }, [])

  return (
    <StyledProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      {children}

      <Toaster
        position='top-center'
        toastOptions={{
          style: {
            backgroundColor: theme === 'dark' ? '#212121' : '#fff',
            color: theme === 'dark' ? '#fff' : '#212121',
            fontFamily: 'Roboto',
            fontSize: '1.6rem',
          },
        }}
      />
    </StyledProvider>
  )
}
