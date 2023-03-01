import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6.4rem;
  width: fit-content;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    > h1 {
      color: ${({ theme }) => theme.default.primary};
      font-size: 4.8rem;
      font-weight: 700;
      line-height: 5.6rem;
      text-transform: capitalize;
    }

    > p {
      font-size: 1.6rem;
      font-weight: 300;
      line-height: 2.4rem;
      max-width: 30rem;
      width: 100%;
    }
  }

  > span {
    position: relative;
    height: 42.4rem;
    width: 27.4rem;
    z-index: 0;

    > img {
      border-radius: 0.8rem;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    &::after {
      content: '';
      background-color: ${({ theme }) => theme.default.primary};
      border-radius: 100%;
      filter: blur(72px);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 55%;
      width: 55%;
      z-index: -1;
    }
  }
`
