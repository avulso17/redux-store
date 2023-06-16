// import { useEffect, useLayoutEffect } from 'react'
import { Toaster } from 'react-hot-toast'

import { ThemeProvider } from 'styled-components'

import { useAppSelector } from '@/hooks/useType'
// import { toggleTheme } from '@/store/reducers/theme'
import { darkTheme, lightTheme } from '@/styles/theme'

// const useBrowserLayoutEffect =
//   typeof document === 'undefined' ? useEffect : useLayoutEffect

export const ThemeProviderWrapper = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  // const dispatch = useAppDispatch()
  const theme = useAppSelector(({ theme }) => theme)

  // useBrowserLayoutEffect(() => {
  //   const configuredTheme = localStorage.getItem('theme')
  // }, [colorMode])

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
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
    </ThemeProvider>
  )
}
