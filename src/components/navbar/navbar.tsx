import Link from 'next/link'
import { useRouter } from 'next/router'

import { useEffect } from 'react'
import { GiShoppingCart } from 'react-icons/gi'
import { SiRedux } from 'react-icons/si'

import { useAppDispatch, useAppSelector } from '@/hooks/useType'
import { changeSearch, resetSearch } from '@/store/reducers/search'
import { HeartFilledIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'

import {
  CartCount,
  Container,
  InputDiv,
  Logo,
  MenuButton,
  RightDiv,
  SearchButton,
  StyledInput,
} from './styles'
import { UserMenu } from './userMenu'

// TODO: Add search function
export function Navbar(): JSX.Element {
  const dispatch = useAppDispatch()
  const { pathname } = useRouter()
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

        <RightDiv>
          <Link href='/favorites'>
            <MenuButton isActive={pathname === '/favorites'}>
              <HeartFilledIcon />
            </MenuButton>
          </Link>

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
