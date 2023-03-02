import { useRouter } from 'next/router'

import { Hero } from '@/components/hero'
import { ProductItem } from '@/components/productItem'
import { useAppSelector } from '@/hooks/useType'

import Error404Page from '../404'
import { Container, HeroContainer, ItensTable } from './styles'

export default function CategoryPage(): JSX.Element {
  const router = useRouter()
  const { id } = router.query as { id: string }
  const { category, itens } = useAppSelector((state) => ({
    category: state.categorys.find((item) => item.id === id),
    itens: state.itens.filter((item) => item.category === id),
  }))

  return (
    <>
      {category !== undefined ? (
        <Container>
          <HeroContainer>
            <Hero
              title={category.name}
              description={category.description}
              image={category.hero}
            />
          </HeroContainer>

          <ItensTable>
            {itens.map((item) => {
              const { id, price, title, description, favorite, photo } = item

              return (
                <ProductItem
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  favorite={favorite}
                  photo={photo}
                />
              )
            })}
          </ItensTable>
        </Container>
      ) : (
        <Error404Page />
      )}
    </>
  )
}
