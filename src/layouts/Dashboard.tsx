import React, { Component } from 'react'
import styled from 'styled-components'
import Sidebar from '../composites/Sidebar'
import DashboardContent from '../container/DashboardContent'

const Container = styled.div`
  background-color: #f1f4f6;
  display: grid;
  grid-template-columns: 0.25fr 1fr;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    nav {
      display: none;
    }
  }
`

const Dashboard = () => (
  <Container>
    <Sidebar />
    <DashboardContent />
  </Container>
)

export default Dashboard
