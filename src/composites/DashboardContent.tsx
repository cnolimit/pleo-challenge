import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { format } from 'date-fns'
import { getExpenses } from '../api'
import ExpenseCard from './ExpenseCard'

interface IExpense {
  id: string
  amount: {
    value: string
    currency: string
  }
  date: string
  merchant: string
  receipts: any[]
  comment: string
  category: string
  user: {
    first: string
    last: string
    email: string
  }
}

const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 2px solid;
`

const ExpenseContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  overflow-x: scroll;
  justify-content: center;
`

const Header = styled.header`
  height: 100px;
  width: 100%;
`

export default class DashboardContent extends Component {
  state = {
    expenses: [],
    fetching: true
  }

  componentDidMount() {
    getExpenses()
      .then(({ data: { expenses } }) => {
        this.setState({ expenses, fetching: false })
      })
      .catch(error => {
        this.setState({ fetching: false })
      })
  }

  getTime = (date: string) => format(new Date(date), 'HH:MM')
  getDate = (date: string) => format(new Date(date), 'DD MMM YYYY')

  render() {
    return (
      <Container>
        <Header>Dashboard Content</Header>
        <ExpenseContainer>
          {this.state.expenses.map((expense: IExpense, idx: number) => {
            return (
              <ExpenseCard
                key={expense.id}
                id={expense.id}
                data-testid={`expense-card-${idx}`}
                amount={expense.amount.value}
                comment={expense.comment}
                merchant={expense.merchant}
                currency={expense.amount.currency}
                user={`${expense.user.first} ${expense.user.last}`}
                time={this.getTime(expense.date)}
                date={this.getDate(expense.date)}
                hasReceipts={!!expense.receipts.length}
              />
            )
          })}
        </ExpenseContainer>
      </Container>
    )
  }
}
