import React from 'react'
import styled from 'styled-components'

interface ICard {
  children: any
}

const SCard = styled.div`
  border: 2px solid red;
  width: 400px;
  height: 450px;
  border-radius: 5px;
  background: white;
`

const Card = (props: ICard) => {
  return <SCard>{props.children}</SCard>
}

export default Card
