/* eslint-disable @typescript-eslint/naming-convention */
import 'styled-components'

interface IColors {
  black: string
  blueDark: string
  blueLight: string
  blueMiddle: string
  blueNeutral: string
  gray: string
  greenDark: string
  greenLight: string
  orange: string
  red: string
  red_dark: string
}

interface IDefault {
  bgColor: string
  contrastColor: string
  forecastGradient: string
  hoverAlpha: string
  scroll: string
  selection: string
  text: string
  thumb: string
  thumbHover: string
}

interface ITransition {
  bounce: string
  default: string
  radix: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoint: {
      extraWide: string
      mobile: string
      smallMobile: string
      tablet: string
      wide: string
    }
    colors: IColors
    default: IDefault
    transition: ITransition
  }
}
