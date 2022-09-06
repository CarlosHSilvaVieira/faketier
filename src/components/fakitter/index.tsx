import React from 'react'

import {
  Author,
  FakitterContainer,
  FakitterContent,
  Header,
  Text,
  Username
} from './styles'
import { FakitterData } from '../../services/fakitters'
import { Avatar } from '../avatar'

type FakitterProps = {
  fakitter: FakitterData
}

export const Fakitter = ({ fakitter }: FakitterProps) => {
  return (
    <FakitterContainer>
      <Avatar />
      <FakitterContent>
        <Header>
          <Author>{fakitter.user.name}</Author>
          <Username> @{fakitter.user.username}</Username>
        </Header>
        <Text>{fakitter.text}</Text>
      </FakitterContent>
    </FakitterContainer>
  )
}
