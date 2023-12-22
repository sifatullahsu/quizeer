import { baseApi } from './baseApi'

export const authApi = baseApi.injectEndpoints({
  endpoints: build => ({
    userSignUp: build.mutation({
      query: ({ data }) => ({
        url: '/auth/signup',
        method: 'POST',
        data: data
      })
    }),
    userSignIn: build.mutation({
      query: ({ data }) => ({
        url: '/auth/signin',
        method: 'POST',
        data: data
      })
    })
  })
})

export const { useUserSignInMutation, useUserSignUpMutation } = authApi
