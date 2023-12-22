import { tags } from '../tags'
import { baseApi } from './baseApi'

export const quizApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createQuiz: build.mutation({
      query: ({ data }) => ({
        url: `/quizzes`,
        method: 'POST',
        data: data
      }),
      invalidatesTags: [tags.quizzes]
    }),
    getQuizzes: build.query({
      query: ({ query }) => ({
        url: `/quizzes?${query}`,
        method: 'GET'
      }),
      providesTags: [tags.quizzes]
    }),
    getQuiz: build.query({
      query: ({ id, query }) => ({
        url: `/quizzes/${id}?${query}`,
        method: 'GET'
      }),
      providesTags: [tags.quizzes]
    }),
    updateQuiz: build.mutation({
      query: ({ id, data }) => ({
        url: `/quizzes/${id}`,
        method: 'PATCH',
        data: data
      }),
      invalidatesTags: [tags.quizzes]
    }),
    deleteQuiz: build.mutation({
      query: ({ id }) => ({
        url: `/quizzes/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [tags.quizzes]
    })
  })
})

export const {
  useCreateQuizMutation,
  useGetQuizzesQuery,
  useGetQuizQuery,
  useUpdateQuizMutation,
  useDeleteQuizMutation
} = quizApi
