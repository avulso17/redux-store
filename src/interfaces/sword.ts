export type swordOptions =
  | 'blood'
  | 'ice'
  | 'lava'
  | 'meteor'
  | 'pointy'
  | 'sun'
  | 'thin'

export interface ISword3DProps {
  props?: any
  sword?: swordOptions
}
