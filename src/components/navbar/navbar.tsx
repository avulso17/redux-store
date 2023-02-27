import Link from 'next/link'

import { useState } from 'react'
import { toast } from 'react-hot-toast'

import { TunePopover } from './popover'
import {
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
            <img src={'/navbarIcons/search_icon.svg'} alt='Pesquisar' />
          </SearchButton>
          <StyledInput
            placeholder={'Pesquisar'}
            type='text'
            name='search'
            value={search}
            onChange={(e) => {
              handleSearch(e)
            }}
          />
          <TunePopover />
        </InputDiv>

        <RightDiv>
          <MenuButton
            onClick={() =>
              toast('Falta regra de negócio e UI design.', { icon: '🚧' })
            }
          >
            <img src='/navbarIcons/config_icon.svg' alt='Configuração' />
          </MenuButton>
          <MenuButton
            onClick={() =>
              toast('Falta regra de negócio e UI design.', { icon: '🚧' })
            }
          >
            <img src='/navbarIcons/help_circle_icon.svg' alt='Help' />
          </MenuButton>

          <UserMenu />
        </RightDiv>
      </Container>
    </>
  )
}
