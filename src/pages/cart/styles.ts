import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.default.contrastColor};
  border-radius: 0.8rem;
  display: flex;
  gap: 1.6rem;
  padding: 1.6rem;
  height: 100%;
  width: 100%;
`

export const CartContent = styled.div`
  background-color: ${({ theme }) => theme.default.bgColor};
  border-radius: 0.6rem;
  overflow-x: hidden;
  padding: 3.2rem;
  height: 100%;
  width: 100%;
`

export const ResumeSection = styled.div`
  background-color: ${({ theme }) => theme.default.bgColor};
  border-radius: 0.6rem;
  padding: 3.2rem 3.2rem 2.4rem;
  height: fit-content;
  min-width: 31.2rem;
  width: 31.2rem;

  > h2 {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.4rem;
    margin-bottom: 3.2rem;
    text-transform: uppercase;

    > svg {
      color: ${({ theme }) => theme.default.primary};
      height: 1.6rem;
      width: 1.6rem;
    }
  }
`
