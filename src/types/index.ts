/* eslint-disable @typescript-eslint/ban-types */
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

export type NextLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextLayout
}

export type iChildren = {
  children: ReactElement | ReactNode
}

export type iFormEvent = React.FormEvent<HTMLFormElement>

export type iMeta = {
  page: number
  limit: number
  count: number
}

export type iCategory = {
  id: string
  title: string
  createdAt: Date
  updatedAt: Date
}

export type iOption = {
  id: string
  text: string
  is_correct: boolean
  question_id: string
  createdAt: Date
  updatedAt: Date
}

export type iQuestion = {
  id: string
  title: string
  description: string
  point: number
  remark: string
  quiz_id: string
  options?: iOption[]
  createdAt: Date
  updatedAt: Date
}

export type iQuiz = {
  id: string
  title: string
  short_description: string
  description: string
  total_point: number
  minimum_point: number
  duration: number
  category_id: string | null
  questions?: iQuestion[]
  categories?: iCategory
  createdAt: Date
  updatedAt: Date
}

export type iUser = {
  id: string
  name: string
  email: string
  password: string
  role: 'admin' | 'participate'
  createdAt: Date
  updatedAt: Date
}

export type iPerformance = {
  id: string
  user_id: string
  quiz_id: string
  total_questions: number
  total_point: number
  minimum_point: number
  correct_answer: number
  score: number
  status: 'passed' | 'failed'
  users: iUser
  quizzes: iQuiz
  createdAt: Date
  updatedAt: Date
}
