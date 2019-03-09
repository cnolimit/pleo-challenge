import React, { Component } from 'react'
import styled from 'styled-components'

interface INavigation {
  title?: string
  acitve?: boolean
  icon: string
}

const SNavigationItem = styled.li`
  height: 50px;
  background-color: #eb59aa;
  border-radius: 5px;
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  cursor: pointer;
  padding: 0 10px;

  span {
    margin: 0 10px;
    letter-spacing: 1px;
  }
`

const NavigationItem = (props: INavigation) => {
  return (
    <SNavigationItem>
      <img src={props.icon} width='40px' height='40px' />
      <span>{props.title}</span>
    </SNavigationItem>
  )
}

export default NavigationItem
