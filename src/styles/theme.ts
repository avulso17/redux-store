import type { DefaultTheme as IDefaultTheme } from 'styled-components'

import { colors } from './colors'

export const lightTheme: IDefaultTheme = {
  colors: {
    ...colors,
    orange: '#FF7F2F',
    gray: '#7D868C ',
    black: '#111820',
    blueDark: '#003B49',
    blueNeutral: '#50748A',
    blueMiddle: '#0055B8',
    blueLight: '#61B4E4',
    greenDark: '#42683C',
    greenLight: '#7A9C49',
    red: '#EB0029',
    red_dark: '#703331',
  },
  default: {
    bgColor: '#E1F5FE',
    contrastColor: '#FFFFFF',
    forecastGradient:
      'linear-gradient(257.83deg, #BAE9FF 2.16%, #FFFFFF 99.55%)',
    hoverAlpha: 'rgba(255, 167, 38, 0.1)',
    primary: '#FF7F2F',
    scroll: 'unset',
    selection: '#E76D1D',
    text: '#333333',
    textAlpha: 'rgba(0, 0, 0, 0.5)',
    textContrast: '#FFFFFF',
    thumb: '#E76D1D',
    thumbHover: '#E65100',
  },
  transition: {
    default: '200ms ease',
    bounce: '375ms cubic-bezier(1,.01,.36,1.28)',
    radix: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
  breakpoint: {
    smallMobile: 'only screen and (max-width: 480px)',
    mobile: 'only screen and (max-width: 767px)',
    tablet: 'only screen and (max-width: 1023px)',
    wide: 'only screen and (max-width: 1536px)',
    extraWide: 'only screen and (min-width: 1921px)',
  },
}

export const darkTheme: IDefaultTheme = {
  colors: {
    ...colors,
    orange: '#50c878',
    gray: '#7D868C ',
    black: '#111820',
    blueDark: '#003B49',
    blueNeutral: '#50748A',
    blueMiddle: '#0055B8',
    blueLight: '#61B4E4',
    greenDark: '#42683C',
    greenLight: '#7A9C49',
    red: '#EB0029',
    red_dark: '#703331',
  },
  default: {
    bgColor: '#2A2A2A',
    contrastColor: '#202020',
    forecastGradient:
      'linear-gradient(257.83deg, #BAE9FF 2.16%, #FFFFFF 99.55%)',
    hoverAlpha: 'rgba(80, 200, 120, 0.1)',
    primary: '#50c878',
    scroll: 'unset',
    selection: '#339152',
    text: '#E0E1E2',
    textAlpha: '#797979',
    textContrast: '#202020',
    thumb: '#50c878',
    thumbHover: '#339152',
  },
  transition: {
    default: '200ms ease',
    bounce: '375ms cubic-bezier(1,.01,.36,1.28)',
    radix: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
  breakpoint: {
    smallMobile: 'only screen and (max-width: 480px)',
    mobile: 'only screen and (max-width: 767px)',
    tablet: 'only screen and (max-width: 1023px)',
    wide: 'only screen and (max-width: 1536px)',
    extraWide: 'only screen and (min-width: 1921px)',
  },
}
