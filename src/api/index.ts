import axios from 'axios'

export const apiPleo = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export const getExpenses = () => apiPleo.get('/expenses?limit=25&offset=25')

export const updateExpenses = (id: string, data: { receipts?: any; comment?: string }) =>
  apiPleo.post(`/expenses/${id}`, data)
