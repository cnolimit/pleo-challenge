import React, { Component } from 'react'
import styled from 'styled-components'
import Sidebar from '../composites/Sidebar'
import DashboardContent from '../composites/DashboardContent'

const Container = styled.div`
  border: 2px solid black;
  background-color: #f1f4f6;
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    nav {
      display: none;
    }
  }
`

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Sidebar />
        <DashboardContent />
      </Container>
    )
  }
}
