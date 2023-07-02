import styled from 'styled-components'

import { rotateR } from '@/styles/keyframes'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.default.contrastColor};
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1.6rem;
  width: 100%;
`

export const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.default.bgColor};
  border-radius: 0.6rem;
  padding: 1.6rem 0;
  position: relative;
  height: fit-content;
  width: 100%;
  z-index: 0;

  &::after {
    content: '';
    background-color: ${({ theme }) => theme.default.bgColor};
    background-image: url('/imgs/carbon_hexagonal_background.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-blend-mode: overlay;
    border-radius: 0.6rem;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.08;
    z-index: -1;
  }
`

export const ItensTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
  width: 100%;
`

export const LoadingContainer = styled.div`
  background-color: ${({ theme }) => theme.default.contrastColor};
  border-radius: 0.8rem;
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;

  > svg {
    color: ${({ theme }) => theme.default.primary};
    font-size: 8.2rem;
    animation: ${rotateR} 2.5s linear infinite;
  }
`
