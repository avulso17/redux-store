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
  height: 100vh;
  width: 100vw;
`

export const ChildrenContent = styled.main`
  background-color: unset;
  display: flex;
  flex-direction: column;
  gap: 16px;
  grid-area: content;
  padding: 16px;
  position: relative;
  overflow: auto;
  height: 100%;
  width: 100%;
`
