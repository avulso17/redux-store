import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.default.bgColor};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 4px;
  height: 40px;
  min-width: 188px;
`

export const DropdownButton = styled.button`
  background-color: unset;
  border: none;
  border-radius: 4px;
  display: grid;
  place-items: center;
  margin: auto 0;
  margin-left: 4px;
  transition: background-color ${({ theme }) => theme.transition.default};
  height: 24px;
  width: 24px;

  > img {
    object-fit: contain;
    height: 5px;
    width: 10px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.default.hoverAlpha};
  }
`

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  max-width: 98px;

  > span {
    display: flex;
    align-items: center;
    height: 16px;
    width: 100%;

    > h2 {
      color: ${({ theme }) => theme.default.text};
      font-size: 1.2rem;
      font-weight: 700;
      overflow: hidden;
      text-align: end;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: fit-content;
      width: 98px;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;
    height: 16px;
    width: 100%;

    > p {
      color: ${({ theme }) => theme.default.text};
      font-size: 1rem;
      font-weight: 300;
    }

    > img {
      object-fit: contain;
      height: 14px;
      width: 12px;
    }
  }
`
