import { SeparatorRoot } from './styles'

interface ISeparatorProps {
  color?: string
  orientation?: 'horizontal' | 'vertical'
  style?: React.CSSProperties
}

export function Separator({
  color = '#339152',
  orientation,
  ...props
}: ISeparatorProps): JSX.Element {
  return <SeparatorRoot orientation={orientation} color={color} {...props} />
}
