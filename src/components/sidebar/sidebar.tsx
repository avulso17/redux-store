import { useRouter } from 'next/router'

// import { auth } from '@config/firebase-config'
// import { useAppDispatch } from '@hooks/useType'
// import { setAuthing } from '@store/reducers/authSlice'

import { SideTooltip } from './sideTooltip'
import { ButtonBox, Container, LogoutButton, SideButton } from './styles'

export function Sidebar(): JSX.Element {
  const { pathname } = useRouter()
  // const navigate = useNavigate()
  // const dispatch = useAppDispatch()

  // const logout = (): void => {
  //   localStorage.clear()
  //   dispatch(setAuthing(false))
  //   void auth.signOut()
  //   navigate('/login')
  // }

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
        {routes.map((item, i) => {
          const { icon, name, path } = item

          return (
            <SideTooltip key={`${icon}-${i}`} title={name}>
              <SideButton href={path} selected={handleSelected(path)}>
                <img src={`/sidebarIcons/${icon}_icon.svg`} alt={icon} />
              </SideButton>
            </SideTooltip>
          )
        })}
      </ButtonBox>

      <SideTooltip title={'Sair'}>
        <LogoutButton as='button'>
          <img src={`/sidebarIcons/logout_icon.svg`} alt='Logout' />
        </LogoutButton>
      </SideTooltip>
    </Container>
  )
}

const routes = [
  {
    path: '/dashboard',
    icon: 'dashboard',
    name: 'Dashboard',
  },
  {
    path: '/report',
    icon: 'report',
    name: 'Relatórios',
  },
  {
    path: '/culture',
    icon: 'culture',
    name: 'Safras',
  },
  {
    path: '/properties',
    icon: 'properties',
    name: 'Áreas',
  },
  {
    path: '/profile',
    icon: 'profile',
    name: 'Usuários',
  },
  {
    path: '/crop',
    icon: 'crops',
    name: 'Culturas',
  },
  {
    path: '/admin',
    icon: 'userManagement',
    name: 'User Management',
  },
]
