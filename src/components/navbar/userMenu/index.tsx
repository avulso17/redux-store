import { useWindowSize } from 'usehooks-ts'

import { Avatar } from '@/components/avatar/avatar'
import { Skeleton } from '@/components/skeleton/skeleton'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import { DropdownUser } from './dropdownUser'
import { Container, DropdownButton, UserContent } from './styles'

export function UserMenu(): JSX.Element {
  const { width } = useWindowSize()

  return (
    <Container>
      <DropdownUser>
        <DropdownButton aria-label='User options'>
          {width > 768 ? (
            <img src='/navbarIcons/arrow_dropdown_icon.svg' alt='↓' />
          ) : (
            <HamburgerMenuIcon />
          )}
        </DropdownButton>
      </DropdownUser>

      {width > 768 && (
        <UserContent>
          <span>
            <h2>{'Felipe Mateus' ?? <Skeleton />}</h2>
          </span>

          <div>
            <p>Nivel 23</p>
            <img src='/navbarIcons/medal_icon.svg' alt='Medal' />
          </div>
        </UserContent>
      )}

      <Avatar size='3.2' src={'/imgs/me.jpeg'} alt={'Luis Felipe'} />
    </Container>
  )
}
