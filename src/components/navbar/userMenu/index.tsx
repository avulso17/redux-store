import { Avatar } from '@/components/avatar/avatar'
import { DropdownMenu } from '@/components/dropdownMenu'
import { Skeleton } from '@/components/skeleton/skeleton'

import { Container, DropdownButton, UserContent } from './styles'

export function UserMenu(): JSX.Element {
  return (
    <Container>
      <DropdownMenu>
        <DropdownButton aria-label='User options'>
          <img src='/navbarIcons/arrow_dropdown_icon.svg' alt='↓' />
        </DropdownButton>
      </DropdownMenu>

      <UserContent>
        <span>
          <h2>
            {'Felipe Mateus' ?? (
              <Skeleton baseColor='#fff' highlightColor='#BAE9FF' />
            )}
          </h2>
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
