import Link from 'next/link'
import { useRouter } from 'next/router'

import { useEffect, useState, useMemo, memo } from 'react'
import { GiShoppingCart } from 'react-icons/gi'
import { SiRedux } from 'react-icons/si'

import { useDispatch, useSelector } from '@/hooks/redux'
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

export const Navbar = memo(function Navbar(): JSX.Element {
  const dispatch = useDispatch()
  const { pathname } = useRouter()
  const [searchOpen, setSearchOpen] = useState<boolean>(false)
  const { cartItens, search } = useSelector((state) => ({
    cartItens: state.cart.length,
    search: state.search,
  }))

  useEffect(() => {
    dispatch(resetSearch())
  }, [pathname, dispatch])

  const memoReduxLogo = useMemo(
    () => <img src='/global/logo.svg' alt='Flow store' />,
    []
  )
  const memoSearchIcon = useMemo(() => <MagnifyingGlassIcon />, [])
  const memoCloseSearchIcon = useMemo(() => <Cross1Icon />, [])
  const memoFavoritesIcon = useMemo(() => <HeartFilledIcon />, [])
  const memoCartIcon = useMemo(() => <GiShoppingCart />, [])

  const memoizedSearchInput = useMemo(() => {
    function handleSearch(e: React.ChangeEvent<HTMLInputElement>): void {
      dispatch(changeSearch(e.target.value))
    }

    return (
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
    )
  }, [dispatch, search])

  return (
    <>
      <Container>
        <Logo href={'/'}>{memoReduxLogo}</Logo>

        <InputDiv className='input-div-web'>
          <SearchButton type='submit'>{memoSearchIcon}</SearchButton>
          {memoizedSearchInput}
        </InputDiv>

        <RightDiv>
          <Link href='/favorites'>
            <MenuButton isActive={pathname === '/favorites'}>
              {memoFavoritesIcon}
            </MenuButton>
          </Link>

          {searchOpen && (
            <MobileSearchContainer>
              <CloseSearchButton
                onClick={() => {
                  setSearchOpen(false)
                }}
              >
                {memoCloseSearchIcon}
              </CloseSearchButton>

              <InputDiv>
                {memoizedSearchInput}

                <MobileSearchButton type='submit'>
                  <MagnifyingGlassIcon />
                </MobileSearchButton>
              </InputDiv>
            </MobileSearchContainer>
          )}

          <MobileSearchButton
            onClick={() => {
              setSearchOpen(!searchOpen)
            }}
          >
            {memoSearchIcon}
          </MobileSearchButton>

          <Link href='/cart'>
            <MenuButton isActive={pathname === '/cart'}>
              {cartItens > 0 && (
                <CartCount>{cartItens < 10 ? cartItens : '9+'}</CartCount>
              )}
              {memoCartIcon}
            </MenuButton>
          </Link>

          <UserMenu />
        </RightDiv>
      </Container>
    </>
  )
})
