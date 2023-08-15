import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.header)`
  display: flex;
  align-items: center;
  gap: 16rem;
  margin: 0 auto;
  width: fit-content;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    flex-direction: column;
    gap: 2.8rem;
    padding-top: 1.6rem;
  }
`

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    gap: 1rem;
    order: 2;
    text-align: center;
  }

  > h1 {
    color: ${({ theme }) => theme.aliases.primary};
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 5.6rem;
    text-transform: capitalize;
  }

  > p {
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 2.4rem;
    max-width: 36rem;
    width: 100%;

    @media ${({ theme }) => theme.breakpoint.tablet} {
      max-width: 28rem;
    }
  }
`

export const ImageContainer = styled.span`
  position: relative;
  height: 38.4rem;
  width: fit-content;
  z-index: 0;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    order: 1;
    height: 19.6rem;
  }

  > img {
    filter: contrast(1.2) brightness(0.8) grayscale(0.5);
    object-fit: cover;
    height: 100%;
  }

  &::after {
    content: '';
    background-color: ${({ theme }) => theme.aliases.primary};
    border-radius: 100%;
    filter: blur(72px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 19.6rem;
    width: 19.6rem;
    z-index: -1;

    @media ${({ theme }) => theme.breakpoint.tablet} {
      filter: blur(38px);
      height: 10.6rem;
      width: 10.6rem;
    }
  }
`
