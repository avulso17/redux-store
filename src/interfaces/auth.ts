export interface IAuthSliceType {
  isAuth: boolean
  user: IUser | null
}

export interface ISignInRequestData {
  email: string
  password: string
}

export interface ISignInRequestReturn {
  token: string
  user: IUser
}

export interface ISignInData {
  email: string
  password: string
}

export interface IUser {
  avatar_url: string
  email: string
  name: string
}
