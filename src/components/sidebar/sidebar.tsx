import { useRouter } from 'next/router'

import { useAppSelector } from '@/hooks/useType'
import { ExitIcon, HomeIcon } from '@radix-ui/react-icons'

import { Separator } from '../separator'
import { SideTooltip } from './sideTooltip'
import { ButtonBox, Container, LogoutButton, SideButton } from './styles'

export function Sidebar(): JSX.Element {
  const { categorys } = useAppSelector((state) => {
    return {
      categorys: state.categorys,
    }
  })
  const { pathname } = useRouter()

  function handleSelected(path: string): boolean {
    const pathnameArray = pathname.split('/')
    const pathArray = path.split('/')

    const rootPathname = pathnameArray[1]
    const rootPath = pathArray[1]

    return rootPathname === rootPath
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
          const { icon, name, path } = item

          return (
            <SideTooltip key={`${name}-${i}`} title={name}>
              <SideButton href={path} selected={handleSelected(path)}>
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
