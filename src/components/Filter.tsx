import React from 'react'
import styled from 'styled-components'

interface IFilter {
  active: boolean
}

const Filter = styled.span`
  border: 2px solid #da63a7;
  border-radius: 8px;
  padding: 5px;
  margin-top: 15px;
  margin-right: 10px;
  font-weight: 500;
  font-size: 0.8rem;
  cursor: pointer;
  text-align: center;
  background-color: ${(props: IFilter) => (props.active ? '#da63a7' : '#f1f4f6')};
  color: ${(props: IFilter) => (props.active ? 'white' : '#da63a7')};
  display: inline-block;
`
export default Filter
