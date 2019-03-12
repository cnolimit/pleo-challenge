import React from 'react'
import styled from 'styled-components'

interface IFilter {
  active: boolean
}

const Filter = styled.span`
  border: 2px solid #eb4869;
  border-radius: 8px;
  padding: 5px;
  margin-top: 15px;
  margin-right: 10px;
  font-weight: 500;
  font-size: 0.8rem;
  cursor: pointer;
  text-align: center;
  background-color: ${(props: IFilter) => (props.active ? '#eb4869' : '#f1f4f6')};
  color: ${(props: IFilter) => (props.active ? 'white' : '#eb4869')};
  display: inline-block;
`
export default Filter
