import { Portal, Provider, Root, Trigger } from '@radix-ui/react-tooltip'

import { SideTooltip as TooltipContent } from './styles'

interface ITooltipProps {
  children: React.ReactNode
  title: string
}

export function SideTooltip({ children, title }: ITooltipProps): JSX.Element {
  return (
    <Provider disableHoverableContent>
      <Root delayDuration={400}>
        <Trigger asChild>{children}</Trigger>

        <Portal>
          <TooltipContent side='right' sideOffset={-6}>
            {title}
          </TooltipContent>
        </Portal>
      </Root>
    </Provider>
  )
}
