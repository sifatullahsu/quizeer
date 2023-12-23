import { tags } from '../tags'
import { baseApi } from './baseApi'

export const performanceApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createPerformance: build.mutation({
      query: ({ data }) => ({
        url: `/performances`,
        method: 'POST',
        data: data
      }),
      invalidatesTags: [tags.categories]
    }),
    getPerformances: build.query({
      query: ({ query }) => ({
        url: `/performances?${query}`,
        method: 'GET'
      }),
      providesTags: [tags.categories]
    }),
    getPerformance: build.query({
      query: ({ id, query }) => ({
        url: `/performances/${id}?${query}`,
        method: 'GET'
      }),
      providesTags: [tags.categories]
    }),
    updatePerformance: build.mutation({
      query: ({ id, data }) => ({
        url: `/performances/${id}`,
        method: 'PATCH',
        data: data
      }),
      invalidatesTags: [tags.categories]
    }),
    deletePerformance: build.mutation({
      query: ({ id }) => ({
        url: `/performances/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [tags.categories]
    })
  })
})

export const {
  useCreatePerformanceMutation,
  useGetPerformancesQuery,
  useGetPerformanceQuery,
  useUpdatePerformanceMutation,
  useDeletePerformanceMutation
} = performanceApi
