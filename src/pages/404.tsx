import Link from 'next/link'

import { Container404 } from './styles'

export default function Error404Page(): JSX.Element {
  return (
    <Container404>
      <img src='/imgs/404_illustration.svg' alt='404 Not Found' />

      <div>
        <h1>Whoops!</h1>
        <p>Sorry, the page you were looking for doesn&apos;t exist.</p>

        <Link href='/'>Go back to the homepage</Link>
      </div>
    </Container404>
  )
}
