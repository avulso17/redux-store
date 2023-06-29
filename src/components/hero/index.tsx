import { Container, ImageContainer, TitleSection } from './styles'

interface IHeroProps {
  description: string
  image?: string
  title: string
}

export function Hero({
  title,
  description,
  image = '/imgs/mobile_illustration.png',
}: IHeroProps): JSX.Element {
  return (
    <Container role='banner' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <TitleSection>
        <h1>{title}</h1>
        <p>{description}</p>
      </TitleSection>

      <ImageContainer>
        <img src={image} alt='Hero Illustration' />
      </ImageContainer>
    </Container>
  )
}
