import styled from 'styled-components'

export const Container = styled.div`
  background-color: unset;
  display: grid;
  grid-template-areas:
    'nav'
    'content';
  grid-template-rows: ${({ theme }) => theme.sizes.navHeight} 1fr;
  grid-template-columns: 1fr;
  overflow: hidden;
  height: 100vh;
  height: 100svh;
  width: 100vw;

  @media ${({ theme }) => theme.breakpoint.mobile} {
    grid-template-areas:
      'nav'
      'content';
    grid-template-rows: ${({ theme }) => theme.sizes.navHeight} 1fr;
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
