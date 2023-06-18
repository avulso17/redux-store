import styled from 'styled-components'

import { Root } from '@radix-ui/react-separator'

export const SeparatorRoot = styled(Root)`
  background-color: ${({ color }) => color};

  &[data-orientation='horizontal'] {
    min-height: 1px;
    height: 1px;
    width: 100%;
  }

  &[data-orientation='vertical'] {
    height: 100%;
    min-width: 1px;
    width: 1px;
  }
`
