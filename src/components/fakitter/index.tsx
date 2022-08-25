import React from 'react'
import {
  FakitterAuthor,
  FakitterContainer,
  FakitterContent,
  FakitterHeader,
  FakitterText,
  FakitterUsername
} from './styles'
import { FakitterData } from '../../services/fakitters'
// import Avatar from '../Avatar';

type FakitterProps = {
  fakitter: FakitterData
}

export const Fakitter = ({ fakitter }: FakitterProps) => {
  return (
    <FakitterContainer>
      {/*<Avatar user={fakitter.user} size={40} />*/}
      <FakitterContent>
        <FakitterHeader>
          <FakitterAuthor>{fakitter.user.name}</FakitterAuthor>
          <FakitterUsername> @{fakitter.user.username}</FakitterUsername>
        </FakitterHeader>
        <FakitterText>{fakitter.text}</FakitterText>
      </FakitterContent>
    </FakitterContainer>
  )
}
