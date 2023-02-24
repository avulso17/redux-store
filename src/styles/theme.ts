import type { DefaultTheme as IDefaultTheme } from 'styled-components'

import { colors } from './colors'

export const DefaultTheme: IDefaultTheme = {
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
    text: '#333333',
    selection: '#E76D1D',
    scroll: 'unset',
    thumb: '#E76D1D',
    thumbHover: '#E65100',
    hoverAlpha: 'rgba(255, 167, 38, 0.1)',
    forecastGradient:
      'linear-gradient(257.83deg, #BAE9FF 2.16%, #FFFFFF 99.55%)',
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
