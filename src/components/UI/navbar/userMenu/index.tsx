import { memo } from 'react'

import { useWindowSize } from 'usehooks-ts'

import { Avatar } from '@/components/designSystem/avatar'
import { Skeleton } from '@/components/designSystem/skeleton'
import { useAppSelector } from '@/hooks/useType'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import { DropdownUser } from './dropdownUser'
import { Container, DropdownButton, UserContent } from './styles'

export const UserMenu = memo(function UserMenu(): JSX.Element {
  const { width } = useWindowSize()
  const { user } = useAppSelector(({ auth }) => ({
    user: auth.user,
  }))

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
            {/* <h2>{user?.name ?? <Skeleton />}</h2> */}
            <h2>{'Felipe Mateus' ?? <Skeleton />}</h2>
          </span>

          <div>
            <p>Nivel 23</p>
            <img src='/navbarIcons/medal_icon.svg' alt='Medal' />
          </div>
        </UserContent>
      )}

      {/* <Avatar size='3.2' src={user?.avatar_url} alt={user?.name} /> */}
      <Avatar size='3.2' src={user?.avatar_url} alt={'Felipe Mateus'} />
    </Container>
  )
})
