import { useRouter } from 'next/router'

import type { ReactNode } from 'react'
import { IoLanguageOutline } from 'react-icons/io5'

import { useAppDispatch, useAppSelector } from '@/hooks/useType'
import { toggleTheme } from '@/store/reducers/theme'
import type { IUser } from '@/types/auth'
import type { ThemeType } from '@/types/theme'
import {
  Root,
  Trigger,
  Portal,
  RadioGroup,
} from '@radix-ui/react-dropdown-menu'
import {
  AvatarIcon,
  DotFilledIcon,
  EnterIcon,
  ExitIcon,
  GearIcon,
  InfoCircledIcon,
  MoonIcon,
  QuestionMarkCircledIcon,
  SunIcon,
} from '@radix-ui/react-icons'

import {
  MenuArrow,
  MenuContent,
  MenuItem,
  MenuItemIndicator,
  MenuLabel,
  MenuRadioItem,
  MenuSeparator,
  RightSlot,
} from './styles'

interface IDropdownMenuProps {
  align?: 'start' | 'center' | 'end'
  children?: ReactNode
  loop?: boolean
  onOpenChange?: (open: boolean) => void
  open?: boolean
  sideOffset?: number
  trigger?: ReactNode
  user?: IUser
}

export function DropdownUser({
  align = 'center',
  children,
  open,
  onOpenChange,
  sideOffset = 4,
  loop = false,
  user,
}: IDropdownMenuProps): JSX.Element {
  const theme = useAppSelector(({ theme }) => theme)
  const dispatch = useAppDispatch()
  const router = useRouter()
  function handleRedirectUserPage(): void {
    void router.push(`/${user != null ? 'profile' : 'login'}`)
  }

  const handleTheme = (theme: ThemeType): void => {
    void dispatch(toggleTheme(theme))
  }

  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Trigger asChild>{children}</Trigger>

      <Portal>
        <MenuContent
          align={align}
          loop={loop}
          sideOffset={sideOffset}
          collisionPadding={16}
        >
          <MenuItem
            onClick={() => {
              handleRedirectUserPage()
            }}
          >
            {user != null ? 'Seu perfil' : 'Login'}
            <RightSlot>
              {user != null ? <AvatarIcon /> : <EnterIcon />}
            </RightSlot>
          </MenuItem>

          <MenuItem>
            Idioma: Português
            <RightSlot>
              <IoLanguageOutline fontSize={'1.5rem'} />
            </RightSlot>
          </MenuItem>

          {user != null && (
            <MenuItem>
              Sair
              <RightSlot>
                <ExitIcon />
              </RightSlot>
            </MenuItem>
          )}

          <MenuSeparator />

          <MenuLabel>Theme</MenuLabel>
          <RadioGroup
            value={theme}
            onValueChange={(theme) => {
              handleTheme(theme as ThemeType)
            }}
          >
            <MenuRadioItem value='light'>
              <MenuItemIndicator>
                <DotFilledIcon />
              </MenuItemIndicator>
              Light
              <RightSlot>
                <SunIcon />
              </RightSlot>
            </MenuRadioItem>

            <MenuRadioItem value='dark'>
              <MenuItemIndicator>
                <DotFilledIcon />
              </MenuItemIndicator>
              Dark
              <RightSlot>
                <MoonIcon />
              </RightSlot>
            </MenuRadioItem>
          </RadioGroup>

          <MenuSeparator />

          <MenuItem disabled>
            Configurações
            <RightSlot>
              <GearIcon />
            </RightSlot>
          </MenuItem>

          <MenuSeparator />

          <MenuItem>
            Ajuda
            <RightSlot>
              <QuestionMarkCircledIcon />
            </RightSlot>
          </MenuItem>

          <MenuItem>
            Info
            <RightSlot>
              <InfoCircledIcon />
            </RightSlot>
          </MenuItem>

          <MenuArrow />
        </MenuContent>
      </Portal>
    </Root>
  )
}
