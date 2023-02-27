import { Root, Trigger, Portal } from '@radix-ui/react-popover'

import {
  Fieldset,
  Flex,
  IconButton,
  Input,
  Label,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  Text,
} from './styles'

// TODO: CREATE AND INSERT A CLOSE ICON BUTTON
export function TunePopover(): JSX.Element {
  return (
    <Root>
      <Trigger asChild>
        <IconButton aria-label='Update dimensions'>
          <img src={'/navbarIcons/tune_icon.svg'} alt='Pesquisar' />
        </IconButton>
      </Trigger>

      <Portal>
        <PopoverContent sideOffset={5}>
          <Flex>
            <Text style={{ marginBottom: 10 }}>Filter</Text>

            <Fieldset>
              <Label htmlFor='width'>Width</Label>
              <Input id='width' defaultValue='100%' />
            </Fieldset>

            <Fieldset>
              <Label htmlFor='maxWidth'>Max. width</Label>
              <Input id='maxWidth' defaultValue='300px' />
            </Fieldset>

            <Fieldset>
              <Label htmlFor='height'>Height</Label>
              <Input id='height' defaultValue='25px' />
            </Fieldset>

            <Fieldset>
              <Label htmlFor='maxHeight'>Max. height</Label>
              <Input id='maxHeight' defaultValue='none' />
            </Fieldset>
          </Flex>

          <PopoverClose aria-label='Close'>
            <p>X</p>
          </PopoverClose>
          <PopoverArrow />
        </PopoverContent>
      </Portal>
    </Root>
  )
}
