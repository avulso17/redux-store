import { useMemo } from 'react'
import { Toaster } from 'react-hot-toast'

import { ThemeProvider as StyledProvider } from 'styled-components'

import { useDispatch, useSelector } from '@/hooks/redux'
import { useBrowserLayoutEffect } from '@/hooks/useBrowserLayoutEffect'
import { toggleTheme } from '@/store/reducers/theme'
import { darkTheme, lightTheme } from '@/styles/theme'

import '@fontsource-variable/inter'

import '@fontsource/roboto'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const dispatch = useDispatch()
  const theme = useSelector(({ theme }) => theme)

  const currentTheme = useMemo(() => {
    return theme === 'dark' ? darkTheme : lightTheme
  }, [theme])

  useBrowserLayoutEffect(() => {
    const preferredTheme = localStorage.getItem('preferredTheme')
    if (preferredTheme === null || preferredTheme === theme) return
    void dispatch(toggleTheme(preferredTheme))
  }, [])

  // useIsomorphicLayoutEffect(() => {
  //   defineElement(lottie.loadAnimation)
  // }, [])

  return (
    <StyledProvider theme={currentTheme}>
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
