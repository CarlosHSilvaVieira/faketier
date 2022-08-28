import React, { useCallback, useEffect, useState } from 'react'
import { Text, TouchableOpacity, FlatList, RefreshControl } from 'react-native'
import { HomeContainer, HeaderContainer, UserContent, styles, UserContainer } from './styles'
import { Fakitter } from '../../components/fakitter'
import { useAuth } from '../../context/auth'
import { FakitterData, getFakittersService } from '../../services/fakitters'
import { Avatar } from '../../components/avatar'
import { Input } from '../../components/input'
import { postFakkit } from '../../services/fakitters'

export const Home = () => {
  const { user, logout } = useAuth()
  const [fakitters, setFakitters] = useState<FakitterData[]>([])
  const [page, setPage] = useState<number>(1)
  const [refreshing, isRefreshing] = useState<boolean>(false)
  const [fakkiter, setFakkiter] = useState('')
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

  const sendFakkiter = useCallback(async () => {
    try {
      await postFakkit({ data: { text: fakkiter, user: 1 } })
      await refreshData()
    } catch (error) {
      console.error(error)
    }
  }, [fakkiter])

  useEffect(() => {
    getFakitters()
  }, [])

  const data: FakitterData[] = [
    {
      id: 1,
      createdAt: new Date(),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rerum sit commodi maxime dicta? Maxime commodi quas recusandae aut optio omnis velit aspernatur amet magnam ad quae officia, dolorum minus.',
      user: {
        createdAt: new Date(),
        email: 'exemplo@email.com',
        id: 1,
        name: 'Usuario',
        username: 'usu_ario'
      }
    },
    {
      id: 1,
      createdAt: new Date(),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rerum sit commodi maxime dicta? Maxime commodi quas recusandae aut optio omnis velit aspernatur amet magnam ad quae officia, dolorum minus.',
      user: {
        createdAt: new Date(),
        email: 'exemplo@email.com',
        id: 1,
        name: 'Usuario',
        username: 'usu_ario'
      }
    },
    {
      id: 1,
      createdAt: new Date(),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rerum sit commodi maxime dicta? Maxime commodi quas recusandae aut optio omnis velit aspernatur amet magnam ad quae officia, dolorum minus.',
      user: {
        createdAt: new Date(),
        email: 'exemplo@email.com',
        id: 1,
        name: 'Usuario',
        username: 'usu_ario'
      }
    },
    {
      id: 1,
      createdAt: new Date(),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rerum sit commodi maxime dicta? Maxime commodi quas recusandae aut optio omnis velit aspernatur amet magnam ad quae officia, dolorum minus.',
      user: {
        createdAt: new Date(),
        email: 'exemplo@email.com',
        id: 1,
        name: 'Usuario',
        username: 'usu_ario'
      }
    }
  ]

  return (
    <HomeContainer>
      <HeaderContainer>
        <UserContainer>
          <Avatar />
          <UserContent>
            <Text>{'user?.name'}</Text>
            <Text>@{'user?.username'}</Text>
          </UserContent>
        </UserContainer>
        <Input
        containerStyles={styles.inputContainer}
        placeholder='No que você está pensando?'
        returnKeyType='send'
        value={fakkiter}
        onChangeText={setFakkiter}
        onSubmitEditing={() => sendFakkiter()}
      />
      </HeaderContainer>
      
      <FlatList
        // data={fakitters}
        data={data}
        renderItem={({ item }) => <Fakitter fakitter={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refreshData} />
        }
        onEndReached={getMoreData}
      />
    </HomeContainer>
  )
}
