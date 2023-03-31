import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.default.contrastColor};
  display: grid;
  place-items: center;
  border-radius: 0.8rem;
  position: relative;
  height: 100%;
  width: 100%;
`
