import Link from 'next/link'
import { useRouter } from 'next/router'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { GiShoppingCart } from 'react-icons/gi'
import { SiRedux } from 'react-icons/si'

import { useAppSelector } from '@/hooks/useType'
import {
  HeartFilledIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircledIcon,
} from '@radix-ui/react-icons'

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
  const cartItens = useAppSelector((state) => state.cart.length)
  const { pathname } = useRouter()
  const [search, setSearch] = useState<string>('')

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearch(e.target.value)
  }

  return (
    <>
      <Container>
        <Link href={'/'}>
          <Logo>
            <SiRedux />
            store
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
          <MenuButton
            onClick={() =>
              toast('Falta regra de negócio e UI design.', { icon: '🚧' })
            }
          >
            <QuestionMarkCircledIcon />
          </MenuButton>

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
