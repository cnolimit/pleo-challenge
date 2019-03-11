import React from 'react'
import styled from 'styled-components'

interface ICard {
  children: any
}

const SCard = styled.div`
  width: 400px;
  height: 450px;
  border-radius: 6px;
  background: white;
  overflow: hidden;
  padding: 15px;
  margin: 25px;
`

const Card = (props: ICard) => {
  return <SCard>{props.children}</SCard>
}

export default Card
