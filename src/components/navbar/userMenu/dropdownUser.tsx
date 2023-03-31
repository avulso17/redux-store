import Link from 'next/link'

import type { ReactNode } from 'react'
import { IoLanguageOutline } from 'react-icons/io5'
// import { useDarkMode } from 'usehooks-ts'

import { useTheme } from '@/contexts/reactThemeContext'
import {
  Root,
  Trigger,
  Portal,
  RadioGroup,
} from '@radix-ui/react-dropdown-menu'
import {
  AvatarIcon,
  DotFilledIcon,
  ExitIcon,
  GearIcon,
  InfoCircledIcon,
  MoonIcon,
  QuestionMarkCircledIcon,
  RocketIcon,
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
}

export function DropdownUser({
  align = 'center',
  children,
  open,
  onOpenChange,
  sideOffset = 4,
  loop = false,
}: IDropdownMenuProps): JSX.Element {
  // const { isDarkMode, enable, disable } = useDarkMode()
  const { theme, setTheme } = useTheme()

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
          <MenuItem>
            Seu perfil
            <RightSlot>
              <AvatarIcon />
            </RightSlot>
          </MenuItem>

          <MenuItem>
            Idioma: Português
            <RightSlot>
              <IoLanguageOutline fontSize={'1.5rem'} />
            </RightSlot>
          </MenuItem>

          <MenuItem>
            Sair
            <RightSlot>
              <ExitIcon />
            </RightSlot>
          </MenuItem>

          <MenuSeparator />

          <MenuLabel>Theme</MenuLabel>
          <RadioGroup value={theme === 'dark' ? 'dark' : 'light'}>
            <MenuRadioItem onClick={() => setTheme('light')} value='light'>
              <MenuItemIndicator>
                <DotFilledIcon />
              </MenuItemIndicator>
              Light
              <RightSlot>
                <SunIcon />
              </RightSlot>
            </MenuRadioItem>
            <MenuRadioItem onClick={() => setTheme('dark')} value='dark'>
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

          <MenuItem asChild>
            <Link href={'/playground'}>
              Playground
              <RightSlot>
                <RocketIcon />
              </RightSlot>
            </Link>
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
