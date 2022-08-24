import { apiConstructor } from './api'

export interface User {
  id: number
  username: string
  email: string
  name: string
  createdAt: Date
}

export interface UserAttributesApiResponse {
  id: number
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  createdAt: Date
  updatedAt: Date
  name: string
}

const userMapper = (user: UserAttributesApiResponse): User => {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    name: user.name,
    createdAt: new Date(user.createdAt)
  }
}

export const signInService = async (
  email: string,
  password: string
): Promise<{ jwt: string; user: User }> => {
  const response = await apiConstructor().post<{
    jwt: string
    user: UserAttributesApiResponse
  }>('auth/local', {
    identifier: email,
    password
  })

  return { jwt: response.data.jwt, user: userMapper(response.data.user) }
}

type registerParams = {
  email: string
  username: string
  password: string
  name: string
}

export const register = async (userData: registerParams): Promise<User> => {
  const response = await apiConstructor().post<{
    user: UserAttributesApiResponse
  }>('auth/local/register', userData)

  return userMapper(response.data.user)
}
