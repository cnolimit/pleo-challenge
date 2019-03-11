import React, { Component } from 'react'
import Dashboard from './layouts/Dashboard'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500');
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Dashboard />
  </React.Fragment>
)

export default App
