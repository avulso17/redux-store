import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.default.contrastColor};
  border-radius: 0.8rem;
  display: flex;
  gap: 1.6rem;
  padding: 1.6rem;
  height: 100%;
  width: 100%;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    flex-direction: column;
    height: auto;
  }

  @media ${({ theme }) => theme.breakpoint.mobile} {
    border-radius: 0;
  }

  @media ${({ theme }) => theme.breakpoint.smallMobile} {
    padding: 1.6rem 0;
  }
`

export const CartContent = styled.div`
  background-color: ${({ theme }) => theme.default.bgColor};
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  overflow: hidden;
  padding: 1.6rem;
  height: 100%;
  width: 100%;

  @media ${({ theme }) => theme.breakpoint.smallMobile} {
    border-radius: unset;
  }
`

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.6rem;
  height: fit-content;
  width: 100%;

  > svg {
    color: ${({ theme }) => theme.default.primary};
    height: 1.8rem;
    width: 1.8rem;
  }

  > h2 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.4rem;
    text-transform: uppercase;
  }

  > button {
    background: unset;
    border: 1px solid ${({ theme }) => theme.default.primary};
    border-radius: 0.6rem;
    color: ${({ theme }) => theme.default.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.6rem;
    padding: 0.8rem;
    margin-left: auto;
    transition: all ${({ theme }) => theme.transition.default};
    height: fit-content;

    > svg {
      color: inherit;
      height: 1.6rem;
      width: 1.6rem;
    }

    > span {
      margin-left: -0.4rem;

      @media ${({ theme }) => theme.breakpoint.smallMobile} {
        display: none;
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.default.primary};
      color: ${({ theme }) => theme.default.textContrast};
    }
  }
`

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  overflow-x: hidden;
  padding: 0.1rem;
  padding-right: 0.8rem;
  width: 100%;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    padding-right: unset;
  }
`

export const CartNoItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 3.2rem;
  width: 100%;

  > b {
    font-size: 2.4rem;
    line-height: 3.4rem;
  }

  > p {
    color: ${({ theme }) => theme.default.textAlpha};
    font-size: 1.4rem;
    line-height: 2.4rem;
  }

  button {
    text-transform: uppercase;
    margin-top: 1.6rem;
  }
`

export const ResumeSection = styled.div`
  background-color: ${({ theme }) => theme.default.bgColor};
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 3.2rem 3.2rem 2.4rem;
  height: fit-content;
  min-width: 31.2rem;
  width: 31.2rem;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    width: 100%;
  }

  @media ${({ theme }) => theme.breakpoint.smallMobile} {
    border-radius: unset;
  }

  > button {
    text-transform: uppercase;
    white-space: nowrap;
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;

    > p {
      color: ${({ theme }) => theme.default.textAlpha};
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.8rem;
      padding: 0.8rem;

      > b {
        color: ${({ theme }) => theme.default.text};
        font-size: 1.6rem;
        line-height: 2.8rem;
        font-weight: 700;
      }
    }
  }
`
