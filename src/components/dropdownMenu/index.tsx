// import { useState } from 'react'

import {
  MenuArrow,
  // MenuCheckboxItem,
  MenuContent,
  // MenuGroup,
  MenuItem,
  // MenuItemIndicator,
  MenuLabel,
  MenuPortal,
  // MenuRadioGroup,
  // MenuRadioItem,
  MenuRoot,
  MenuSeparator,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
  RightSlot,
} from './styles'

interface IDropdownMenuProps {
  align?: 'start' | 'center' | 'end'
  children: React.ReactNode
  loop?: boolean
  sideOffset?: number
}

// TODO: unfinished
export function DropdownMenu({
  align = 'center',
  children,
  sideOffset = 15,
  loop = false,
}: IDropdownMenuProps): JSX.Element {
  // const [bookmarksChecked, setBookmarksChecked] = useState(true)
  // const [urlsChecked, setUrlsChecked] = useState(false)
  // const [person, setPerson] = useState('pedro')

  return (
    <MenuRoot>
      <MenuTrigger asChild>{children}</MenuTrigger>

      <MenuPortal>
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

          <MenuSub>
            <MenuSubTrigger>
              More Tools <RightSlot>{'>'}</RightSlot>
            </MenuSubTrigger>

            <MenuPortal>
              <MenuSubContent loop={loop} sideOffset={2} alignOffset={-5}>
                <MenuItem>
                  New Tab <RightSlot>⌘+T</RightSlot>
                </MenuItem>
                <MenuItem>Create Shortcut…</MenuItem>
                <MenuItem>Name Window…</MenuItem>
                <MenuSeparator />
                <MenuItem>Developer Tools</MenuItem>
              </MenuSubContent>
            </MenuPortal>
          </MenuSub>

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
      </MenuPortal>
    </MenuRoot>
  )
}
