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

export const ButtonGroup = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: absolute;
  bottom: 1.6rem;
  height: fit-content;
  width: fit-content;

  > div {
    align-items: center;
    display: flex;
    gap: 0.8rem;
  }
`
