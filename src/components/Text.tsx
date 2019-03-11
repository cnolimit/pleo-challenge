import React from 'react'
import styled from 'styled-components'

const SText = styled.h4`
  color: #848286;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 10px 10px 0;
  font-weight: 400;
  img {
    margin-right: 5px;
  }
  span {
    margin-right: 5px;
  }
`

interface IText {
  children: string
  icon: string
}

const Text = (props: IText) => {
  return (
    <SText>
      <img width='15px' height='15px' src={props.icon} />
      <span>{props.children}</span>
    </SText>
  )
}

export default Text
