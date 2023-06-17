import SkeletonLoading, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface ISkeletonLoading {
  baseColor?: string
  borderRadius?: number | string
  className?: string
  count?: number
  height?: number | string
  highlightColor?: string
  style?: React.CSSProperties
  width?: number | string
  wrapper?: React.FunctionComponent<React.PropsWithChildren<unknown>>
}

export function Skeleton({
  baseColor = '#e1e1e1',
  borderRadius = '0.4rem',
  count = 1,
  highlightColor = '#f2f2f2',
  height,
  wrapper,
  width = '100%',
  ...props
}: ISkeletonLoading): JSX.Element {
  return (
    <SkeletonTheme
      baseColor={baseColor}
      borderRadius={borderRadius}
      highlightColor={highlightColor}
      height={height}
      width={width}
    >
      <SkeletonLoading
        borderRadius={borderRadius}
        className={props.className}
        count={count}
        height={height}
        wrapper={wrapper}
        width={width}
        duration={1.2}
        {...props}
      />
    </SkeletonTheme>
  )
}
