import React, { createContext, useContext, useEffect, useState } from 'react'
import { User } from '../../services/auth'
import {
  signin,
  logout,
  getAuthFromStorage,
  AuthState,
  SignInParams
} from './auth.actions'

export interface AuthContextData {
  user: User
  loading: boolean
  signin: (params: SignInParams) => Promise<void>
  logout: () => void
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, setState] = useState<AuthState>({} as AuthState)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadDataFromStorage = async () => {
      await getAuthFromStorage(setState)
      setLoading(false)
    }

    loadDataFromStorage()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading,
        logout: logout(setState),
        signin: signin(setState)
      }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = (): AuthContextData => useContext(AuthContext)

export { AuthProvider, useAuth }
