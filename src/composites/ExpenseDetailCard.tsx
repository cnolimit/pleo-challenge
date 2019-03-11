import React from 'react'
import styled from 'styled-components'

const SExpenseDetailCard = styled.div`
  display: flex;
  width: ${(props: { fullWidth: boolean }) => (props.fullWidth ? '85%' : '65%')};
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
  header {
    display: flex;
    justify-content: space-between;
  }
  img {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

interface IExpenseDetailCard {
  children: any
  title: string
  fullWidth?: boolean
  icon?: string
  onClick?: () => void
}

const ExpenseDetailCard = (props: IExpenseDetailCard) => {
  return (
    <SExpenseDetailCard fullWidth={props.fullWidth as boolean}>
      <header>
        <span>{props.title}</span>
        {props.icon ? (
          <span>
            <img
              onClick={() => props.onClick && props.onClick()}
              src={props.icon}
              width='15px'
              height='15px'
            />
          </span>
        ) : null}
      </header>
      {props.children}
    </SExpenseDetailCard>
  )
}

export default ExpenseDetailCard
