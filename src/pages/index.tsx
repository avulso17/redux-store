import { useAppSelector } from '@/hooks/useType'

export default function Home(): JSX.Element {
  const { categorys } = useAppSelector((state) => {
    return {
      categorys: state.categorys,
    }
  })

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
