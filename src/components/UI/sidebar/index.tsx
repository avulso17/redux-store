import { useRouter } from 'next/router'

import { useMemo } from 'react'
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
  const categorys = useAppSelector(({ categorys }) => categorys)

  function handleSelected(path: string): boolean {
    return path === id
  }

  const memoHomeIcon = useMemo(() => <HomeIcon />, [])
  const memoEletronicsIcon = useMemo(() => <DesktopIcon />, [])
  const memoAutomotiveIcon = useMemo(() => <AiOutlineCar />, [])
  const memoGamesIcon = useMemo(() => <MixIcon />, [])
  const memoOfficeIcon = useMemo(() => <BackpackIcon />, [])
  const memoSoundAndImageIcon = useMemo(() => <SpeakerLoudIcon />, [])

  return (
    <Container>
      <ButtonBox>
        <SideTooltip title={'Home'}>
          <SideButton href={'/'} selected={handleSelected('/')}>
            {memoHomeIcon}
          </SideButton>
        </SideTooltip>

        <Separator />

        {categorys.map((item) => {
          const { name, id } = item

          return (
            <SideTooltip key={`${name}-${id}`} title={name}>
              <SideButton
                href={`/category/${id}`}
                selected={handleSelected(id)}
              >
                {id === 'electronics' && [memoEletronicsIcon]}
                {id === 'automotive' && [memoAutomotiveIcon]}
                {id === 'games' && [memoGamesIcon]}
                {id === 'office' && [memoOfficeIcon]}
                {id === 'sound-and-image' && [memoSoundAndImageIcon]}
              </SideButton>
            </SideTooltip>
          )
        })}
      </ButtonBox>
    </Container>
  )
}
