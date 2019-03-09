import React, { Component } from 'react'
import styled from 'styled-components'
import NavigationItem from '../components/NavigationItem'
import ExpenseIcon from '../assets/expense-icon.png'

const list = [{ icon: ExpenseIcon, name: 'Expenses' }]

const SNavigation = styled.nav`
  width: 100%;
  height: 200px;
  margin-top: 100px;
`

const Navigation = () => {
  return (
    <SNavigation>
      {list.map(link => (
        <NavigationItem key={link.name} title={link.name} icon={link.icon} />
      ))}
    </SNavigation>
  )
}

export default Navigation
