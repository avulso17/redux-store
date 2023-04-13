import { AvatarFallback, AvatarImage, AvatarRoot } from './styles'

export interface IAvatarProps {
  alt?: string
  size: string | number
  src?: string
}

const Icon = (): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    height='50%'
    width='50%'
    fill='none'
  >
    <path
      d='M11.0002 10.9997C9.5335 10.9997 8.27794 10.4775 7.2335 9.43301C6.18905 8.38856 5.66683 7.13301 5.66683 5.66634C5.66683 4.19967 6.18905 2.94412 7.2335 1.89967C8.27794 0.85523 9.5335 0.333008 11.0002 0.333008C12.4668 0.333008 13.7224 0.85523 14.7668 1.89967C15.8113 2.94412 16.3335 4.19967 16.3335 5.66634C16.3335 7.13301 15.8113 8.38856 14.7668 9.43301C13.7224 10.4775 12.4668 10.9997 11.0002 10.9997ZM0.333496 21.6663V17.933C0.333496 17.1775 0.528163 16.4828 0.917496 15.849C1.30594 15.2161 1.82238 14.733 2.46683 14.3997C3.84461 13.7108 5.24461 13.1939 6.66683 12.849C8.08905 12.505 9.5335 12.333 11.0002 12.333C12.4668 12.333 13.9113 12.505 15.3335 12.849C16.7557 13.1939 18.1557 13.7108 19.5335 14.3997C20.1779 14.733 20.6944 15.2161 21.0828 15.849C21.4722 16.4828 21.6668 17.1775 21.6668 17.933V21.6663H0.333496ZM3.00016 18.9997H19.0002V17.933C19.0002 17.6886 18.9393 17.4663 18.8175 17.2663C18.6948 17.0663 18.5335 16.9108 18.3335 16.7997C17.1335 16.1997 15.9224 15.7495 14.7002 15.449C13.4779 15.1495 12.2446 14.9997 11.0002 14.9997C9.75572 14.9997 8.52239 15.1495 7.30016 15.449C6.07794 15.7495 4.86683 16.1997 3.66683 16.7997C3.46683 16.9108 3.30594 17.0663 3.18416 17.2663C3.0615 17.4663 3.00016 17.6886 3.00016 17.933V18.9997ZM11.0002 8.33301C11.7335 8.33301 12.3615 8.07167 12.8842 7.54901C13.4059 7.02723 13.6668 6.39967 13.6668 5.66634C13.6668 4.93301 13.4059 4.30545 12.8842 3.78367C12.3615 3.26101 11.7335 2.99967 11.0002 2.99967C10.2668 2.99967 9.63927 3.26101 9.1175 3.78367C8.59483 4.30545 8.3335 4.93301 8.3335 5.66634C8.3335 6.39967 8.59483 7.02723 9.1175 7.54901C9.63927 8.07167 10.2668 8.33301 11.0002 8.33301Z'
      fill='currentColor'
    />
  </svg>
)

export function Avatar({ size, src, alt }: IAvatarProps): JSX.Element {
  function handleFallback(): JSX.Element | string[] | string {
    if (alt === undefined || alt === '') return <Icon />

    const splitedAlt = alt.split(' ').filter((item) => item !== '')

    if (splitedAlt.length > 2) {
      const firstLetter = splitedAlt[0].charAt(0).toUpperCase()
      const lastLetter = splitedAlt[1].charAt(0).toUpperCase()

      return `${firstLetter}${lastLetter}`
    }

    const firstLetter = splitedAlt.map((item) => item.charAt(0).toUpperCase())

    return firstLetter
  }

  return (
    <AvatarRoot size={size}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback delayMs={600}>{handleFallback()}</AvatarFallback>
    </AvatarRoot>
  )
}
