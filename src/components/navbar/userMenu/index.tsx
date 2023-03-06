import { Avatar } from '@/components/avatar/avatar'
import { Skeleton } from '@/components/skeleton/skeleton'

import { DropdownUser } from './dropdownUser'
import { Container, DropdownButton, UserContent } from './styles'

export function UserMenu(): JSX.Element {
  return (
    <Container>
      <DropdownUser>
        <DropdownButton aria-label='User options'>
          <img src='/navbarIcons/arrow_dropdown_icon.svg' alt='↓' />
        </DropdownButton>
      </DropdownUser>

      <UserContent>
        <span>
          <h2>{'Felipe Mateus' ?? <Skeleton />}</h2>
        </span>

        <div>
          <p>Nivel 23</p>
          <img src='/navbarIcons/medal_icon.svg' alt='Medal' />
        </div>
      </UserContent>

      <Avatar size='3.2' src={'/imgs/me.jpeg'} alt={'Luis Felipe'} />
    </Container>
  )
}
