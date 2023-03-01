import { Container } from './styles'

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
    <Container>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <span>
        <img src={image} alt='Hero Illustration' />
      </span>
    </Container>
  )
}
