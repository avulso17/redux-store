import { Root, Trigger, Portal } from '@radix-ui/react-alert-dialog'

import {
  DialogAction,
  DialogCancel,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  Flex,
} from './styles'

interface IDialogProps {
  actionFn?: () => void
  children?: React.ReactNode
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
      {children !== undefined && <Trigger asChild>{children}</Trigger>}

      <Portal>
        <DialogOverlay />

        <DialogContent>
          {title !== undefined && <DialogTitle>{title}</DialogTitle>}

          {description !== undefined && (
            <DialogDescription>{description}</DialogDescription>
          )}

          <Flex>
            <DialogCancel>Cancelar</DialogCancel>

            <DialogAction
              onClick={() => {
                actionFn()
              }}
            >
              Sim, tenho certeza
            </DialogAction>
          </Flex>
        </DialogContent>
      </Portal>
    </Root>
  )
}
