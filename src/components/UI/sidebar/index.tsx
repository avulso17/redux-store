import { useRouter } from 'next/router'

import { AiOutlineCar } from 'react-icons/ai'

import { useAppSelector } from '@/hooks/useType'
import {
  BackpackIcon,
  DesktopIcon,
  HomeIcon,
  MixIcon,
  SpeakerLoudIcon,
} from '@radix-ui/react-icons'

import { Separator } from '../../designSystem/separator'
import { SideTooltip } from './sideTooltip'
import { ButtonBox, Container, SideButton } from './styles'

export function Sidebar(): JSX.Element {
  const router = useRouter()
  const { id } = router.query as { id: string }
  const { categorys } = useAppSelector((state) => {
    return {
      categorys: state.categorys,
    }
  })

  function handleSelected(path: string): boolean {
    return path === id
  }

  return (
    <Container>
      <ButtonBox>
        <SideTooltip title={'Home'}>
          <SideButton href={'/'} selected={handleSelected('/')}>
            <HomeIcon />
          </SideButton>
        </SideTooltip>

        <Separator />

        {categorys.map((item, i) => {
          const { name, id } = item

          return (
            <SideTooltip key={`${name}-${i}`} title={name}>
              <SideButton
                href={`/category/${id}`}
                selected={handleSelected(id)}
              >
                {id === 'electronics' && <DesktopIcon />}
                {id === 'automotive' && <AiOutlineCar />}
                {id === 'games' && <MixIcon />}
                {id === 'office' && <BackpackIcon />}
                {id === 'sound-and-image' && <SpeakerLoudIcon />}
              </SideButton>
            </SideTooltip>
          )
        })}
      </ButtonBox>
    </Container>
  )
}
