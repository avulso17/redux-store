import { useRouter } from 'next/router'

import { Hero } from '@/components/hero'
import { useAppSelector } from '@/hooks/useType'

import Error404Page from '../404'

export default function CategoryPage(): JSX.Element {
  const router = useRouter()
  const { id } = router.query as { id: string }
  const category = useAppSelector((state) =>
    state.categorys.find((item) => item.id === id)
  )

  return (
    <>
      {category !== undefined ? (
        <Hero title={category.name} description={category.description} />
      ) : (
        <Error404Page />
      )}
    </>
  )
}
