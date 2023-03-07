import type { Dispatch, SetStateAction } from 'react'
import { useState, useEffect } from 'react'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

export function usePersistedState<T>(
  key: string,
  initialState: T
): Response<T> {
  const [state, setState] = useState(() => {
    if (typeof window !== 'undefined') {
      const storageValue = localStorage.getItem(key)

      if (storageValue !== null) {
        return JSON.parse(storageValue)
      } else {
        return initialState
      }
    } else {
      return null
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
