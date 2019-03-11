import React, { Component } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { getExpenses, updateExpenses } from '../api'
import ExpenseCard from './ExpenseCard'
import Input from '../components/Input'
import Filter from '../components/Filter'

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
  padding: 10px;
`

const ExpenseContainer = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow-x: scroll;
  justify-content: center;
`

const Header = styled.header`
  height: 200px;
  width: 100%;
  max-width: 900px;
  margin: 50px auto 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-weight: 400;
    letter-spacing: 1px;
    margin: 0;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }
`

const FilterWrapper = styled.div`
  padding: 10px 0 0;
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
`
enum FILTERS {
  USER = 'USER',
  MERCHANT = 'MERCHANT'
}

interface IDashboardState {
  expenses: IExpense[]
  filteredExpenses: IExpense[]
  activeFilter: FILTERS
  editing: string
}

class DashboardContent extends Component<{}, IDashboardState> {
  state = {
    activeFilter: FILTERS.USER,
    expenses: [],
    filteredExpenses: [],
    editing: ''
  }

  componentDidMount() {
    this.fetchExpenses()
  }

  fetchExpenses = () => {
    getExpenses().then(({ data: { expenses } }) => {
      this.setState({ expenses, filteredExpenses: expenses })
    })
  }

  filterExpenses = (search: string) => {
    if (this.state.activeFilter === FILTERS.USER) {
      this.setState(state => ({
        filteredExpenses: state.expenses.filter(expense =>
          `${expense.user.first} ${expense.user.last}`.toLowerCase().includes(search)
        )
      }))
    }
    if (this.state.activeFilter === FILTERS.MERCHANT) {
      this.setState(state => ({
        filteredExpenses: state.expenses.filter(expense =>
          expense.merchant.toLowerCase().includes(search)
        )
      }))
    }
  }
  setUserFilter = () => this.setState({ activeFilter: FILTERS.USER })
  setMerchantFilter = () => this.setState({ activeFilter: FILTERS.MERCHANT })

  getTime = (date: string) => format(new Date(date), 'HH:MM')
  getDate = (date: string) => format(new Date(date), 'DD MMM YYYY')

  saveExpenseComment = (id: string, comment: string) =>
    updateExpenses(id, { comment }).then(() => {
      this.fetchExpenses()
    })

  render() {
    const { filteredExpenses, activeFilter } = this.state
    return (
      <Container>
        <Header>
          <h1>Expenses</h1>
          <FilterWrapper>
            <Input
              data-testid='search-textfield'
              type='search'
              placeholder={`Search for a ${activeFilter.toLowerCase()}`}
              onChange={e => this.filterExpenses(e.target.value.toLowerCase())}
            />
            <div>
              <Filter
                data-testid='user-filter-button'
                onClick={this.setUserFilter}
                active={activeFilter === FILTERS.USER}
              >
                USER
              </Filter>
              <Filter
                data-testid='merchant-filter-button'
                onClick={this.setMerchantFilter}
                active={activeFilter === FILTERS.MERCHANT}
              >
                MERCHANT
              </Filter>
            </div>
          </FilterWrapper>
        </Header>
        <ExpenseContainer id='expense-container'>
          {filteredExpenses.map((expense: IExpense, idx: number) => {
            return (
              <ExpenseCard
                key={expense.id}
                id={expense.id}
                data-testid={`expense-card`}
                amount={expense.amount.value}
                comment={expense.comment}
                merchant={expense.merchant}
                currency={expense.amount.currency}
                user={`${expense.user.first} ${expense.user.last}`}
                time={this.getTime(expense.date)}
                date={this.getDate(expense.date)}
                hasReceipts={!!expense.receipts.length}
                onSaveComment={comment => this.saveExpenseComment(expense.id, comment)}
              />
            )
          })}
        </ExpenseContainer>
      </Container>
    )
  }
}

export default DashboardContent
