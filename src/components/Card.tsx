import React from 'react'
import styled from 'styled-components'

interface ICard {
  children: any
}

const SCard = styled.div`
  width: 400px;
  min-height: 450px;
  border-radius: 6px;
  background: white;
  overflow: hidden;
  padding: 15px;
  margin: 25px;

  @media (min-width: 768px) {
    max-height: 450px;
  }
`

const Card = (props: ICard) => {
  return <SCard {...props}>{props.children}</SCard>
}

export default Card
