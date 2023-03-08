import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  background-color: unset;
  display: grid;
  grid-template-areas:
    'nav nav nav'
    'sidebar content content';
  grid-template-rows: 56px 1fr;
  grid-template-columns: 72px 1fr;
  overflow: hidden;
  height: 100dvh;
  width: 100vw;

  @media ${({ theme }) => theme.breakpoint.mobile} {
    grid-template-areas:
      'nav'
      'content'
      'sidebar';
    grid-template-rows: 56px 1fr 72px;
    grid-template-columns: 1fr;
  }
`

export const ChildrenContent = styled.main`
  background-color: unset;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  grid-area: content;
  padding: 1.6rem;
  position: relative;
  overflow: auto;
  min-height: 100%;
  width: 100%;

  @media ${({ theme }) => theme.breakpoint.mobile} {
    padding: 0;
  }
`
