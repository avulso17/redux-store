import styled from 'styled-components'

import { Root } from '@radix-ui/react-separator'

interface ISeparatorProps {
  color?: string
  orientation?: 'horizontal' | 'vertical'
  style?: React.CSSProperties
}

const SeparatorRoot = styled(Root)<ISeparatorProps>`
  background-color: ${({ color }) => color};

  &[data-orientation='horizontal'] {
    height: 1px;
    width: 100%;
  }

  &[data-orientation='vertical'] {
    height: 100%;
    width: 1px;
  }
`

export function Separator({
  color = '#339152',
  orientation,
  ...props
}: ISeparatorProps): JSX.Element {
  return <SeparatorRoot orientation={orientation} color={color} {...props} />
}
