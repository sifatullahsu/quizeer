import { baseApi } from './baseApi'

export const authApi = baseApi.injectEndpoints({
  endpoints: build => ({
    userRegistration: build.mutation({
      query: data => ({
        url: '/auth/signup',
        method: 'POST',
        data: data
      })
    }),
    userLogin: build.mutation({
      query: data => ({
        url: '/auth/signin',
        method: 'POST',
        data: data
      })
    })
  })
})

export const { useUserRegistrationMutation, useUserLoginMutation } = authApi
