import { v4 as uuid } from 'uuid'

import type { ISignInRequestData, ISignInRequestReturn } from '@/types/auth'
const delay: (ms?: number) => Promise<unknown> = async (ms = 750) =>
  await new Promise((resolve) => setTimeout(resolve, ms))

export async function signInRequest(
  data: ISignInRequestData
): Promise<ISignInRequestReturn> {
  await delay()

  return {
    token: uuid(),
    user: {
      name: 'Felipe Mateus',
      email: 'felipe_mateus08@hotmail.com',
      avatar_url: 'https://github.com/avulso17.png',
    },
  }
}
