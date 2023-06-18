import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  place-items: center;
  border-radius: 0.8rem;
  position: relative;
  height: 100%;
  width: 100%;
`

export const Container404 = styled.div`
  background-color: ${({ theme }) => theme.default.contrastColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  height: 100%;
  width: 100%;

  > img {
    object-fit: contain;
    width: 35rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    max-width: 35rem;
    width: 100%;

    > h1 {
      color: #3f3d56;
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 4.4rem;
    }

    > p {
      color: #3f3d56;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2rem;
    }

    > a {
      align-self: center;
      background-color: ${({ theme }) => theme.default.primary};
      border-radius: 0.8rem;
      color: ${({ theme }) => theme.default.contrastColor};
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 1.8rem;
      padding: 1.6rem 2.4rem;
      margin-top: 2rem;

      &:hover {
        background-color: #2f2d40;
      }
    }
  }
`
