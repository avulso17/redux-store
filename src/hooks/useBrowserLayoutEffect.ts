import { useEffect, useLayoutEffect } from 'react'

export const useBrowserLayoutEffect =
  typeof document === 'undefined' ? useEffect : useLayoutEffect
