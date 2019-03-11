import React from 'react'
import styled from 'styled-components'
import SearchIcon from '../assets/search.svg'

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 5px 0;
  padding-left: 25px;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: transparent;
  border-bottom: 2px solid #dee3e8;
  position: relative;
  background-image: url(${SearchIcon});
  background-position: left;
  background-repeat: no-repeat;
  background-size: 20px;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`

export default Input
