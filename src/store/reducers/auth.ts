import Router from 'next/router'

import { setCookie } from 'nookies'

import { signInRequest } from '@/services/auth'
import type { IAuthSliceType, ISignInData } from '@/types/auth'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState: IAuthSliceType = {
  isAuth: false,
  user: null,
}

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }: ISignInData) => {
    const { token, user } = await signInRequest({
      email,
      password,
    })

    setCookie(undefined, 'reduxstore.token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    })

    return user
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isAuth: (state) => {
      state.isAuth = !(state.user == null) // talvez apareça algum bug: estava -> !!state.user
    },
    user: ({ user }, { payload }) => {
      user = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.isAuth = true
      state.user = payload

      void Router.push('/')
    })
  },
})

export default authSlice.reducer
