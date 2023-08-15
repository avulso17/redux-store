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
  background-color: ${({ theme }) => theme.aliases.contrastColor};
  border-radius: 0.8rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  overflow: hidden;
  padding: 3.2rem;
  position: relative;
  width: 100%;

  &::after {
    content: '';
    background-color: ${({ theme }) => theme.aliases.primary};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 0.8rem;
  }

  > span {
    font-size: 1.4rem;
    font-weight: 300;
    margin: 0 auto;

    > a {
      color: ${({ theme }) => theme.aliases.primary};
      font-weight: 500;
    }
  }
`
