import type { StoryObj, Meta } from '@storybook/react'

import type { IAvatarProps } from './avatar'
import { Avatar } from './avatar'

const meta: Meta<IAvatarProps> = {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    size: '3.2',
    src: '',
    alt: 'Luis Felipe',
  },
  argTypes: {
    size: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Primary: Story = {}

export const WithSrc: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/4256471?v=4',
  },
}
