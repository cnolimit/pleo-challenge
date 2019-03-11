import React from 'react'
import styled from 'styled-components'

const SExpenseDetailCard = styled.div`
  display: flex;
  width: ${(props: { fullWidth: boolean }) => (props.fullWidth ? '310px' : '130px')};
  height: 90px;
  padding: 10px 15px;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.7);
  text-transform: capitalize;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 5px;
  margin: 10px 0;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.02), 0 5px 15px 0 rgba(0, 0, 0, 0.05);
  ${(props: { fullWidth: boolean }) => props.fullWidth && 'grid-column: 1 / 3'}

  span {
    font-size: 0.8rem;
    margin: 10px 0;
    color: #b8b7c3;
  }
`

interface IExpenseDetailCard {
  children: any
  title: string
  fullWidth?: boolean
}

const ExpenseDetailCard = (props: IExpenseDetailCard) => {
  return (
    <SExpenseDetailCard fullWidth={props.fullWidth as boolean}>
      <span>{props.title}</span>
      {props.children}
    </SExpenseDetailCard>
  )
}

export default ExpenseDetailCard