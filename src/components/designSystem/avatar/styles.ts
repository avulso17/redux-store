import styled from 'styled-components'

import { Image, Root, Fallback } from '@radix-ui/react-avatar'

export const AvatarRoot = styled(Root)<{ size: string | number }>`
  background-color: ${({ theme }) => theme.aliases.primary};
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  height: ${({ size }) => `${size}rem`};
  width: ${({ size }) => `${size}rem`};
`

export const AvatarImage = styled(Image)`
  border-radius: inherit;
  object-fit: cover;
  height: 100%;
  width: 100%;
`

export const AvatarFallback = styled(Fallback)`
  background-color: ${({ theme }) => theme.aliases.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  line-height: 1;
  font-weight: 500;
  height: 100%;
  width: 100%;
`
