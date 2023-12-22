import { tags } from '../tags'
import { baseApi } from './baseApi'

const usersApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getUsers: build.query({
      query: ({ query }) => ({
        url: `/users?${query}`,
        method: 'GET'
      }),
      providesTags: [tags.users]
    }),
    getUser: build.query({
      query: ({ id, query }) => ({
        url: `/users/${id}?${query}`,
        method: 'GET'
      }),
      providesTags: [tags.users]
    }),
    updateUser: build.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: 'PATCH',
        data: data
      }),
      invalidatesTags: [tags.users]
    }),
    deleteUser: build.mutation({
      query: ({ id }) => ({
        url: `/users/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [tags.users]
    })
  })
})

export const { useGetUsersQuery, useGetUserQuery, useUpdateUserMutation } = usersApi
