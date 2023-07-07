import { useRouter } from 'next/router'

import { SiRedux } from 'react-icons/si'

import { Hero } from '@/components/hero'
import { ProductItem } from '@/components/productItem'
import { useSelector } from '@/hooks/redux'

import {
  Container,
  HeroContainer,
  ItensTable,
  LoadingContainer,
} from './styles'

export default function CategoryPage(): JSX.Element {
  const router = useRouter()
  const { id } = router.query as { id: string }
  const { category, itens } = useSelector((state) => {
    // TODO: Refactor/improve this regExp
    const regexp = new RegExp(state.search, 'i')

    return {
      category: state.categorys.find((item) => item.id === id),
      itens: state.itens.filter(
        (item) => item.category === id && item.title.match(regexp)
      ),
    }
  })
  const hasCategory = category !== undefined

  return (
    <>
      {hasCategory ? (
        <Container>
          <HeroContainer>
            <Hero
              title={category.name}
              description={category.description}
              image={category.hero}
            />
          </HeroContainer>

          <ItensTable>
            {itens.length > 0 ? (
              itens.map((item) => {
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
              })
            ) : (
              <h1>Nenhum item encontrado</h1>
            )}
          </ItensTable>
        </Container>
      ) : (
        <LoadingContainer>
          <SiRedux />
        </LoadingContainer>
      )}
    </>
  )
}
