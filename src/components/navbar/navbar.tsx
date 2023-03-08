import Link from 'next/link'
import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'
import { GiShoppingCart } from 'react-icons/gi'
import { SiRedux } from 'react-icons/si'

import { useWindowSize } from 'usehooks-ts'

import { useAppDispatch, useAppSelector } from '@/hooks/useType'
import { changeSearch, resetSearch } from '@/store/reducers/search'
import {
  Cross1Icon,
  HeartFilledIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons'

import {
  CartCount,
  CloseSearchButton,
  Container,
  InputDiv,
  Logo,
  MenuButton,
  MobileSearchButton,
  MobileSearchContainer,
  RightDiv,
  SearchButton,
  StyledInput,
} from './styles'
import { UserMenu } from './userMenu'

export function Navbar(): JSX.Element {
  const dispatch = useAppDispatch()
  const { pathname } = useRouter()
  const { width } = useWindowSize()
  const [searchOpen, setSearchOpen] = useState<boolean>(false)
  const { cartItens, search } = useAppSelector((state) => ({
    cartItens: state.cart.length,
    search: state.search,
  }))

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>): void {
    dispatch(changeSearch(e.target.value))
  }

  useEffect(() => {
    dispatch(resetSearch())
  }, [pathname, dispatch])

  return (
    <>
      <Container>
        <Link href={'/'}>
          <Logo>
            <SiRedux />
            <b>store</b>
          </Logo>
        </Link>

        {width > 768 && (
          <InputDiv>
            <SearchButton type='submit'>
              <MagnifyingGlassIcon />
            </SearchButton>
            <StyledInput
              autoComplete='off'
              placeholder='O que voce procura?'
              type='text'
              name='search'
              value={search}
              onChange={(e) => {
                handleSearch(e)
              }}
            />
          </InputDiv>
        )}

        <RightDiv>
          <Link href='/favorites'>
            <MenuButton isActive={pathname === '/favorites'}>
              <HeartFilledIcon />
            </MenuButton>
          </Link>

          {width < 768 && searchOpen && (
            <MobileSearchContainer>
              <CloseSearchButton
                onClick={() => {
                  setSearchOpen(false)
                }}
              >
                <Cross1Icon />
              </CloseSearchButton>

              <InputDiv>
                <StyledInput
                  autoComplete='off'
                  placeholder='O que voce procura?'
                  type='text'
                  name='search'
                  value={search}
                  onChange={(e) => {
                    handleSearch(e)
                  }}
                />

                <MobileSearchButton type='submit'>
                  <MagnifyingGlassIcon />
                </MobileSearchButton>
              </InputDiv>
            </MobileSearchContainer>
          )}

          {width < 768 && (
            <MobileSearchButton
              onClick={() => {
                setSearchOpen(!searchOpen)
              }}
            >
              <MagnifyingGlassIcon />
            </MobileSearchButton>
          )}

          <Link href='/cart'>
            <MenuButton isActive={pathname === '/cart'}>
              {cartItens > 0 && (
                <CartCount>{cartItens < 10 ? cartItens : '9+'}</CartCount>
              )}
              <GiShoppingCart />
            </MenuButton>
          </Link>

          <UserMenu />
        </RightDiv>
      </Container>
    </>
  )
}
