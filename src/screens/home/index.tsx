import React, { useCallback, useEffect, useState } from 'react'
import {
  Text,
  FlatList,
  RefreshControl,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {
  HomeContainer,
  HeaderContainer,
  UserContent,
  styles,
  UserContainer
} from './styles'
import { Fakitter } from '../../components/fakitter'
import { useAuth } from '../../context/auth'
import { FakitterData, getFakittersService } from '../../services/fakitters'
import { Avatar } from '../../components/avatar'
import { Input } from '../../components/input'
import { postFakkit } from '../../services/fakitters'

interface FakkiterForm {
  [key: string]: string
}

const validator = Yup.object().shape({
  fakkiter: Yup.string().required('Fakkiter is required')
})

export const Home = () => {
  const { user } = useAuth()
  const [fakitters, setFakitters] = useState<FakitterData[]>([])
  const [page, setPage] = useState<number>(1)
  const [refreshing, isRefreshing] = useState<boolean>(false)
  const { control, handleSubmit, setValue } = useForm({
    resolver: yupResolver(validator)
  })

  const pageSize = 10

  const getFakitters = async () => {
    try {
      const fakitterData = await getFakittersService({ page, pageSize })
      setFakitters(fakitterData)
    } catch (error) {
      console.error(error)
    }
  }

  const getMoreData = async () => {
    try {
      const newPage = page + 1
      const newFakitters = await getFakittersService({
        page: newPage,
        pageSize
      })
      setFakitters([...fakitters, ...newFakitters])
      setPage(newPage)
    } catch (error) {
      console.error(error)
    }
  }

  const refreshData = async () => {
    try {
      isRefreshing(true)
      const fakitterData = await getFakittersService({ page: 1, pageSize })
      setFakitters(fakitterData)
      isRefreshing(false)
    } catch (error) {
      console.error(error)
    }
  }

  const sendFakkiter = useCallback(async ({ fakkiter }: FakkiterForm) => {
    try {
      await postFakkit({ data: { text: fakkiter, user: user.id } })
      await refreshData()
      setValue('fakkiter', '')
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    getFakitters()
  }, [])

  return (
      <HomeContainer>
        <HeaderContainer>
          <UserContainer>
            <Avatar />
            <UserContent>
              <Text>{user?.name}</Text>
              <Text>@{user?.username}</Text>
            </UserContent>
          </UserContainer>
          <Input
            control={control}
            name="fakkiter"
            containerStyles={styles.inputContainer}
            placeholder="No que você está pensando?"
            returnKeyType="send"
            onSubmitEditing={handleSubmit(sendFakkiter)}
          />
        </HeaderContainer>
        <FlatList
          data={fakitters}
          renderItem={({ item }) => <Fakitter fakitter={item} />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={refreshData} />
          }
          onEndReached={getMoreData}
        />
      </HomeContainer>
  )
}
