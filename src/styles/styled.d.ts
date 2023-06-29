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
  primary: string
  scroll: string
  selection: string
  text: string
  textAlpha: string
  textContrast: string
  thumb: string
  thumbHover: string
}
interface IFontSize {
  '2xl': string
  '3xl': string
  '4xl': string
  '5xl': string
  '6xl': string
  base: string
  lg: string
  sm: string
  xl: string
  xs: string
}

interface ILineHeight extends IFontSize {}
interface IRadii {
  lg: string
  md: string
  pill: string
  round: string
  sm: string
  xl: string
  xs: string
}
interface ISizes {
  '1/2': string
  '1/4': string
  fit: string
  full: string
  headerHeight: string
  lg: string
  md: string
  navHeight: string
  sideMenuWidth: string
  sm: string
  xl: string
  xs: string
}
interface ITransition {
  bounce: string
  default: string
  radix: string
}
interface IBreakpoint {
  extraWide: string
  mobile: string
  smallMobile: string
  tablet: string
  wide: string
}
export interface IBaseConfig {
  breakpoint: IBreakpoint
  fontSize: IFontSize
  fonts: Record<string, string>
  lineHeights: ILineHeight
  radii: IRadii
  sizes: ISizes
  space: Record<string, string>
  transition: ITransition
}
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoint: IBreakpoint
    colors: IColors
    default: IDefault
    fontSize: IFontSize
    fonts: Record<string, string>
    lineHeights: ILineHeight
    radii: IRadii
    sizes: ISizes
    space: Record<string, string>
    transition: ITransition
  }
}
