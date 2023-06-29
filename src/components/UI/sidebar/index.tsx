import { useRouter } from 'next/router'

import { useMemo } from 'react'
import { AiOutlineCar } from 'react-icons/ai'

import { useSelector } from '@/hooks/redux'
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
  const categorys = useSelector(({ categorys }) => categorys)

  const handleSelected = (path: string): boolean => {
    return path === id
  }

  const memoHomeIcon = useMemo(() => <HomeIcon />, [])
  const memoEletronicsIcon = useMemo(() => <DesktopIcon />, [])
  const memoAutomotiveIcon = useMemo(() => <AiOutlineCar />, [])
  const memoGamesIcon = useMemo(() => <MixIcon />, [])
  const memoOfficeIcon = useMemo(() => <BackpackIcon />, [])
  const memoSoundAndImageIcon = useMemo(() => <SpeakerLoudIcon />, [])

  const categoryIcons = {
    electronics: memoEletronicsIcon,
    automotive: memoAutomotiveIcon,
    games: memoGamesIcon,
    office: memoOfficeIcon,
    'sound-and-image': memoSoundAndImageIcon,
  }

  return (
    <Container>
      <ButtonBox>
        <SideTooltip title={'Home'}>
          <SideButton href={'/'} selected={handleSelected('/')}>
            {memoHomeIcon}
          </SideButton>
        </SideTooltip>

        <Separator />

        {categorys.map((item, i) => {
          const { name, id } = item
          const icon = categoryIcons[id as keyof typeof categoryIcons]
          const key = `${name}-${i}`

          return (
            <SideTooltip key={key} title={name}>
              <SideButton
                href={`/category/${id}`}
                selected={handleSelected(id)}
              >
                {icon}
              </SideButton>
            </SideTooltip>
          )
        })}
      </ButtonBox>
    </Container>
  )
}
