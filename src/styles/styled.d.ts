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
interface IAliases {
  bgColor: string
  contrastColor: string
  hoverAlpha: string
  primary: string
  scroll: string
  secondary: string
  selection: string
  text: string
  textAlpha: string
  textContrast: string
  thumb: string
  thumbHover: string
}

interface ISpace {
  1: string
  '1-5': string
  10: string
  11: string
  12: string
  14: string
  16: string
  2: string
  '2-5': string
  20: string
  24: string
  28: string
  3: string
  '3-5': string
  32: string
  36: string
  4: string
  40: string
  44: string
  5: string
  6: string
  7: string
  8: string
  9: string
  auto: string
}
interface IFonts {
  inter: string
  roboto: string
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
  sidebarWidth: string
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
  colors: IColors
  fontSize: IFontSize
  fonts: IFonts
  lineHeights: ILineHeight
  radii: IRadii
  sizes: ISizes
  space: ISpaces
  transition: ITransition
}
declare module 'styled-components' {
  export interface DefaultTheme extends IBaseConfig {
    aliases: IAliases
  }
}
