import { memo } from 'react'

import { Avatar } from '@/components/designSystem/avatar'
import { Skeleton } from '@/components/designSystem/skeleton'
import { useSelector } from '@/hooks/redux'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import { DropdownUser } from './dropdownUser'
import { Container, DropdownButton, UserContent } from './styles'

export const UserMenu = memo(function UserMenu(): JSX.Element {
  const { user } = useSelector(({ auth }) => ({
    user: auth.user,
  }))

  return (
    <Container>
      <DropdownUser>
        <DropdownButton aria-label='User options'>
          <img src='/navbarIcons/arrow_dropdown_icon.svg' alt='↓' />
          <HamburgerMenuIcon />
        </DropdownButton>
      </DropdownUser>

      <UserContent>
        <span>
          {/* <h2>{user?.name ?? <Skeleton />}</h2> */}
          <h2>{'Felipe Mateus' ?? <Skeleton />}</h2>
        </span>

        <div>
          <p>Nivel 23</p>
          <img src='/navbarIcons/medal_icon.svg' alt='Medal' />
        </div>
      </UserContent>

      {/* <Avatar size='3.2' src={user?.avatar_url} alt={user?.name} /> */}
      <Avatar size='3.2' src={user?.avatar_url} alt={'Felipe Mateus'} />
    </Container>
  )
})
