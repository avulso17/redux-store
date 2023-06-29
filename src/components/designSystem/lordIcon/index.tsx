import type { LordIconTrigger } from '@/types/lord'

interface ILordIconColors {
  primary?: string
  secondary?: string
}

interface ILordIconProps {
  className?: string
  colors?: ILordIconColors
  delay?: number
  size?: number
  src: string
  stroke?: string
  target?: string
  trigger?: LordIconTrigger
}

const LordIcon = ({
  colors,
  delay,
  src,
  target,
  trigger,
  stroke,
  size,
  className,
  ...props
}: ILordIconProps): JSX.Element => {
  const primary = colors?.primary ?? '#ffffff'
  const secondary = colors?.secondary ?? '#268409'

  return (
    <lord-icon
      src={src}
      class={className}
      colors={`primary:${primary},secondary:${secondary}`}
      delay={delay}
      trigger={trigger}
      target={target}
      stroke={stroke}
      style={{ width: size, height: size }}
      {...props}
    ></lord-icon>
  )
}

export { LordIcon }
