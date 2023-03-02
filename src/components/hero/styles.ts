import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 16rem;
  margin: 0 auto;
  width: fit-content;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    > h1 {
      color: ${({ theme }) => theme.default.primary};
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
    }
  }

  > span {
    position: relative;
    height: 38.4rem;
    width: fit-content;
    z-index: 0;

    > img {
      filter: contrast(1.2) brightness(0.8) grayscale(0.5);
      object-fit: cover;
      height: 100%;
    }

    &::after {
      content: '';
      background-color: ${({ theme }) => theme.default.primary};
      border-radius: 100%;
      filter: blur(72px);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 19.6rem;
      width: 19.6rem;
      z-index: -1;
    }
  }
`
