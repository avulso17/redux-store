import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.aliases.bgColor};
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  outline: 2px solid transparent;
  padding: 1.2rem;
  transition: outline ${({ theme }) => theme.transition.default};
  width: 33.6rem;

  @media ${({ theme }) => theme.breakpoint.mobile} {
    width: 100%;
  }

  > img {
    background-color: #fff;
    border-radius: 0.4rem;
    object-fit: contain;
    height: 20rem;

    @media ${({ theme }) => theme.breakpoint.mobile} {
      height: 25rem;
    }
  }

  &:hover {
    outline: 2px solid ${({ theme }) => theme.aliases.primary};
  }
`

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;

  > h2 {
    font-size: 2rem;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 312px;
  }

  > p {
    color: ${({ theme }) => theme.aliases.textAlpha};
    font-size: 1.6rem;
    overflow: hidden;
    overflow-y: auto;
    height: 80px;
    width: 100%;
  }
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;

  > span {
    color: ${({ theme }) => theme.aliases.primary};
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.8rem;
  }

  > div {
    display: flex;
    gap: 1.6rem;
    width: 100%;

    > button:last-child {
      padding: 0;
      height: 100%;
      min-width: 4.8rem;

      > svg {
        height: 2.4rem;
        width: 2.4rem;
      }
    }
  }
`
