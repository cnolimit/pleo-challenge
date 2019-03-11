import React, { Component } from 'react'
import styled from 'styled-components'

interface INavigation {
  title?: string
  acitve?: boolean
  icon: string
}

const SNavigationItem = styled.li`
  height: 60px;
  background-color: #eb59aa;
  border-radius: 5px;
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  cursor: pointer;
  padding: 0 20px;

  span {
    margin: 0 20px;
    letter-spacing: 1px;
  }
`

const NavigationItem = (props: INavigation) => {
  return (
    <SNavigationItem>
      <img src={props.icon} width='15px' height='15px' />
      <span>{props.title}</span>
    </SNavigationItem>
  )
}

export default NavigationItem
