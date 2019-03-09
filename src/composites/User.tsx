import React from 'react'
import styled from 'styled-components'
import Image from '../components/Image'
import Title from '../components/Title'

interface IUser {
  username: string
  avatar: string
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 150px;
  justify-content: space-around;
  margin-top: 25px;
`

const User = (props: IUser) => {
  return (
    <Wrapper>
      <Image src={props.avatar} />
      <Title text={props.username} />
    </Wrapper>
  )
}

export default User
