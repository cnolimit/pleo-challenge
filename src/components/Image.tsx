import React from 'react'
import styled from 'styled-components'

interface IImage {
  src: string
}

const SImage = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
`

const Image = (props: IImage) => <SImage src={props.src} />

export default Image
