import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, FlatList, RefreshControl } from 'react-native'
import { HomeContainer, HeaderContainer, HeaderContent } from './styles'
import { Fakitter } from '../../components/fakitter'
import { useAuth } from '../../context/auth'
import { FakitterData, getFakittersService } from '../../services/fakitters'

export const Home = () => {
  const { user, logout } = useAuth()
  const [fakitters, setFakitters] = useState<FakitterData[]>([])
  const [page, setPage] = useState<number>(1)
  const pageSize = 10
  const [refreshing, isRefreshing] = useState<boolean>(false)

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
      console.log(newFakitters.length)

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
  useEffect(() => {
    getFakitters()
  }, [])

  return (
    <HomeContainer>
      <TouchableOpacity onPress={() => logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <FlatList
        data={fakitters}
        renderItem={({ item }) => <Fakitter fakitter={item} />}
        ListHeaderComponent={() => (
          <HeaderContainer>
            <HeaderContent>
              <Text>{user.name}</Text>
              <Text>{user.username}</Text>
            </HeaderContent>
          </HeaderContainer>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refreshData} />
        }
        onEndReached={getMoreData}
      />
    </HomeContainer>
  )
}
