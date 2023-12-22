/* eslint-disable @typescript-eslint/consistent-type-definitions */
import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      role: 'admin' | 'participate'
      access_token: string
    }
  }
}
