import React, { Component } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { getExpenses } from '../api'
import ExpenseCard from './ExpenseCard'
import SearchIcon from '../assets/search.svg'

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

const Filter = styled.span`
  border: 2px solid #dee3e8;
  border-radius: 8px;
  padding: 5px;
  margin-top: 15px;
  margin-right: 10px;
  font-weight: 500;
  font-size: 0.8rem;
  cursor: pointer;
  text-align: center;
  background-color: ${(props: { active: boolean }) => (props.active ? '#E7ECF1' : '#f1f4f6')};
  color: #9daab1;
  display: inline-block;
`

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

enum FILTERS {
  USER = 'USER',
  MERCHANT = 'MERCHANT'
}

interface IDashboardState {
  expenses: IExpense[]
  filteredExpenses: IExpense[]
  activeFilter: FILTERS
}

class DashboardContent extends Component<{}, IDashboardState> {
  state = {
    activeFilter: FILTERS.USER,
    expenses: [],
    filteredExpenses: []
  }

  componentDidMount() {
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

  render() {
    const { filteredExpenses, activeFilter } = this.state
    return (
      <Container>
        <Header>
          <h1>Expenses</h1>
          <FilterWrapper>
            <Input
              type='search'
              placeholder={`Search for a ${activeFilter.toLowerCase()}`}
              onChange={e => this.filterExpenses(e.target.value.toLowerCase())}
            />
            <div>
              <Filter onClick={this.setUserFilter} active={activeFilter === FILTERS.USER}>
                USER
              </Filter>
              <Filter onClick={this.setMerchantFilter} active={activeFilter === FILTERS.MERCHANT}>
                MERCHANT
              </Filter>
            </div>
          </FilterWrapper>
        </Header>
        <ExpenseContainer>
          {filteredExpenses.map((expense: IExpense, idx: number) => {
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

export default DashboardContent
