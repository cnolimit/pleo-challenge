import React, { Component } from 'react'
import styled from 'styled-components'
import Navigation from '../composites/Navigation'
import Logo from '../components/Logo'
import User from '../composites/User'
import User1 from '../assets/niccolo.png'

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 25px;
`

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        <Logo />
        <User username='Phillip' avatar={User1} />
        <Navigation />
      </Container>
    )
  }
}
