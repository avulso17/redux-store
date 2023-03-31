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

export const ButtonGroup = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: absolute;
  top: 1.6rem;
  height: fit-content;

  > div {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    justify-content: center;
  }
`
