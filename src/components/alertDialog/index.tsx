import type { ReactNode } from 'react'

import {
  Root,
  Trigger,
  Portal,
  Cancel,
  Action,
} from '@radix-ui/react-alert-dialog'

import { Button } from '../button'
import {
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  Flex,
} from './styles'

interface IDialogProps {
  actionFn?: () => void
  children?: ReactNode
  description?: string
  onOpenChange?: (open: boolean) => void
  open?: boolean
  title?: string
}

export function AlertDialog({
  children,
  actionFn = () => {
    console.log('Action function not defined')
  },
  onOpenChange,
  open,
  description,
  title = 'Você tem certeza absoluta?',
}: IDialogProps): JSX.Element {
  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Trigger asChild>{children}</Trigger>

      <Portal>
        <DialogOverlay />

        <DialogContent>
          {title !== undefined && <DialogTitle>{title}</DialogTitle>}

          {description !== undefined && (
            <DialogDescription>{description}</DialogDescription>
          )}

          <Flex>
            <Cancel asChild>
              <Button variant='outlined'>Cancelar</Button>
            </Cancel>

            <Action asChild>
              <Button
                onClick={() => {
                  actionFn()
                }}
              >
                Sim, tenho certeza
              </Button>
            </Action>
          </Flex>
        </DialogContent>
      </Portal>
    </Root>
  )
}
