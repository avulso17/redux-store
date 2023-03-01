import { useRouter } from 'next/router'

import { useAppSelector } from '@/hooks/useType'
import { ExitIcon, HomeIcon } from '@radix-ui/react-icons'

import { Separator } from '../separator'
import { SideTooltip } from './sideTooltip'
import { ButtonBox, Container, LogoutButton, SideButton } from './styles'

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
          const { icon, name, id } = item

          return (
            <SideTooltip key={`${name}-${i}`} title={name}>
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

      <SideTooltip title={'Sair'}>
        <LogoutButton as='button'>
          <ExitIcon />
        </LogoutButton>
      </SideTooltip>
    </Container>
  )
}
