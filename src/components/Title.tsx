import React from 'react'
import styled from 'styled-components'

const STitle = styled.header`
  color: #2c2b38;
  font-size: ${(props: { large: boolean }) => (props.large ? '2rem' : '1.5rem')};
`

interface ITitle {
  text: string
  large?: boolean
}

const Title = (props: ITitle) => {
  return <STitle large={props.large as boolean}>{props.text}</STitle>
}

export default Title
