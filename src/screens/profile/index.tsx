import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import { Avatar } from '../../components/avatar'
import { Button } from '../../components/button'
import { Fakitter } from '../../components/fakitter'
import { useAuth } from '../../context/auth'
import {
  FakitterData,
  getFakittersByUserIdService
} from '../../services/fakitters'
import {
  ProfileContainer,
  UserContainer,
  UserContent,
  Text,
  Form
} from './styles'

export const Profile = () => {
  const { user, logout } = useAuth()
  const [page, setPage] = useState<number>(1)
  const [refreshing, isRefreshing] = useState<boolean>(false)
  const [fakkiters, setFakkiters] = useState<FakitterData[]>([])
  const firstPage = 1
  const pageSize = 10

  const getFakkiters = useCallback(async (pageNumber: number) => {
    try {
        const fakkiterOldPage = await getFakittersByUserIdService(user.id, pageNumber, pageSize)
      setFakkiters(fakkiters.concat(fakkiterOldPage))
    } catch (error) {
      console.error(error)
    }
  }, [])

  const getMoreData = async () => {
    const newPage = page + 1
    setPage(newPage)
    getFakkiters(newPage)
  }

  useEffect(() => {
    const loadContent = async () => {
        await getFakkiters(firstPage)
    }
    loadContent()
  }, [])

  return (
    <ProfileContainer>
      <UserContainer>
        <Avatar />
        <UserContent>
          <Text>{user?.name}</Text>
          <Text>@{user?.username}</Text>
        </UserContent>
      </UserContainer>
      <FlatList
        data={fakkiters}
        stickyHeaderHiddenOnScroll
        onEndReached={getMoreData}
        ListHeaderComponent={
          <Form>
            <Text>Meus Fakkiters</Text>
            <Button text="Editar perfil" />
            <Button text="Sair" onPress={() => logout()} />
          </Form>
        }
        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={() => getFakkiters(firstPage)} />
        }
        renderItem={({ item }) => <Fakitter fakitter={item} />}
      />
    </ProfileContainer>
  )
}
