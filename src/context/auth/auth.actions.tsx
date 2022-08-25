import React, { useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { signInService, User } from '../../services/auth'
import { api } from '../../services/api'

export interface SignInParams {
  email: string
  password: string
}

export interface AuthState {
  jwt: string
  user: User
}

const signin = (callback: ({}: AuthState) => void) => useCallback(async ({ email, password }: SignInParams) => {
  const { jwt, user } = await signInService(email, password)
  await AsyncStorage.multiSet([
    ['@Faketier:jwt', jwt],
    ['@Faketier:user', JSON.stringify(user)]
  ])

  api.interceptors.request.use(
    config => {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${jwt}`
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  return callback({ jwt, user })
}, [])

const logout = (callback: ({}: AuthState) => void) => useCallback(async () => {
  await AsyncStorage.multiRemove(['@Faketier:jwt', '@Faketier:user'])
  api.defaults.headers.common.Authorization = false
  callback({} as AuthState)
}, [])

const getAuthFromStorage = async (callback: ({}: AuthState) => void) => {
  const dataIndex = 1
  const [storagedJWT, storagedUser] = await AsyncStorage.multiGet([
    '@Faketier:jwt',
    '@Faketier:user'
  ])

  const jwt = storagedJWT[dataIndex]
  const user = storagedUser[dataIndex]

  if (jwt && user) {
    callback({ jwt, user: JSON.parse(user) })
  }
}

export { signin, logout, getAuthFromStorage }
