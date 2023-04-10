import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin: 0 auto;
  height: fit-content;
  max-width: 42.4rem;
  width: 100%;

  > span {
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 3.2rem;
    margin: 0 auto;
  }
`

export const StyledBox = styled.div`
  background-color: ${({ theme }) => theme.default.contrastColor};
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  overflow: hidden;
  padding: 3.2rem;
  position: relative;
  width: 100%;

  &::after {
    content: '';
    background-color: ${({ theme }) => theme.default.primary};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 0.8rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
    gap: 0.8rem;
    margin-top: 0.8rem;
    width: 100%;
  }
`
