import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.default.bgColor};
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  outline: 2px solid transparent;
  padding: 1.2rem;
  transition: outline ${({ theme }) => theme.transition.default};
  width: 33.6rem;

  > img {
    background-color: #fff;
    border-radius: 0.4rem;
    object-fit: contain;
    height: 20rem;
  }

  &:hover {
    outline: 2px solid ${({ theme }) => theme.default.primary};
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
    color: ${({ theme }) => theme.default.textAlpha};
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
    color: ${({ theme }) => theme.default.primary};
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
