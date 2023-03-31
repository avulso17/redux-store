import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.default.contrastColor};
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  gap: 1.6rem;
  overflow-x: hidden;
  position: relative;
  height: 100%;
  width: 100%;
`
