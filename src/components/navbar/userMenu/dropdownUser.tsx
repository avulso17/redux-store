import { useState } from 'react'

import {
  Root,
  Trigger,
  Portal,
  RadioGroup,
  Sub,
} from '@radix-ui/react-dropdown-menu'
import {
  ChevronRightIcon,
  DotFilledIcon,
  MoonIcon,
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
  MenuSubContent,
  MenuSubTrigger,
  RightSlot,
} from './styles'

interface IDropdownMenuProps {
  align?: 'start' | 'center' | 'end'
  children: React.ReactNode
  loop?: boolean
  sideOffset?: number
}

export function DropdownUser({
  align = 'center',
  children,
  sideOffset = 15,
  loop = false,
}: IDropdownMenuProps): JSX.Element {
  const [theme, setTheme] = useState<string>('light')

  return (
    <Root>
      <Trigger asChild>{children}</Trigger>

      <Portal>
        <MenuContent align={align} loop={loop} sideOffset={sideOffset}>
          <MenuLabel />
          <MenuItem>
            New Tab <RightSlot>⌘+T</RightSlot>
          </MenuItem>
          <MenuItem>
            New Window <RightSlot>⌘+N</RightSlot>
          </MenuItem>
          <MenuItem disabled>
            New Private Window <RightSlot>⇧+⌘+N</RightSlot>
          </MenuItem>

          <Sub>
            <MenuSubTrigger>
              More Tools{' '}
              <RightSlot>
                <ChevronRightIcon />
              </RightSlot>
            </MenuSubTrigger>

            <Portal>
              <MenuSubContent loop={loop} sideOffset={2} alignOffset={-5}>
                <MenuItem>
                  New Tab <RightSlot>⌘+T</RightSlot>
                </MenuItem>
                <MenuItem>Create Shortcut…</MenuItem>
                <MenuItem>Name Window…</MenuItem>
                <MenuSeparator />
                <MenuItem>Developer Tools</MenuItem>
              </MenuSubContent>
            </Portal>
          </Sub>

          <MenuSeparator />

          <MenuLabel>Theme</MenuLabel>
          <RadioGroup
            value={theme}
            onValueChange={(value) => {
              setTheme(value)
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

          {/* <MenuSeparator /> */}

          {/* <MenuCheckboxItem>
            <MenuItemIndicator />
          </MenuCheckboxItem> */}

          {/* <MenuRadioGroup>
            <MenuRadioItem value='value'>
              <MenuItemIndicator />
            </MenuRadioItem>
          </MenuRadioGroup> */}

          <MenuArrow />
        </MenuContent>
      </Portal>
    </Root>
  )
}
