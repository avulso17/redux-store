import { themes } from '@storybook/theming'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from '../src/styles/theme'
import { Provider } from 'react-redux'
import { GlobalStyle } from '../src/styles/global'
import store from '../src/store/store'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
}
export const decorators = [
  (Story) => (
    <Provider store={store}>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    </Provider>
  ),
]
