import Link from 'next/link'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { GiShoppingCart } from 'react-icons/gi'

import {
  GearIcon,
  HeartFilledIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircledIcon,
} from '@radix-ui/react-icons'

import {
  CartButton,
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
  const [search, setSearch] = useState<string>('')

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearch(e.target.value)
  }

  return (
    <>
      <Container>
        <Link href={'/'}>
          <Logo src={'/logos/zeus_logo_orange.svg'} alt='Zeus' />
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
          <MenuButton
            onClick={() =>
              toast('Falta regra de negócio e UI design.', { icon: '🚧' })
            }
          >
            <HeartFilledIcon />
          </MenuButton>
          <CartButton
            onClick={() =>
              toast('Falta regra de negócio e UI design.', { icon: '🚧' })
            }
          >
            <GiShoppingCart />
          </CartButton>

          <UserMenu />
        </RightDiv>
      </Container>
    </>
  )
}
