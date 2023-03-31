import { Html, useProgress } from '@react-three/drei'

export default function Loader(): JSX.Element {
  const { progress } = useProgress()
  return <Html center>{progress.toFixed(0)} % loaded</Html>
}
