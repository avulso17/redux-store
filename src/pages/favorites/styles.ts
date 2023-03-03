import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.default.contrastColor};
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  height: 100%;
  width: 100%;
`
